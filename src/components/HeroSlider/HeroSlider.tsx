"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface HeroSlide {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState<HeroSlide[]>([
    {
      title: "Organic Products",
      description: "Discover the best organic products for a healthy lifestyle.",
      image: "/images/hero_slider/hero_slider_1.png",
      link: "/shop",
      buttonText: "Shop Now",
    },
    {
      title: "Fresh and Natural",
      description: "Experience the freshness of farm-grown organic products.",
      image: "/images/hero_slider/hero_slider_2.jpg",
      link: "/shop",
      buttonText: "Shop Now",
    },
    {
      title: "Sustainable Choices",
      description: "Choose products that are good for you and the planet.",
      image: "/images/hero_slider/hero_slider_3.jpg",
      link: "/shop",
      buttonText: "Shop Now",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slider, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="flex items-center justify-between w-full h-full">
              {/* Content Section */}
              <div className="absolute left-8 sm:left-12 top-1/2 transform -translate-y-1/2 max-w-lg text-left z-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
                  {slider.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 py-4 leading-relaxed">
                  {slider.description}
                </p>
                <Link href={slider.link}>
                  <button className="px-6 py-3 bg-customGreen hover:bg-hoverGreen rounded text-sm sm:text-base font-semibold text-white shadow-md">
                    {slider.buttonText}
                  </button>
                </Link>
              </div>

              {/* Image Section */}
              <img
                src={slider.image}
                alt={slider.description}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full bg-white ${
              index === currentSlide ? "bg-opacity-80 scale-110" : "bg-opacity-40"
            } transition-transform duration-200`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
