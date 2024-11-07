import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed!");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  // Pakai "?" saat menuliskan query agar tidak terkena sql injection
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Ambil dulu extensionnya
  const extension = meal.image.name.split(".").pop();
  // Set filename yg akan disimpan nanti
  const fileName = `${meal.slug}.${extension}`;

  // Target di mana image akan disimpan menggunakan file system
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  // Simpan gambar ke public folder
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Saving image failed!");
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
    `
  ).run(meal);
};
