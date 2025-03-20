'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  const stats = [
    { id: 1, value: '5+', label: 'лет опыта' },
    { id: 2, value: '100+', label: 'проектов' },
    { id: 3, value: '50+', label: 'клиентов' },
    { id: 4, value: '10+', label: 'наград' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-screen bg-accent/5 skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-secondary/5 -skew-x-12 transform origin-bottom-left" />
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-b from-accent/10 to-transparent rounded-full blur-[120px]" />
      </div>

      {/* Анимированные линии */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              width: '100%',
              transform: `rotate(${i * 2 - 4}deg)`,
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

      <div className="w-full relative z-10">
        <div className="max-w-[95%] mx-auto mb-16 md:mb-24">
          <motion.div 
            className="mb-10 flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <div className="w-24 h-[2px] bg-accent/50" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent font-medium tracking-wider uppercase text-sm"
            >
              О нас
            </motion.span>
            <div className="w-24 h-[2px] bg-accent/50" />
          </motion.div>

          <motion.h2
            ref={titleRef}
            className="text-7xl md:text-8xl font-bold font-display mb-6 tracking-tight leading-[1.1] text-center"
            variants={fadeInUp}
          >
            <span className="block">Мы создаем</span>
            <span className="block text-gradient mt-2">цифровые впечатления</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed text-center"
          >
            Наша команда профессионалов объединяет талант, опыт и страсть 
            к созданию <span className="text-accent">уникальных</span> цифровых решений
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-8 w-full px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-12 md:col-span-5 lg:col-span-4 relative order-2 md:order-1"
          >
            {/* Декоративная линия с точками */}
            <motion.div
              className="absolute -left-8 h-full w-8 flex flex-col items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-2 h-2 rounded-full bg-accent/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
            </motion.div>

            <div className="sticky top-32">
              <motion.h3
                className="text-4xl md:text-5xl font-bold font-display mb-6"
                variants={itemVariants}
              >
                Почему <span className="text-gradient">выбирают нас</span>
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-foreground/80 mb-6 leading-relaxed"
              >
                Мы не просто создаем сайты — мы создаем цифровые произведения искусства, 
                которые привлекают внимание, вызывают эмоции и приносят результаты.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-foreground/80 mb-8 leading-relaxed"
              >
                Каждый проект для нас — это возможность создать что-то уникальное 
                и запоминающееся, уделяя особое внимание деталям и интерактивности.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 lg:col-span-8 order-1 md:order-2 relative"
          >
            {/* Декоративные круги */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
              <motion.div
                className="absolute inset-0 border border-accent/20 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-12 border border-secondary/20 rounded-full"
                animate={{
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-24 border border-accent/10 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <div className="relative grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  className="group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-secondary opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border group-hover:border-transparent transition-all duration-500">
                    <motion.div 
                      className="text-6xl md:text-7xl font-bold font-display text-gradient mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.8 + i * 0.1,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-foreground/70 text-lg group-hover:text-foreground/90 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-48 relative w-full"
        >
          <div className="max-w-[95%] mx-auto">
            <motion.div 
              className="mb-10 flex items-start gap-4"
              variants={itemVariants}
            >
              <div className="w-24 h-[2px] bg-accent/50 mt-3" />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-accent font-medium tracking-wider uppercase text-sm"
              >
                Процесс
              </motion.span>
            </motion.div>

            <motion.h2
              className="text-6xl md:text-7xl font-bold font-display mb-16 tracking-tight leading-[1.1] text-left max-w-4xl"
              variants={itemVariants}
            >
              <span className="block">Как мы</span>
              <span className="block text-gradient mt-2">работаем</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[95%] mx-auto">
            {[
              {
                icon: (
                  <motion.svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <path d="M9 21.5H15M12 3.5V7.5M8.21 9.71L5.79 7.29M15.79 9.71L18.21 7.29M12 21.5V11.5M21 9.5C21 11.7091 19.2091 13.5 17 13.5C14.7909 13.5 13 11.7091 13 9.5C13 7.29086 14.7909 5.5 17 5.5C19.2091 5.5 21 7.29086 21 9.5ZM11 9.5C11 11.7091 9.20914 13.5 7 13.5C4.79086 13.5 3 11.7091 3 9.5C3 7.29086 4.79086 5.5 7 5.5C9.20914 5.5 11 7.29086 11 9.5Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  </motion.svg>
                ),
                title: "Брифинг и анализ",
                description: "Глубокий анализ вашего бизнеса, целей и потребностей. Изучаем конкурентов и целевую аудиторию."
              },
              {
                icon: (
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path
                      d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 8H16M8 12H16M8 16H12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                ),
                title: "Проектирование",
                description: "Разработка структуры, прототипов и дизайн-концепции. Создаем уникальный визуальный язык."
              },
              {
                icon: (
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ pathLength: [0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path
                      d="M12 4L3 8L12 12L21 8L12 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 16L12 20L21 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12L12 16L21 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                ),
                title: "Разработка",
                description: "Воплощаем проект в жизнь, используя современные технологии и лучшие практики разработки."
              },
              {
                icon: (
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <path
                      d="M9 11L12 14L22 4M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                ),
                title: "Запуск и поддержка",
                description: "Тестирование, оптимизация и запуск проекта. Обеспечиваем техническую поддержку и обновления."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-secondary opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border group-hover:border-transparent transition-all duration-500">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8 transition-all duration-300 hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-display mb-4">{step.title}</h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 