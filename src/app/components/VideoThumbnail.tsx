"use client";

// import Link from "next/link";
// import { useState } from "react";
import Image from "next/image";
import { IVideoDescription } from "./interfaces";
import { FaPlay } from "react-icons/fa";

interface IVideoThumbnailProps {
  video: IVideoDescription;
}

export default function VideoThumbnail(props: IVideoThumbnailProps) {
  const { video } = props;
  const { src, title, director, client, productionHouse } = video;
  // const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="relative w-full h-[100vh] md:h-screen flex items-center justify-start p-4 md:p-8">
      <Image
        src={src}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute z-10 text-white w-full md:w-1/2 p-4 md:p-8 bg-opacity-40 rounded-lg md:rounded-none">
        <div className="text-sm md:text-base mb-1">
          PRODUCTION HOUSE: {productionHouse.toUpperCase()}
        </div>
        <div className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.1] mb-2">
          {title.toUpperCase()}
        </div>
        <div className="text-sm md:text-base mb-1">
          CLIENT: {client.toUpperCase()}
        </div>
        <div className="text-sm md:text-base mb-2">
          DIRECTED BY: {director.toUpperCase()}
        </div>
        <button className="flex items-center space-x-3 text-white py-2 rounded-lg bg-opacity-70 hover:bg-opacity-90 transition ">
          <div className="w-10 h-10 flex items-center justify-center bg-[#49C4DB] rounded-full">
            <FaPlay className="text-black" />
          </div>
          <span className="text-sm md:text-base font-semibold">Play</span>
        </button>
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
