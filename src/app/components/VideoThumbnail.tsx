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
    <section className="relative w-full h-screen p-8 flex items-center justify-start">
      <Image
        src={src}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute z-10 text-start p-5" style={{ width: "45%" }}>
        <div className="mt-1" style={{ fontSize: "20px" }}>
          PRODUCTION HOUSE: {productionHouse.toUpperCase()}
        </div>
        <div
          className="font-bold"
          style={{ fontSize: "60px", lineHeight: "1.1" }}
        >
          {title.toUpperCase()}
        </div>
        <div className="mt-1" style={{ fontSize: "18px" }}>
          CLIENT: {client.toUpperCase()}
        </div>
        <div style={{ fontSize: "18px" }}>
          DIRECTED BY: {director.toUpperCase()}
        </div>
        <button className="flex items-center space-x-2 text-white py-4">
          <div className="w-10 h-10 flex items-center justify-center bg-[#49C4DB] rounded-full">
            <FaPlay className="text-black" />
          </div>
          <span className="text-lg font-medium">Play</span>
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
