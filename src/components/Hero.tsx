import React from "react";
import { ArrowRight } from "lucide-react";
import BackImage from "../assets/back.jpg";

const Hero: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('${BackImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2662A0]/80 to-transparent" />

      <div className="relative container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-2xl animate-fade-in pt-20 sm:pt-24 md:pt-20 z-[80]">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Профессиональные электромонтажные работы
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Лицензированные электрики предоставляют надежные решения для жилых и
            коммерческих объектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#E09743] hover:bg-[#d08938] text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors duration-300"
            >
              Получить расчет
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-100 text-[#2662A0] py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors duration-300"
            >
              Наши услуги
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-stretch gap-3 sm:gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-4 rounded-lg flex-1 min-w-[100px] flex flex-col justify-center h-[80px] sm:h-[100px]">
              <p className="text-white text-xl sm:text-3xl font-bold text-center">24/7</p>
              <p className="text-white/90 text-xs sm:text-sm text-center">Аварийный выезд</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-4 rounded-lg flex-1 min-w-[100px] flex flex-col justify-center h-[80px] sm:h-[100px]">
              <p className="text-white text-xl sm:text-3xl font-bold text-center">100%</p>
              <p className="text-white/90 text-xs sm:text-sm text-center">Гарантия качества</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-4 rounded-lg flex-1 min-w-[100px] flex flex-col justify-center h-[80px] sm:h-[100px]">
              <p className="text-white text-xl sm:text-3xl font-bold text-center">15+</p>
              <p className="text-white/90 text-xs sm:text-sm text-center">Лет опыта</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
