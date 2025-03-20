import photo from "../assets/IMG_1920.JPG"


export default function CenteredHeaderImageLeft() {
    return (
      <section className="w-full py-12 bg-gray-100">
        {/* Centered title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          My Centered Title (Image Left)
        </h2>
  
        {/* Two-column layout (stacked on mobile, side-by-side on md and up) */}
        <div className="md:max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center">
          {/* Left column (image) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0 md:pr-10">
            <img
              src={photo}
              alt="Example"
              className="max-h-96 object-cover rounded-lg shadow-md"
            />
          </div>
  
          {/* Right column (text) */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc non quam vel lorem sollicitudin faucibus.
              <br /><br />
              Integer in mi ut sapien consequat rhoncus in quis nibh. 
              Quisque aliquet massa neque, id bibendum ipsum viverra vitae.
            </p>
          </div>
        </div>
      </section>
    );
  }
  