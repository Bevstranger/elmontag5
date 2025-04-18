import React from 'react';
import { BadgeCheck, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#E09743] font-medium">О НАС</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
              Более 15 лет профессионального опыта
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Компания "ЭлектроПро" предоставляет высококачественные электромонтажные услуги с 2008 года. 
              Наша команда сертифицированных электриков стремится обеспечить безопасные и надежные 
              решения для домов и предприятий.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Мы гордимся тем, что постоянно следим за последними отраслевыми стандартами и технологиями,
              гарантируя нашим клиентам получение наилучшего сервиса. Наша преданность качеству сделала
              нас надежным именем в электротехнической отрасли.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <BadgeCheck className="text-[#2662A0] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Лицензии и страховка</h4>
                  <p className="text-gray-600 text-sm">Полная сертификация на все виды работ</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-[#2662A0] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Опытная команда</h4>
                  <p className="text-gray-600 text-sm">Квалифицированные специалисты</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-[#2662A0] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Гарантия качества</h4>
                  <p className="text-gray-600 text-sm">Высокие стандарты выполнения работ</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-[#2662A0] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Оперативность</h4>
                  <p className="text-gray-600 text-sm">Быстрый выезд и выполнение работ</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg" 
                alt="Электрик за работой" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#2662A0] text-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="text-3xl font-bold mb-2">1500+</div>
              <div className="text-lg">Выполненных проектов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;