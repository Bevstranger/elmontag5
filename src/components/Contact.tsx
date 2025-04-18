import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Сброс формы
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Сброс сообщения об успехе через 5 секунд
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Свяжитесь с нами
          </h2>
          <div className="w-24 h-1 bg-[#E09743] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Есть вопросы или нужен расчет стоимости? Оставьте заявку, и наша
            команда свяжется с вами в ближайшее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Оставить заявку
              </h3>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Спасибо за обращение!</strong>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2662A0] focus:border-transparent"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2662A0] focus:border-transparent"
                      placeholder="Введите ваш email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2662A0] focus:border-transparent"
                      placeholder="Введите ваш телефон"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Тип услуги
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2662A0] focus:border-transparent"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="Residential">
                        Электромонтаж в квартире
                      </option>
                      <option value="Commercial">Коммерческие объекты</option>
                      <option value="Safety">Проверка безопасности</option>
                      <option value="Repairs">Ремонт электрики</option>
                      <option value="Panel">Замена щитков</option>
                      <option value="Lighting">Монтаж освещения</option>
                      <option value="Emergency">Аварийный вызов</option>
                      <option value="Energy">Энергосбережение</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2662A0] focus:border-transparent"
                    placeholder="Опишите ваши потребности"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#2662A0] text-white font-medium rounded-md hover:bg-[#3A7CBF] transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : (
                    <>
                      Отправить заявку
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-[#2662A0] rounded-lg shadow-md p-8 text-white h-full">
              <h3 className="text-2xl font-semibold mb-6">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <p className="text-white/90">
                      <a href="tel:+74951234567" className="hover:text-white">
                        +7 (919) 016-82-06
                      </a>
                    </p>
                    <p className="text-white/90 text-sm mt-1">
                      Круглосуточно для экстренных вызовов
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-white/90">
                      <a
                        href="mailto:i919frolova@ya.ru"
                        className="hover:text-white"
                      >
                        i919frolova@ya.ru
                      </a>
                    </p>
                    <p className="text-white/90 text-sm mt-1">
                      Ответим в течение 24 часов
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Адрес офиса</h4>
                    <p className="text-white/90">
                      улица 30 лет Победы, д. 6, кв./оФ. З6, Владимирская
                      область, г. Муром
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Режим работы</h4>
                    <p className="text-white/90">
                      Пн-Пт: 8:00 - 20:00
                      <br />
                      Сб: 9:00 - 18:00
                      <br />
                      Вс: Выходной (доступны экстренные вызовы)
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Аварийная служба</h4>
                <p className="text-white/90 mb-4">
                  Нужна срочная помощь? Наша аварийная бригада доступна 24/7.
                </p>
                <a
                  href="tel:+74951234567"
                  className="inline-flex items-center bg-[#E09743] hover:bg-[#d08938] text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Вызвать электрика
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
