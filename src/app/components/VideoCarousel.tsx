"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const videos = [
  {
    src: "https://video.wixstatic.com/video/d375b2_b2757c59aaba4520865597381723fed2/720p/mp4/file.mp4",
    title: "Kutch Mein Sach Mein",
    director: "Gaurav Sharma",
    editor: "Prakash Tripathi",
  },
  {
    src: "https://video.wixstatic.com/video/d375b2_b2757c59aaba4520865597381723fed2/720p/mp4/file.mp4",
    title: "Harsh mishra",
    director: "Gaurav Sharma",
    editor: "Prakash Tripathi",
  },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevVideo = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? videos.length - 1 : prevIndex - 1
  //   );
  // };

  // const nextVideo = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === videos.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  useEffect(() => {
    setCurrentIndex(1);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-start">
      {/* Video Display */}
      <video
        key={videos[currentIndex].src} // Ensures the video reloads on change
        src={videos[currentIndex].src}
        autoPlay
        loop
        muted
        playsInline
        style={{ top: "-75px", bottom: "0px" }}
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      />

      {/* Video Info */}

      <div className="absolute z-10 text-start p-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          {videos[currentIndex].title}
        </h1>
        <p className="text-lg mt-3">
          Director: {videos[currentIndex].director} | Editor:{" "}
          {videos[currentIndex].editor}
        </p>
        <Link
          href="#about"
          className="mt-5 inline-block bg-blue-500 px-6 py-3 rounded-lg"
        >
          Learn More
        </Link>
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevVideo}
        className="absolute left-5 z-10 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
      >
        b
      </button>

      <button
        onClick={nextVideo}
        className="absolute right-5 z-10 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
      >
        R
      </button> */}
    </section>
  );
}
