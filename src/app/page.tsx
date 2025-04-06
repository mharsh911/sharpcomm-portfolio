import About from "./components/About";
import ContactForm from "./components/ContactUs";
import Footer from "./components/Footer";
import { IVideoDescription } from "./components/interfaces";
import Navbar from "./components/Navbar";
import VideoThumbnail from "./components/VideoThumbnail";

const videos = [
  {
    src: "/images/Film_2 1.png",
    title: "Ambuja Salutes the Spirit of Saidpur",
    director: "Prakhar tripathy",
    client: "AMBUJA Cement ",
    productionHouse: "Sharpcomm media",
  },
  {
    src: "/images/Screenshot 2022-04-02 at 3.16 1.png",
    title: "HDFC Life the right step",
    director: "Prakhar tripathy",
    client: "HDFC LIFE",
    productionHouse: "Sharpcomm media",
  },
  {
    src: "/images/3ce57f6a-d6ee-4545-a403-199365e7dc2d 2.png",
    title: "Shh Not Okay!",
    director: "Prakhar tripathy",
    client: "MANKIND PHARMA",
    productionHouse: "Sharpcomm media",
  },
];

const video: IVideoDescription = {
  src: "/images/first-image.png",
  title: "Kutch Mein Sach Mein",
  director: "Prakhar tripathy",
  client: "Gujrat tourism",
  productionHouse: "Sharpcomm media",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <VideoThumbnail video={video} />
      <About />
      {videos.map((v, index) => (
        <div key={index}>
          <VideoThumbnail video={v} />
          <div className="p-10 bg-black" />
        </div>
      ))}
      <ContactForm />
      <Footer />
    </main>
  );
}
