'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card3D from '@/components/ui/Card3D';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  const services = [
    {
      icon: (
        <motion.svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <path d="M12 16.5V21.5M18 21.5H6M5 3.5H19C20.1046 3.5 21 4.39543 21 5.5V15.5C21 16.6046 20.1046 17.5 19 17.5H5C3.89543 17.5 3 16.6046 3 15.5V5.5C3 4.39543 3.89543 3.5 5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      ),
      title: 'Веб-разработка',
      description: 'Создаем современные, быстрые и адаптивные веб-сайты с использованием передовых технологий и фреймворков.',
      features: ['React/Next.js', 'Адаптивный дизайн', 'Оптимизация производительности'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3.5C14.5013 6.19375 15.9228 9.29344 16 12.5C15.9228 15.7066 14.5013 18.8063 12 21.5C9.49872 18.8063 8.07725 15.7066 8 12.5C8.07725 9.29344 9.49872 6.19375 12 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Интернет-магазины',
      description: 'Разрабатываем функциональные и удобные интернет-магазины с интеграцией платежных систем и CRM.',
      features: ['Платежные системы', 'Интеграция с CRM', 'Управление товарами'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9.5C9 8.39543 9.89543 7.5 11 7.5H13C14.1046 7.5 15 8.39543 15 9.5C15 10.6046 14.1046 11.5 13 11.5H11C9.89543 11.5 9 12.3954 9 13.5C9 14.6046 9.89543 15.5 11 15.5H13C14.1046 15.5 15 14.6046 15 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Веб-приложения',
      description: 'Создаем сложные веб-приложения с богатым пользовательским интерфейсом и оптимизированной производительностью.',
      features: ['SPA/PWA', 'Real-time функции', 'Масштабируемость'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8.5H3C2.44772 8.5 2 8.94772 2 9.5V19.5C2 20.0523 2.44772 20.5 3 20.5H7C7.55228 20.5 8 20.0523 8 19.5V9.5C8 8.94772 7.55228 8.5 7 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 4.5H17C16.4477 4.5 16 4.94772 16 5.5V19.5C16 20.0523 16.4477 20.5 17 20.5H21C21.5523 20.5 22 20.0523 22 19.5V5.5C22 4.94772 21.5523 4.5 21 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 12.5H10C9.44772 12.5 9 12.9477 9 13.5V19.5C9 20.0523 9.44772 20.5 10 20.5H14C14.5523 20.5 15 20.0523 15 19.5V13.5C15 12.9477 14.5523 12.5 14 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'UI/UX дизайн',
      description: 'Разрабатываем интуитивно понятные интерфейсы и создаем привлекательный дизайн, ориентированный на пользователя.',
      features: ['Прототипирование', 'Анимации', 'Микровзаимодействия'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 11.5C20 16.4706 16.4706 20.5 12 20.5M20 11.5C20 6.52944 16.4706 2.5 12 2.5M20 11.5H4M12 20.5C7.52944 20.5 4 16.4706 4 11.5M12 20.5C10.3431 20.5 9 16.4706 9 11.5C9 6.52944 10.3431 2.5 12 2.5M12 20.5C13.6569 20.5 15 16.4706 15 11.5C15 6.52944 13.6569 2.5 12 2.5M4 11.5C4 6.52944 7.52944 2.5 12 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'SEO-оптимизация',
      description: 'Повышаем видимость вашего сайта в поисковых системах и увеличиваем органический трафик.',
      features: ['Техническая оптимизация', 'Контент-стратегия', 'Аналитика'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.5L11 13.5L15 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Поддержка',
      description: 'Обеспечиваем бесперебойную работу вашего сайта, оперативно решаем технические проблемы и обновляем контент.',
      features: ['24/7 мониторинг', 'Обновления', 'Резервное копирование'],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="services" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-screen bg-accent/5 -skew-x-12 transform origin-top-left" />
        <div className="absolute bottom-0 right-0 w-1/2 h-screen bg-secondary/5 skew-x-12 transform origin-bottom-right" />
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-[120px]" />
      </div>

      {/* Анимированные линии */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              left: 0,
              width: '100%',
              transform: `rotate(${i * 2 - 3}deg)`,
            }}
            animate={{
              x: [-200, 200],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Сетка точек */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20">
        {[...Array(400)].map((_, i) => {
          const row = Math.floor(i / 20);
          const col = i % 20;
          const delay = (row + col) * 0.05;
          
          return (
            <motion.div
              key={i}
              className="w-[1px] h-[1px] bg-accent rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{
                duration: 2,
                delay,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          );
        })}
      </div>

      {/* Плавающие геометрические фигуры */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 2 === 0 
                ? 'border border-accent/10' 
                : 'bg-gradient-to-br from-accent/5 to-transparent'
            } ${
              i % 3 === 0 
                ? 'rounded-full' 
                : i % 3 === 1
                ? 'rounded-lg'
                : 'rounded-2xl'
            }`}
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${15 + (i * 20) % 70}%`,
              top: `${20 + (i * 25) % 60}%`,
              opacity: 0.6 - (i * 0.08),
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 30 : -30, 0],
              rotate: [0, i % 2 === 0 ? 180 : -180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="w-full relative z-10"
        style={{ y }}
      >
        <div className="grid grid-cols-12 gap-4 md:gap-8 max-w-[95%] mx-auto mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-4 relative mb-8 md:mb-0">
            <motion.div 
              className="md:sticky md:top-32 flex flex-col items-start px-4 md:px-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-accent font-medium tracking-wider uppercase text-sm mb-6 md:mb-8"
              >
                Наши услуги
              </motion.span>

              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] text-left"
                variants={itemVariants}
              >
                <span className="block">Создаем</span>
                <span className="block text-gradient mt-2">будущее</span>
                <span className="block mt-2">вместе</span>
              </motion.h2>

              <div className="w-16 md:w-24 h-[2px] bg-accent/50 my-6 md:my-8" />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed"
              >
                Мы предоставляем полный спектр услуг по разработке 
                <span className="text-accent"> инновационных </span> 
                веб-решений, от проектирования до запуска и поддержки
              </motion.p>
            </motion.div>
          </div>

          <motion.div 
            className="col-span-12 md:col-span-8 grid grid-cols-12 gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative col-span-12 ${
                  index === 0 || index === 5 ? 'md:col-span-12' :
                  index === 1 || index === 4 ? 'md:col-span-6' :
                  'md:col-span-6'
                } mb-4 md:mb-0`}
              >
                <motion.div 
                  className="bg-card/80 backdrop-blur-sm p-6 md:p-8 h-full rounded-xl border border-border relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Фоновый градиент */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{ 
                      background: index % 2 === 0 
                        ? ['linear-gradient(135deg, rgba(255,62,0,0.05) 0%, transparent 50%, rgba(37,99,235,0.05) 100%)'] 
                        : ['linear-gradient(135deg, rgba(37,99,235,0.05) 0%, transparent 50%, rgba(255,62,0,0.05) 100%)']
                    }}
                  />

                  {/* Контент */}
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 md:mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {service.icon}
                    </motion.div>

                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold font-display mb-3 md:mb-4"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p 
                      className="text-foreground/80 mb-6 md:mb-8 leading-relaxed text-base md:text-lg"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    <ul className="space-y-3 md:space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center text-sm md:text-base text-foreground/70"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5, color: 'rgb(255, 62, 0)' }}
                          transition={{ 
                            delay: 0.2 + featureIndex * 0.1,
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                          }}
                        >
                          <motion.svg 
                            className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-accent" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <path 
                              d="M20 6L9 17L4 12" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services; 