import BgImage from "../assets/home-cover.png";

function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center pt-16"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Text Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Our Company</h1>
        <p className="mt-4 text-lg md:text-xl">We provide top-quality services for your needs.</p>
        <button className="mt-6 px-6 py-3 bg-[#ACB939] hover:bg-[#acb939cd] text-white text-lg rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

