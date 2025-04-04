import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-transparent bg-opacity-80 text-white p-16 flex justify-between items-center z-999">
      <Link href="/">
        <Image
          src="/images/sharpcomm-logo.png"
          alt="Logo"
          width={200}
          height={50}
        />
      </Link>
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-blue-400">
          FILMS
        </Link>
        <Link href="t" className="hover:text-blue-400">
          VFX/ANIMATION
        </Link>
        <Link href="/" className="hover:text-blue-400">
          PHOTOGRAPHY
        </Link>
        <Link href="/" className="hover:text-blue-400">
          CLIENTS
        </Link>
        <Link href="/" className="hover:text-blue-400">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
