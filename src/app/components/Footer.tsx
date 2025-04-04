const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="flex flex-row justify-between p-20">
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-light">
            SHARPCOM <span className="text-[#49C4DB]">MEDIA</span>
          </h1>
        </div>
        <div>
          <nav className="flex flex-col space-y-2 text-lg">
            <a href="#" className="hover:text-[#49C4DB]">
              FILMS
            </a>
            <a href="#" className="hover:text-[#49C4DB]">
              VFX / ANIMATION
            </a>
            <a href="#" className="hover:text-[#49C4DB]">
              PHOTOGRAPHY
            </a>
            <a href="#" className="text-[#49C4DB]">
              DESIGN
            </a>
            <a href="#" className="hover:text-[#49C4DB]">
              CLIENTS
            </a>
            <a href="#" className="hover:text-[#49C4DB]">
              CONTACT
            </a>
          </nav>
        </div>
        {/* Right Section - Contact Info */}
        <div className="text-right">
          <h2 className="text-2xl font-bold">
            CONTACT <span className="text-[#49C4DB]">US</span>
          </h2>
          <div className="w-full border-t border-white mt-2 mb-4"></div>
          <p className="text-lg">info@sharpcommedia.com</p>
          <p className="text-lg">+91 77389 07259, +91 97276 82778</p>
          <div className="flex justify-end space-x-4 mt-4">
            <span>MUMBAI</span> | <span>DELHI</span> | <span>LUCKNOW</span> |{" "}
            <span>AHMEDABAD</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end space-x-4 mt-4">
            <a href="#" className="text-xl">
              🔳
            </a>
            <a href="#" className="text-xl">
              🔗
            </a>
            <a href="#" className="text-xl">
              ▶️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
