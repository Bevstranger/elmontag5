import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Zap } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className={`flex items-center ${
            isScrolled ? "text-[#2662A0]" : "text-[#FFF]"
          }`}
        >
          <a href="#" className="flex items-center">
            <Zap size={32} />
            <span className="ml-2 text-2xl font-bold">ЭлектроПро</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-800 hover:text-[#2662A0] transition-colors"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-[#2662A0] transition-colors"
          >
            О нас
          </a>
          <a
            href="#benefits"
            className="text-gray-800 hover:text-[#2662A0] transition-colors"
          >
            Преимущества
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-[#2662A0] transition-colors"
          >
            Контакты
          </a>
          <a
            href="tel:+7 (919) 016-82-06"
            className="flex items-center bg-[#2662A0] text-white px-4 py-2 rounded-md hover:bg-[#3A7CBF] transition-colors"
          >
            <Phone size={18} className="mr-2" />
            <span>Позвонить нам</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a
            href="#services"
            className="text-gray-800 hover:text-[#2662A0] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-[#2662A0] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            О нас
          </a>
          <a
            href="#benefits"
            className="text-gray-800 hover:text-[#2662A0] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Преимущества
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-[#2662A0] transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Контакты
          </a>
          <a
            href="tel:+7 (919) 016-82-06"
            className="flex items-center bg-[#2662A0] text-white px-4 py-2 rounded-md hover:bg-[#3A7CBF] transition-colors"
          >
            <Phone size={18} className="mr-2" />
            <span>Позвонить нам</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
