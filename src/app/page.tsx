/* eslint-disable react/no-unescaped-entities */
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
    <main className="w-full min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <VideoThumbnail video={video} />

      {/* About Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 4,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "170px",
        }}
        className="p-10 bg-black text-white"
      >
        <div style={{ width: "50%", fontSize: "24px" }}>
          ABOUT <span style={{ color: "#49C4DB" }}>US</span>
        </div>
        <div style={{ fontSize: "14px" }}>
          Sharpcom Media is a film production and advertising agency with a pan
          India network. We tell stories that resonate. Specializing in prime
          visual content, we at Sharpcom are a young and passionate team
          exploring creative ideas not controlled by rules or tradition. Our
          practice is to always deliver beyond the client's expectations.
          Sharpcom has an extensive and diverse clientele. Some of these are -
          Ambuja Cement, Apollo Hospitals, Mankind Pharmaceuticals, HDFC Life,
          Uttar Pradesh Tourism, 112 Emergency Services, Khabri, Information and
          Public Relation Department, Anti Terror Squad and others.
        </div>
      </div>
      {videos.map((v, index) => (
        <div key={index}>
          <VideoThumbnail video={v} />
          <div className="p-20 bg-black" />
        </div>
      ))}
      <ContactForm />
      {/* Footer */}
      <Footer />
      {/* <footer className="bg-gray-900 p-5 text-center text-gray-400">
        Sharproom Media &copy; {new Date().getFullYear()}
      </footer> */}
    </main>
  );
}
