import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Images1
import chalet from '../../assets/chalet.png';
import img2002 from '../../assets/IMG_2002.JPG';
import img2004 from '../../assets/IMG_2004.JPG';
import img2005 from '../../assets/IMG_2005.JPG';
import img2006 from '../../assets/IMG_2006.JPG';
import img2007 from '../../assets/IMG_2007.JPG';
import img2008 from '../../assets/IMG_2008.JPG';
import img2009 from '../../assets/IMG_2009.JPG';
// images2
import img1994 from '../../assets/IMG_1994.jpeg';
import img1995 from '../../assets/IMG_1995.jpeg';
import img1996 from '../../assets/IMG_1996.jpeg';
import img1997 from '../../assets/IMG_1997.jpeg';
// images3
import img2015 from '../../assets/IMG_2015.jpeg';
import img2012 from '../../assets/IMG_2012.jpeg';
import img2013 from '../../assets/IMG_2013.jpeg';
import img2014 from '../../assets/IMG_2014.jpeg';
import img2016 from '../../assets/IMG_2016.jpeg';
import img2011 from '../../assets/IMG_2011.jpeg';
import img2010 from '../../assets/IMG_2010.jpeg';
// images4
import img1943 from '../../assets/IMG_1943.JPG';
import img1946 from '../../assets/IMG_1946.JPG';
import img1941 from '../../assets/IMG_1941.JPG';
import img1942 from '../../assets/IMG_1942.JPG';
import img1939 from '../../assets/IMG_1939.JPG';
import img1944 from '../../assets/IMG_1944.JPG';
import img1938 from '../../assets/IMG_1938.JPG';
import img1945 from '../../assets/IMG_1945.JPG';
import img1940 from '../../assets/IMG_1940.JPG';
//images5
import img1919 from '../../assets/IMG_1919.JPG';
import elo from '../../assets/elo.JPG';
import img1920 from '../../assets/IMG_1920.JPG';
import img1921 from '../../assets/IMG_1921.JPG';
import img1922 from '../../assets/IMG_1922.JPG';
import img1923 from '../../assets/IMG_1923.JPG';
//images6
import uitbreiding from '../../assets/uitbreiding.png';
import img2017 from '../../assets/IMG_2017.JPG';
import img2022 from '../../assets/IMG_2022.JPG';
import img2023 from '../../assets/IMG_2023.JPG';
import img2019 from '../../assets/IMG_2019.JPG';
import img2018 from '../../assets/IMG_2018.JPG';
import img2020 from '../../assets/IMG_2020.JPG';
// images7
import img1999 from '../../assets/IMG_1999.jpeg';
import img1998 from '../../assets/IMG_1998.jpeg';
import img2001 from '../../assets/IMG_2001.jpeg';
// images8
import img1924 from '../../assets/IMG_1924.JPG';
import img1925 from '../../assets/IMG_1925.JPG';
import img1926 from '../../assets/IMG_1926.JPG';
import img1927 from '../../assets/IMG_1927.JPG';
import img1928 from '../../assets/IMG_1928.JPG';
import img1929 from '../../assets/IMG_1929.JPG';
import img1930 from '../../assets/IMG_1930.JPG';
import img1931 from '../../assets/IMG_1931.JPG';
import img1932 from '../../assets/IMG_1932.JPG';
import img1933 from '../../assets/IMG_1933.JPG';
import img1934 from '../../assets/IMG_1934.JPG';
import img1935 from '../../assets/IMG_1935.JPG';

// images
import homeCover from '../../assets/home-cover.png';
import gevel from '../../assets/gevel.png';

// Inline style override for arrow color
const arrowColorOverride = `
  .slick-prev:before, .slick-next:before {
    color: #ACB939 !important;
  }
`;
const images1 = [chalet, img2002, img2004, img2005, img2006, img2007, img2008, img2009];
const images2 = [img1996, img1995, img1994, img1997];
const images3 = [img2010, img2011, img2015, img2012, img2013, img2014, img2016];
const images4 = [img1943, img1946, img1941, img1942, img1939, img1944, img1938, img1945, img1940];
const images6 = [uitbreiding, img2017, img2022, img2023, img2019, img2018, img2020];
const images7 = [img1999, img1998, img2001];
const images8 = [img1924, img1925, img1926, img1927, img1928, img1929, img1930, img1931, img1932, img1933, img1934, img1935];

const images5 = [img1919, img1920, elo, img1921, img1922, img1923];

const images = [elo, homeCover, gevel, img1919, img1919, img1919];

const PhotoCarusel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeImages, setActiveImage] = useState(images);
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // A helper function to avoid repeating Slider code
  const renderSlider = (sliderKey, images) => (
    <Slider key={sliderKey} {...settings}>
      {images.map((img, index) => (
        <div
          key={index}
          onClick={() => {
            setPhotoIndex(index);
            setIsOpen(true);
            setActiveImage(images);
          }}
          className="px-2"
        >
          <img src={img} alt={`Photo ${index + 1}`} className="object-cover w-full h-[400px] cursor-pointer rounded-xl" />
        </div>
      ))}
    </Slider>
  );

  return (
    <>
      {/* Inject arrow-color override */}
      <style>{arrowColorOverride}</style>

      <div className="w-full max-w-[80%] mx-auto px-4 py-8">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col">
          {/* MAIN HEADER */}
          <div className="text-center mb-8 md:mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">RENOCARE - Onze Projecten</h1>
            <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
          </div>

          {/* SLIDER #1 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Wilrijk: Totaalrenovatie van een vrijstaande woning</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider1', images1)}
          </div>

          {/* SLIDER #2 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Mechelen: Dakwerken</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider2', images2)}
          </div>

          {/* SLIDER #3 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Wilrijk: Totaalrenovatie</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider3', images3)}
          </div>
          {/* SLIDER #4 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Antwerpen: totaalrenovatie van een rijwoning</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider4', images4)}
          </div>
          {/* SLIDER #5 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Berchem: Interieurrenovatie van een knus appartement</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider5', images5)}
          </div>
          {/* SLIDER #6 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Rumst: Uitbreiding en totaalrenovatie</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider5', images6)}
          </div>
          {/* SLIDER #7 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Deurne: Dakwerken</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider5', images7)}
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Niel: Totaalrenovatie van een woning</h2>
              <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2" />
            </div>
            {renderSlider('slider5', images8)}
          </div>
        </div>
      </div>
      {open && (
        <Lightbox open={isOpen} index={photoIndex} close={() => setIsOpen(false)} slides={activeImages.map(img => ({ src: img }))} />
      )}
    </>
  );
};

export default PhotoCarusel;
