import { storePost } from "@/lib/posts";

export default function NewPostPage() {
  // Jika function akan dipanggil di form action, set function sebagai use server
  const createPost = async (formdata) => {
    "use server";
    const title = formdata.get("title");
    const image = formdata.get("image");
    const content = formdata.get("content");

    storePost({
      title,
      imageUrl: "",
      content,
      userId: 1,
    });
  };

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input type="file" accept="image/png, image/jpeg" id="image" name="image" />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </p>
      </form>
    </>
  );
}
