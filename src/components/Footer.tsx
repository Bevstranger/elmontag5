import React from "react";
import {
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap size={32} className="text-[#E09743]" />
              <span className="ml-2 text-2xl font-bold">ЭлектроПро</span>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональные электромонтажные услуги для жилых и коммерческих
              объектов. Лицензированные специалисты, гарантия безопасности.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#E09743] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E09743] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E09743] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E09743] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Наши услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Электромонтаж в квартирах
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Коммерческие объекты
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Проверка безопасности
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ремонт электрики
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Замена щитков
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#E09743] mr-2">Адрес:</span>
                <span className="text-gray-400">
                  улица 30 лет Победы, д. 6, кв./оФ. З6, Владимирская область,
                  г. Муром
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E09743] mr-2">Телефон:</span>
                <a
                  href="tel:+7 (919) 016-82-06"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +7 (919) 016-82-06
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#E09743] mr-2">Email:</span>
                <a
                  href="mailto:i919frolova@ya.ru"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  i919frolova@ya.ru
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#E09743] mr-2">Время работы:</span>
                <span className="text-gray-400">Пн-Пт: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ИП ФРОЛОВА ИРИНА АЛЕКСАНДРОВНА.
            Все права защищены.
          </p>
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center bg-[#2662A0] hover:bg-[#3A7CBF] text-white p-2 rounded-md transition-colors"
              aria-label="Наверх"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
