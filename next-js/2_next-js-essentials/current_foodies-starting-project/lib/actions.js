"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalid = (text) => {
  return !text || text.trim() === "";
};

// Menandakan sebuah function hanya dieksekusi dari server
// Server action function
export const submitMeal = async (prevState, formData) => {
  const mealsData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalid(mealsData.title) ||
    isInvalid(mealsData.summary) ||
    isInvalid(mealsData.instructions) ||
    isInvalid(mealsData.creator) ||
    isInvalid(mealsData.creator_email) ||
    !mealsData.creator_email.includes("@") ||
    !mealsData.image ||
    !mealsData.image.size === 0
  ) {
    return {
      message: "invalid Input!",
    };
  }

  await saveMeal(mealsData);

  // melakukan validasi caching pada semua halaman
  // perlu dilakukan untuk keperluan production
  revalidatePath("/", "layout");
  redirect("/meals");
};
