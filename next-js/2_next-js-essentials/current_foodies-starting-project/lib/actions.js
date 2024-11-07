"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// Menandakan sebuah function hanya dieksekusi dari server
// Server action function
export const submitMeal = async (formData) => {
  const mealsData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(mealsData);
  redirect("/meals");
};
