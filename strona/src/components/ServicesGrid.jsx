// ServicesGrid.jsx
import photo from "../assets/IMG_1931.JPG";

export default function ServicesGrid() {
  return (
    <section className="h-[70vh] bg-gray-100 flex flex-col py-12">
      {/* Heading at the top within the half-screen container */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-2 text-gray-800">
        Our Services
      </h2>

      {/* This div expands to fill remaining vertical space */}
      <div className="flex-1 w-full max-w-7xl mx-auto">
        {/* Grid that fills its parent’s height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full gap-6 px-6">
          {/* Card 1 */}
          <div className="relative overflow-hidden group h-full">
            <img
              src={photo}
              alt="Roofs"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-semibold">We build roofs</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden group h-full">
            <img
              src={photo}
              alt="Windows"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-semibold">Window Fitting</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden group h-full">
            <img
              src={photo}
              alt="Exteriors"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-semibold">Exterior Work</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden group h-full">
            <img
              src={photo}
              alt="Interiors"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-semibold">Interior Renovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
