"use client";

import Wrapper from "@/component/wrapper";
import { useEffect, useMemo, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
};

export default function ExerciseMedium() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSaved, setLastSaved] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  // ===========================
  // 1️⃣ useEffect - Auto-save tasks to localStorage dengan cleanup
  // ===========================
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSaving(true);
      console.log("Saving tasks:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setLastSaved(new Date().toLocaleDateString());
      setIsSaving(false);
    }, 5000);

    return () => {
      console.log("Clean up storing data");
      clearInterval(interval);
    };
  }, [tasks]);

  // ===========================
  // 2️⃣ useEffect - Load tasks from localStorage on mount
  // ===========================
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    try {
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Error load tasks:", error);
    }
  }, []);

  // ===========================
  // 3️⃣ useMemo - Filter tasks berdasarkan search term
  // ===========================
  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm),
    );
  }, [searchTerm, tasks]);

  // ===========================
  // Handler Functions
  // ===========================

  // 🔹 Add task menggunakan FormData + onSubmit (Best Practice)
  const handleAddTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const description = (formData.get("description") ?? "") as string;
    const title = (formData.get("title") ?? "") as string;

    if (!title.trim()) {
      alert("Title cannot be empty");
      return;
    }

    setTasks((prev) => [
      {
        id: Date.now(),
        createdAt: Date.now(),
        completed: false,
        description: description,
        title: title,
      },
      ...prev,
    ]);

    e.currentTarget.reset();
  };

  // 🔹 Toggle task completion
  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // 🔹 Delete task
  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Manual save
  const handleManualSave = () => {
    setIsSaving(true);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setLastSaved(new Date().toLocaleDateString());
    setIsSaving(false);
  };

  // 🔹 Clear all tasks
  const handleClearAll = () => {
    if (window.confirm("Are you sure want to delete all tasks?")) {
      setTasks([]);
      localStorage.removeItem("tasks");
    }
  };

  return (
    <Wrapper title="🎯 Exercise Medium Level - Task Manager">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* ===== ADD TASK FORM ===== */}
        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">➕ Add New Task</h2>
          <form onSubmit={handleAddTask} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Task Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter task title..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Task Description (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter task description..."
                rows={3}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* ===== SEARCH & CONTROL ===== */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              🔍 Search Tasks
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
            />
          </div>

          {/* Status & Controls */}
          <div className="flex justify-between items-center text-sm">
            <div className="space-y-1">
              <p className="text-gray-600">
                📝 Total Tasks: <span className="font-bold">{tasks.length}</span>
              </p>
              <p className="text-gray-600">
                ✅ Completed:{" "}
                <span className="font-bold">
                  {tasks.filter((t) => t.completed).length}
                </span>
              </p>
              <p className="text-gray-600">
                ⏱️ Last Saved: <span className="font-bold">{lastSaved || "Never"}</span>
              </p>
            </div>

            <div className="space-x-2">
              <button
                onClick={handleManualSave}
                disabled={isSaving}
                className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "💾 Save Now"}
              </button>
              {tasks.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                >
                  🗑️ Clear All
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ===== TASK LIST ===== */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">📋 Tasks ({filteredTasks.length})</h2>

          {filteredTasks.length === 0 ? (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-gray-600">
                {searchTerm
                  ? "No tasks match your search 🔍"
                  : "No tasks yet! Add one to get started 🚀"}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredTasks.map((task: any) => (
                <div
                  key={task.id}
                  className={`border-l-4 p-4 rounded-lg transition ${
                    task.completed
                      ? "bg-gray-100 border-l-gray-400 opacity-60"
                      : "bg-white border-l-blue-500 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                      className="mt-1 w-5 h-5 cursor-pointer rounded"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold text-lg ${
                          task.completed ? "line-through text-gray-400" : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                      )}
                      <p className="text-gray-400 text-xs mt-2">
                        {new Date(task.createdAt).toLocaleDateString("id-ID", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded whitespace-nowrap"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== LEARNING NOTES ===== */}
        <div className="bg-purple-50 border-l-4 border-l-purple-500 p-4 rounded text-sm text-gray-700 space-y-2">
          <p className="font-bold text-purple-900">📚 Hooks Used in This Exercise:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>
              <strong>useState:</strong> Manage tasks list & search term
            </li>
            <li>
              <strong>useEffect #1:</strong> Auto-save to localStorage every 5s with
              cleanup
            </li>
            <li>
              <strong>useEffect #2:</strong> Load tasks from localStorage on mount
            </li>
            <li>
              <strong>useMemo:</strong> Filter tasks by search term (memoized)
            </li>
            <li>
              <strong>FormData:</strong> Add task using form submit (best practice)
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
