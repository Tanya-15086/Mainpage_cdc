import cdclogo from "../assets/cdc.png";
import iitlogo from "../assets/iit.png";
import linkedinlogo from "../assets/linkedin.png";
import instalogo from "../assets/insta.png";
import ytlogo from "../assets/yt.png";
import bglogo from "../assets/bg.png";

export default function HomePage() {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={bglogo}
        alt="IIT Roorkee"
        className="absolute  object-cover z-0 brightness-150"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-5 absolute top-0 w-full z-20">
        {/* Left Side - Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="logos flex justify-center items-center gap-x-1">
            <img width={35} src={cdclogo} alt="" />
            <img width={35} src={iitlogo} alt="" />
          </div>
          <div>
            <h1 className="text-sm font-semibold">
              भारतीय प्रौद्योगिकी संस्थान रुड़की
            </h1>
            <p className="text-xs">Indian Institute of Technology Roorkee</p>
          </div>
        </div>

        {/* Right Side - Nav Links */}
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-200 ">HOME</a>
          <a href="#" className="hover:text-blue-200">ABOUT US</a>
          <a href="#" className="hover:text-blue-200">INITIATIVES</a>
          <a href="#" className="hover:text-blue-200">REPORTS</a>
          <a href="#" className="hover:text-blue-200">OUR TEAM</a>
          <a href="#" className="hover:text-blue-200">CONTACT US</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center px-6 z-10">
        {/* Hero Text */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Career Development Cell
          </h2>

          <div className="flex justify-center items-center gap-4 my-4">
            <span className="text-2xl">✦</span>
            <hr className="w-full max-w-5xl border-gray-400" />
            <span className="text-2xl">✦</span>
          </div>

          <p className="text-lg md:text-3xl mb-6">
            Empowering Futures, Shaping Careers
          </p>
        </div>
      </div>

      {/* Social Media Links - fixed at bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6 z-10">
        <img width={28} src={linkedinlogo} alt="LinkedIn" />
        <img width={28} src={instalogo} alt="Instagram" />
        <img width={28} src={ytlogo} alt="YouTube" />
      </div>
    </div>
  );
}


