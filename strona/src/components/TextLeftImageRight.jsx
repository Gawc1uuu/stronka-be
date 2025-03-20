import photo from "../assets/IMG_1920.JPG";

export default function CenteredHeaderTextImage() {
  return (
    <section className="w-full py-12 bg-gray-100">
      {/* Centered title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        My Centered Title
      <div className="w-16 h-1 bg-[#ACB939] mt-2 mx-auto"/>
      </h2>


      {/* Two-column layout */}
      <div className="md:max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center">
        {/* Left column (text inside dark gray container) */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10 border-l-8 border-[#ACB939]">
          <div className="p-6 md:p-8 shadow-lg">
            <p className="leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc non quam vel lorem sollicitudin faucibus. <br /><br />
              Integer in mi ut sapien consequat rhoncus in quis nibh. 
              Quisque aliquet massa neque, id bibendum ipsum viverra vitae. 
              Suspendisse sit amet libero suscipit, luctus tellus sed, facilisis mauris.
            </p>
          </div>
        </div>

        {/* Right column (image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={photo}
            alt="Example"
            className="max-h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
