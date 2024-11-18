"use client";

import { geistSans } from "@/lib/fonts/font";
import Image from "next/image";
import { useRef, useState } from "react";

function ImageLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  );
}

export default function CreateNewPost() {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const onSubmit = () => {
    imageInput.current.click();
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <main className="w-[80%] mx-auto">
      <h1 className={`${geistSans.className} font-extrabold text-4xl uppercase my-10`}>
        Create your new post
      </h1>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="creator" className={`${geistSans.className} text-lg`}>
            Creator name
          </label>
          <input
            type="text"
            name="creator"
            id="creator"
            className="bg-gray-600 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className={`${geistSans.className} text-lg`}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-600 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className={`${geistSans.className} text-lg`}>Image Cover</p>
          <label htmlFor="imageCover" className="flex">
            <input
              type="file"
              name="imageCover"
              id="imageCover"
              accept="image/png, image/jpeg"
              ref={imageInput}
              onChange={onChangeImage}
              className="flex-1 cursor-pointer bg-gray-600 p-2 rounded-md file:bg-[#FB78BD] file:p-3 file:cursor-pointer file:text-white file:rounded-lg file:px-10 file:mr-10 file:border-none file:font-semibold"
            />
          </label>
        </div>
        <div className="flex flex-col gap-2 h-80">
          {pickedImage ? (
            <div className="relative flex justify-center items-center h-[100%]">
              <Image
                src={pickedImage}
                alt="cover-image"
                fill
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ) : (
            <div className="border-4 border-dashed border-gray-500 rounded-xl p-10 flex items-center justify-center gap-2 h-[100%]">
              <ImageLogo />
              <p className="text-lg text-center font-bold text-gray-500">
                No Image Picked
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="article" className={`${geistSans.className} text-lg`}>
            Article
          </label>
          <textarea
            type="text"
            name="article"
            id="article"
            rows={10}
            className="bg-gray-600 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FB78BD] text-[#0E1217] p-3 rounded-lg text-lg tracking-wide font-bold"
        >
          Submit Article
        </button>
      </form>
    </main>
  );
}
