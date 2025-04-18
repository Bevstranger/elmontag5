import React from 'react';
import { Zap, Home, Building2, Shield, WrenchIcon, ActivitySquare, Lightbulb, Timer } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: 'Электромонтаж в квартирах',
    description: 'Полная установка и модернизация электропроводки в жилых помещениях.',
    icon: <Home className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 2,
    title: 'Коммерческие объекты',
    description: 'Специализированные электромонтажные работы для бизнеса и коммерческих помещений.',
    icon: <Building2 className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 3,
    title: 'Проверка безопасности',
    description: 'Комплексная проверка электросистем для выявления и предотвращения проблем.',
    icon: <Shield className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 4,
    title: 'Ремонт электрики',
    description: 'Быстрый и надежный ремонт любых электрических неисправностей.',
    icon: <WrenchIcon className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 5,
    title: 'Замена щитков',
    description: 'Модернизация электрощитов для соответствия современным требованиям.',
    icon: <ActivitySquare className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 6,
    title: 'Монтаж освещения',
    description: 'Установка и дизайн освещения для внутренних и внешних пространств.',
    icon: <Lightbulb className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 7,
    title: 'Аварийные работы',
    description: 'Круглосуточное обслуживание для срочного решения электропроблем.',
    icon: <Timer className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
  {
    id: 8,
    title: 'Энергосбережение',
    description: 'Энергоэффективные решения для снижения потребления электроэнергии.',
    icon: <Zap className="w-12 h-12 text-[#2662A0] group-hover:text-white transition-colors duration-300" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#F5F2EB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <div className="w-24 h-1 bg-[#E09743] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем полный спектр электромонтажных услуг для жилых и коммерческих объектов,
            уделяя особое внимание безопасности и качеству работ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-[#2662A0] hover:-translate-y-2"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;