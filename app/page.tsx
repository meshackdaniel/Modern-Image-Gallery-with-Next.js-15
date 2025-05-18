"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Save all images in an array
const images = [
  {
    src: "/images/image-1.png",
    alt: "1st Image",
  },
  {
    src: "/images/image-2.png",
    alt: "2nd Image",
  },
  {
    src: "/images/image-3.png",
    alt: "3rd Image",
  },
  {
    src: "/images/image-4.png",
    alt: "4th Image",
  },
  {
    src: "/images/image-5.png",
    alt: "5th Image",
  },
  {
    src: "/images/image-6.png",
    alt: "6th Image",
  },
];

const home = () => {
  const [galleryImage, setGalleryImage] = useState("/images/image-1.png");
  const [showImage, setShowImage] = useState("hidden");

  // Create a function to display next image
  const [index, setIndex] = useState(0);
  const nextImage = async () => {
    if (index + 1 == images.length) {
      await setIndex(0);
      setGalleryImage(images[0].src);
    } else {
      await setIndex(index + 1);
      setGalleryImage(images[index + 1].src);
    }
  };

  // Create a function to display previous image
  const prevImage = async () => {
    if (index == 0) {
      await setIndex(images.length -1);
      setGalleryImage(images[images.length - 1].src);
    } else {
      await setIndex(index - 1);
      setGalleryImage(images[index - 1].src);
    }
  };

  return (
    <div className="w-5/6 mx-auto py-10">
      <h1 className="font-bold text-4xl text-center">Image Gallery</h1>
      {/* Map all images in a grid display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {images.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl cursor-pointer"
            onClick={() => {
              setShowImage("");
              setGalleryImage(image.src);
              setIndex(i);
            }}
          >
            <Image
              src={image.src}
              width={1000}
              height={800}
              alt={image.alt}
              className="hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Create container for gallery */}
      <div
        className={`fixed h-screen w-full left-0 top-0 py-40 md:py-28 lg:py-10 px-5 lg:px-40 bg-white flex items-center ${showImage}`}
      >
        <div onClick={prevImage} className="hover:scale-105 rounded-full cursor-pointer p-2 absolute left-0.5 lg:relative bg-blue-900 md:me-10">
          <ChevronLeft className="w-10 h-10" color="white" />
        </div>
        <Image
          src={galleryImage}
          width={1000}
          height={800}
          alt="1st Image"
          className="block w-full h-full rounded-4xl object-cover"
        />
        <div
          onClick={nextImage}
          className="hover:scale-105 rounded-full cursor-pointer p-2 absolute left-0.5 lg:relative bg-blue-900 md:ms-10"
        >
          <ChevronRight className="w-10 h-10" color="white" />
        </div>
      </div>
      <div
        onClick={() => setShowImage("hidden")}
        className={`hover:scale-105 fixed top-10 right-5 lg:right-10 rounded-full cursor-pointer p-2 bg-red-900 ${showImage}`}
      >
        <X className="w-10 h-10" color="white" />
      </div>
    </div>
  );
};

export default home;
