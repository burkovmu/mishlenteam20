'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const technologies = [
  {
    name: 'Next.js',
    description: 'Современный фреймворк для React приложений',
    icon: '/icons/nextjs.svg',
    category: 'Frontend'
  },
  {
    name: 'React',
    description: 'Библиотека для создания пользовательских интерфейсов',
    icon: '/icons/react.svg',
    category: 'Frontend'
  },
  {
    name: 'TypeScript',
    description: 'Типизированный JavaScript для надежного кода',
    icon: '/icons/typescript.svg',
    category: 'Frontend'
  },
  {
    name: 'Tailwind CSS',
    description: 'Утилитарный CSS фреймворк для быстрой разработки',
    icon: '/icons/tailwind.svg',
    category: 'Frontend'
  },
  {
    name: 'Framer Motion',
    description: 'Библиотека для создания анимаций в React',
    icon: '/icons/framer.svg',
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    description: 'JavaScript на стороне сервера для масштабируемых приложений',
    icon: '/icons/nodejs.svg',
    category: 'Backend'
  },
  {
    name: 'MongoDB',
    description: 'NoSQL база данных для хранения документов',
    icon: '/icons/mongodb.svg',
    category: 'Backend'
  },
  {
    name: 'GraphQL',
    description: 'Язык запросов к API для гибкого получения данных',
    icon: '/icons/graphql.svg',
    category: 'Backend'
  },
  {
    name: 'Docker',
    description: 'Контейнеризация приложений для удобной разработки',
    icon: '/icons/docker.svg',
    category: 'Инструменты'
  },
  {
    name: 'Figma',
    description: 'Инструмент для дизайна интерфейсов и прототипирования',
    icon: '/icons/figma.svg',
    category: 'Инструменты'
  },
  {
    name: 'Jest',
    description: 'Фреймворк для тестирования JavaScript кода',
    icon: '/icons/jest.svg',
    category: 'Инструменты'
  },
  {
    name: 'Git',
    description: 'Система контроля версий для командной разработки',
    icon: '/icons/git.svg',
    category: 'Инструменты'
  }
];

const categories = [
  'Frontend',
  'Backend',
  'Инструменты'
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const filteredTechnologies = technologies.filter(tech => tech.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-background relative overflow-hidden"
      id="articles"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      {/* Фоновые элементы с анимациями */}
      <motion.div
        className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-accent/20 to-primary/20 mix-blend-multiply filter blur-3xl opacity-30"
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.3,
          transition: { duration: 1.5 }
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-0 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container-fluid px-4 relative z-10">
        {/* Общий заголовок для объединенной секции - выравнивание по левому краю */}
        <div className="max-w-[95%] mx-auto mb-16">
          <motion.div 
            className="mb-10 flex items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <div className="w-24 h-[2px] bg-accent/50" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium tracking-wider uppercase text-sm"
            >
              Технологии
            </motion.span>
            <div className="w-24 h-[2px] bg-accent/50" />
          </motion.div>

          <motion.h2
            className="text-7xl md:text-8xl font-bold font-display mb-16 tracking-tight leading-[1.1] text-center"
            variants={fadeInUp}
          >
            <span className="text-gradient">Наш стек</span>
          </motion.h2>
        </div>

        {/* Табы категорий */}
        <div className="flex flex-wrap gap-4 mb-12 max-w-[95%] mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-card/50 text-foreground/70 hover:bg-card/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Сетка технологий */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[95%] mx-auto mb-32">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold font-display mb-2">{tech.name}</h3>
                <p className="text-foreground/70 text-sm">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Блок со статьями внизу */}
        <div className="mt-32 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-card/40"></div>
          <div className="max-w-[95%] mx-auto py-24 px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold font-display leading-tight"
                  variants={fadeInUp}
                >
                  Делимся экспертными <span className="text-gradient">знаниями</span>
                </motion.h3>
                <motion.p 
                  className="text-xl text-foreground/80 leading-relaxed"
                  variants={fadeInUp}
                >
                  Читайте наши статьи о современной веб-разработке, дизайне и технологиях. 
                  Мы регулярно публикуем полезные материалы, которые помогут вам быть в курсе последних трендов.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={containerVariants}
                >
                  {['Web-разработка', 'UX/UI Дизайн', 'Оптимизация', 'SEO', 'Тренды', 'Инструменты'].map((tag, index) => (
                    <motion.div
                      key={tag}
                      variants={itemVariants}
                      className="bg-card/50 px-4 py-2 rounded-lg border border-border/50 text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <Link 
                  href="/blog" 
                  className="group relative inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100"></div>
                  <div className="relative flex items-center gap-2 px-8 py-4 rounded-full bg-card/80 border border-border backdrop-blur-sm transition-all duration-300 group-hover:border-accent/50">
                    <span className="text-lg font-medium">Читать статьи</span>
                    <svg 
                      className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles; 