'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-screen bg-accent/5 -skew-x-12 transform origin-top-left" />
        <div className="absolute top-1/3 right-0 w-1/2 h-screen bg-secondary/5 skew-x-12 transform origin-bottom-right" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-[120px]" />
      </div>

      {/* Анимированные линии */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: 0,
              width: '100%',
              transform: `rotate(${i * 2}deg)`,
            }}
            animate={{
              x: [-200, 200],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 25 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </div>

      {/* Сетка точек */}
      <div className="absolute inset-0 grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] opacity-20">
        {[...Array(900)].map((_, i) => {
          const row = Math.floor(i / 30);
          const col = i % 30;
          const delay = (row + col) * 0.03;
          
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
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}
      </div>

      {/* Плавающие геометрические фигуры */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              left: `${10 + (i * 15) % 80}%`,
              top: `${15 + (i * 20) % 70}%`,
              opacity: 0.5 - (i * 0.05),
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, i % 2 === 0 ? 180 : -180],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative w-full h-full min-h-screen flex flex-col md:flex-row items-center">
        {/* Левая колонка */}
        <motion.div 
          className="w-full md:w-1/2 h-full px-6 md:pl-24 flex flex-col justify-center py-24 md:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Декоративная линия с точками - скрываем на мобильных */}
          <motion.div
            className="absolute left-8 h-full w-8 hidden md:flex flex-col items-center justify-center gap-6"
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

          <motion.div 
            variants={itemVariants}
            className="mb-6 md:mb-10 flex items-center gap-4"
          >
            <div className="w-8 md:w-12 h-[2px] bg-accent/50" />
            <span className="text-accent font-medium tracking-wider uppercase text-xs md:text-sm">Веб-студия</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold font-display leading-[0.95] mb-6 md:mb-10"
            variants={itemVariants}
          >
            <span className="block">Добавим</span>
            <span className="block text-gradient ml-4 md:ml-16 my-2 md:my-3">звезд</span>
            <span className="block ml-8 md:ml-32">вашему бизнесу</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-md ml-0 md:ml-16 mb-8 md:mb-12 leading-relaxed"
          >
            Мы создаем <span className="text-accent font-medium">инновационные</span> цифровые решения, 
            которые <span className="text-gradient font-medium">превосходят ожидания</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 ml-4 md:ml-32"
          >
            <MagneticButton 
              strength={50}
              className="group relative overflow-hidden rounded-full bg-accent text-background hover:bg-accent/90 transition-all duration-300 py-3 md:py-4 px-6 md:px-8 font-sans tracking-wide text-base md:text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Начать проект
                <svg 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </MagneticButton>
          </motion.div>

          {/* Статистика */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 md:gap-16 mt-12 md:mt-20 ml-0 md:ml-16"
          >
            {[
              { number: '5+', label: 'Лет опыта' },
              { number: '50+', label: 'Проектов' },
              { number: '100%', label: 'Довольных клиентов' }
            ].map((stat, i) => (
              <motion.div
                key={`stat-${i}`}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold font-display mb-1 md:mb-2 text-gradient"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 1.2 + i * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs md:text-sm text-foreground/60 group-hover:text-foreground/80 transition-all duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Правая колонка - скрываем на мобильных устройствах */}
        <div className="w-full md:w-1/2 h-full relative hidden md:block">
          {/* Декоративные элементы */}
          <div className="absolute top-1/3 right-24 w-80 h-80">
            <motion.div
              className="w-full h-full border border-accent/20 rounded-full"
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
              className="absolute inset-6 border border-secondary/20 rounded-full"
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
              className="absolute inset-12 border border-accent/10 rounded-full"
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

          {/* Технологии */}
          <motion.div
            className="absolute bottom-1/3 right-24 flex flex-wrap gap-4 max-w-xs justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
              <motion.div
                key={tech}
                className="px-5 py-2.5 rounded-full bg-background/50 backdrop-blur-md border border-accent/10 text-sm font-medium hover:border-accent/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.2 + i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Плавающие числа */}
          {[...Array(15)].map((_, i) => {
            const number = i % 2;
            const xPos = 40 + (i * 4);
            const yPos = 20 + (i * 4);
            
            return (
              <motion.div
                key={i}
                className="absolute text-xl font-mono text-accent/15"
                initial={{
                  x: `${xPos}%`,
                  y: `${yPos}%`,
                  opacity: 0.1,
                }}
                animate={{
                  y: [`${yPos}%`, `${yPos + 5}%`],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: "easeInOut"
                }}
              >
                {number}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Нижняя панель */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 border-t border-foreground/10 backdrop-blur-md bg-background/5"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-4 md:mb-0">
          <span className="text-xs md:text-sm text-foreground/60 font-medium">Следите за нами</span>
          <div className="flex items-center gap-4 md:gap-6">
            {['Telegram', 'Instagram', 'Behance'].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                className="text-xs md:text-sm text-foreground/60 hover:text-accent transition-all hover:tracking-wide"
                whileHover={{ y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-foreground/60 group cursor-pointer mb-4 md:mb-0"
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <span className="group-hover:text-accent transition-colors">Прокрутите вниз</span>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:text-accent transition-colors"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 