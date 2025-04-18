import React from "react";
import {
  Shield,
  Clock,
  Wrench,
  Zap,
  Award,
  PiggyBank,
  UserCheck,
  Phone,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Shield className="w-12 h-12 text-[#E09743]" />,
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все виды выполненных работ",
  },
  {
    id: 2,
    icon: <Clock className="w-12 h-12 text-[#E09743]" />,
    title: "Быстрый выезд",
    description: "Оперативный выезд специалиста в течение 60 минут",
  },
  {
    id: 3,
    icon: <Wrench className="w-12 h-12 text-[#E09743]" />,
    title: "Современное оборудование",
    description: "Используем профессиональные инструменты и материалы",
  },
  {
    id: 4,
    icon: <Zap className="w-12 h-12 text-[#E09743]" />,
    title: "Любая сложность",
    description: "Решаем задачи любой сложности в сфере электромонтажа",
  },
  {
    id: 5,
    icon: <Award className="w-12 h-12 text-[#E09743]" />,
    title: "Опытные мастера",
    description: "Команда сертифицированных специалистов с опытом от 5 лет",
  },
  {
    id: 6,
    icon: <PiggyBank className="w-12 h-12 text-[#E09743]" />,
    title: "Честные цены",
    description: "Прозрачное ценообразование без скрытых платежей",
  },
  {
    id: 7,
    icon: <UserCheck className="w-12 h-12 text-[#E09743]" />,
    title: "Персональный подход",
    description: "Индивидуальные решения под ваши потребности",
  },
  {
    id: 8,
    icon: <Phone className="w-12 h-12 text-[#E09743]" />,
    title: "24/7 поддержка",
    description: "Круглосуточная техническая поддержка клиентов",
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-[#2662A0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Почему выбирают нас
          </h2>
          <div className="w-24 h-1 bg-[#E09743] mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Мы предоставляем профессиональные услуги электромонтажа с гарантией
            качества и безопасности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
