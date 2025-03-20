'use client';

import React, { useState, memo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ContactModal from './ContactModal';
import Button from '@/components/ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Определение типов для проекта
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  placeholder: string;
  category: string;
  tags: string[];
  features: string[];
  projectUrl?: string;
  galleryImages?: {
    id: number;
    src: string;
    alt: string;
  }[];
}

// Типы для пропсов компонентов
interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
  isHovered: boolean;
  onHover: (id: number) => void;
  onHoverEnd: () => void;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Мемоизированный компонент проекта для предотвращения лишних ререндеров
const ProjectCard = memo(({ project, onClick, isHovered, onHover, onHoverEnd }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onHoverEnd}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
        willChange: 'transform'
      }}
    >
      <div className="relative h-[300px] md:h-[400px] p-8 flex flex-col justify-end bg-gradient-to-br from-accent/10 via-secondary/10 to-accent/5">
        {/* Фоновая анимация при наведении */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Плавающие числа */}
        {[...Array(8)].map((_, i) => {
          const xPos = 20 + (i * 10);
          const yPos = 10 + (i * 8);
          
          return (
            <motion.div
              key={i}
              className="absolute text-xl font-mono text-accent/10"
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
                ease: "easeInOut",
              }}
            >
              {i % 2}
            </motion.div>
          );
        })}
        
        {/* Категория */}
        <motion.span
          className="relative z-10 inline-block py-1 px-3 rounded-full bg-accent/20 backdrop-blur-sm text-white text-xs font-medium mb-3 w-fit"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {project.category}
        </motion.span>
        
        {/* Заголовок */}
        <motion.h3 
          className="relative z-10 text-2xl md:text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            {project.title}
          </span>
        </motion.h3>
        
        {/* Описание */}
        <motion.p 
          className="relative z-10 text-white/90 mb-4 line-clamp-2 md:line-clamp-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        
        {/* Теги */}
        <motion.div 
          className="relative z-10 flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.tags.map((tag: string, index: number) => (
            <motion.span 
              key={tag} 
              className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs text-white/90 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Кнопка */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            onClick={() => onClick(project.id)}
            variant="gradient"
            size="md"
            className="w-full sm:w-auto"
          >
            Подробнее о проекте
          </Button>
        </motion.div>

        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-32 h-32">
          <motion.div
            className="absolute inset-0 border border-accent/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-4 border border-secondary/20 rounded-full"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Мемоизированный компонент модального окна
const ProjectModal = memo(({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-card/95 backdrop-blur-lg rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={project.placeholder || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                {project.title}
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs text-white/90 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8">
          <h4 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            О проекте
          </h4>
          <p className="text-foreground/90 mb-6">{project.description}</p>
          
          <h4 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Ключевые особенности
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {project.features.map((feature: string, index: number) => (
              <li 
                key={index} 
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 5.625L8.125 14.375L3.75 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Button
              onClick={onClose}
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              Закрыть
            </Button>
            <ContactModal 
              buttonText="Обсудить похожий проект" 
              buttonVariant="primary" 
              buttonSize="md"
              buttonClassName="w-full sm:w-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectModal.displayName = 'ProjectModal';

// Данные о проектах
const projects: Project[] = [
  {
    id: 1,
    title: 'Архитектурное бюро "Модерн"',
    description: 'Минималистичный сайт с плавными переходами и параллакс-эффектами для архитектурного бюро. Уникальный дизайн, отражающий философию современной архитектуры.',
    image: '/images/portfolio/modern/1.jpg',
    placeholder: 'data:image/jpeg;base64,...',
    category: 'Архитектура',
    tags: ['React', 'Next.js', 'GSAP', 'Framer Motion'],
    features: [
      'Параллакс-эффекты',
      'Интерактивная галерея проектов',
      'Анимированные переходы',
      'Оптимизированная производительность'
    ],
    projectUrl: 'https://example.com/modern',
    galleryImages: [
      {
        id: 1,
        src: '/images/portfolio/modern/1.jpg',
        alt: 'Главная страница сайта'
      },
      {
        id: 2,
        src: '/images/portfolio/modern/2.jpg',
        alt: 'О компании'
      },
      {
        id: 3,
        src: '/images/portfolio/modern/3.jpg',
        alt: 'Портфолио'
      },
      {
        id: 4,
        src: '/images/portfolio/modern/4.jpg',
        alt: 'Контакты'
      },
      {
        id: 5,
        src: '/images/portfolio/modern/5.jpg',
        alt: 'Услуги'
      }
    ]
  },
  {
    id: 2,
    title: 'Аренда автомобилей в Дубае "RentDubai"',
    description: `Описание кейса:
Современный веб-сайт для премиальной компании по аренде автомобилей в Дубае, предоставляющий удобный сервис для клиентов со всего мира.

Задача:
Разработать современный и функциональный сайт для компании, предоставляющей услуги аренды автомобилей премиум-класса в Дубае. Основные требования: удобство для пользователей, поддержка двух языков (русский и английский), а также интеграция формы бронирования с выбором дат.

Реализация:
Мы создали стильный и интуитивно понятный сайт с современным дизайном и удобным интерфейсом. Особое внимание было уделено пользовательскому опыту и оптимизации процесса бронирования автомобилей.

Ключевые особенности проекта:
• Мультиязычность: полная поддержка русского и английского языков
• Умная форма бронирования: интуитивно понятный процесс выбора дат и автомобиля
• Адаптивный дизайн: идеальное отображение на всех устройствах
• Каталог автомобилей: детальные описания и характеристики каждой модели
• Удобная навигация: интуитивно понятная структура сайта
• Оптимизация скорости: быстрая загрузка всех страниц
• Интеграция с CRM: автоматизация обработки заявок

Результат:
Сайт стал эффективным инструментом для привлечения клиентов и увеличения продаж. Благодаря удобной форме бронирования и поддержке двух языков, компания смогла расширить свою аудиторию и улучшить качество обслуживания. Количество онлайн-бронирований выросло на 150% в первые три месяца после запуска.

Заключение:
Этот проект демонстрирует, как современные технологии и продуманный дизайн помогают бизнесу достигать новых высот. Сайт не только улучшил пользовательский опыт, но и значительно увеличил эффективность бизнес-процессов компании.`,
    image: '/images/portfolio/aurum/1.jpg',
    placeholder: 'data:image/jpeg;base64,...',
    category: 'Аренда автомобилей',
    tags: ['React', 'Redux', 'Three.js', 'Node.js'],
    features: [
      'Мультиязычность (русский и английский)',
      'Форма бронирования с выбором дат',
      'Адаптивный дизайн',
      'Каталог автомобилей',
      'Удобная навигация'
    ],
    projectUrl: 'https://example.com/aurum',
    galleryImages: [
      {
        id: 1,
        src: '/images/portfolio/aurum/1.jpg',
        alt: 'Главная страница'
      },
      {
        id: 2,
        src: '/images/portfolio/aurum/2.jpg',
        alt: 'Каталог автомобилей'
      },
      {
        id: 3,
        src: '/images/portfolio/aurum/3.jpg',
        alt: 'Форма бронирования'
      },
      {
        id: 4,
        src: '/images/portfolio/aurum/4.jpg',
        alt: 'Страница автомобиля'
      },
      {
        id: 5,
        src: '/images/portfolio/aurum/5.jpg',
        alt: 'Контакты'
      }
    ]
  },
  {
    id: 3,
    title: 'Фестиваль "Новая волна"',
    description: 'Динамичный сайт с нестандартной навигацией и анимированными переходами для музыкального фестиваля. Яркий дизайн, отражающий атмосферу мероприятия.',
    image: '/images/portfolio/festival/1.jpg',
    placeholder: 'data:image/jpeg;base64,...',
    category: 'Мероприятия',
    tags: ['Next.js', 'GSAP', 'WebGL', 'Firebase'],
    features: [
      'Интерактивная программа фестиваля',
      'Онлайн-бронирование билетов',
      'Стриминг выступлений',
      'Интеграция соцсетей'
    ],
    projectUrl: 'https://example.com/festival',
    galleryImages: [
      {
        id: 1,
        src: '/images/portfolio/festival/1.jpg',
        alt: 'Главная страница фестиваля'
      },
      {
        id: 2,
        src: '/images/portfolio/festival/2.jpg',
        alt: 'Программа мероприятий'
      },
      {
        id: 3,
        src: '/images/portfolio/festival/3.jpg',
        alt: 'Билеты'
      },
      {
        id: 4,
        src: '/images/portfolio/festival/4.jpg',
        alt: 'Участники'
      },
      {
        id: 5,
        src: '/images/portfolio/festival/5.jpg',
        alt: 'Галерея'
      }
    ]
  },
  {
    id: 4,
    title: 'Экосистема "GreenTech"',
    description: 'Интерактивная платформа с визуализацией данных и сложными анимациями для технологического стартапа. Инновационный подход к представлению информации.',
    image: '/images/portfolio/greentech/1.jpg',
    placeholder: 'data:image/jpeg;base64,...',
    category: 'Технологии',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    features: [
      'Визуализация данных в реальном времени',
      'Интерактивные графики',
      'API интеграция',
      'Масштабируемая архитектура'
    ],
    projectUrl: 'https://example.com/greentech',
    galleryImages: [
      {
        id: 1,
        src: '/images/portfolio/greentech/1.jpg',
        alt: 'Главная страница платформы'
      },
      {
        id: 2,
        src: '/images/portfolio/greentech/2.jpg',
        alt: 'Дашборд'
      },
      {
        id: 3,
        src: '/images/portfolio/greentech/3.jpg',
        alt: 'Аналитика'
      },
      {
        id: 4,
        src: '/images/portfolio/greentech/4.jpg',
        alt: 'Интеграции'
      },
      {
        id: 5,
        src: '/images/portfolio/greentech/5.jpg',
        alt: 'Настройки'
      }
    ]
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

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

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-background overflow-hidden relative"
      id="portfolio"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-screen bg-accent/5 skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-secondary/5 -skew-x-12 transform origin-bottom-left" />
        <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-[120px]" />
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

      <motion.div 
        className="w-full relative z-10"
        style={{ y }}
      >
        <div className="max-w-[95%] mx-auto mb-16 w-full">
          <motion.div 
            className="mb-10 flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <div className="w-24 h-[2px] bg-accent/50" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium tracking-wider uppercase text-sm"
            >
              Наши работы
            </motion.span>
            <div className="w-24 h-[2px] bg-accent/50" />
          </motion.div>

          <motion.h2
            className="text-7xl md:text-8xl font-bold font-display mb-6 tracking-tight leading-[1.1] text-center"
            variants={itemVariants}
          >
            <span className="text-gradient">Кейсы</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed text-center"
          >
            Каждый проект — это уникальная история успеха и 
            <span className="text-accent"> инновационное </span> 
            решение для бизнеса
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-12 gap-8 w-full px-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`relative ${
                index === 0 ? 'col-span-12 md:col-span-8 md:col-start-5' :
                index === 1 ? 'col-span-12 md:col-span-4' :
                index === 2 ? 'col-span-12 md:col-span-6' :
                'col-span-12 md:col-span-6'
              }`}
            >
              <ProjectCard
                project={project}
                onClick={(id) => setSelectedProject(projects.find(p => p.id === id) || null)}
                isHovered={hoveredProjectId === project.id}
                onHover={setHoveredProjectId}
                onHoverEnd={() => setHoveredProjectId(null)}
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio; 