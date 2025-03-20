'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { title: 'Услуги', href: '#услуги' },
  { title: 'Проекты', href: '#проекты' },
  { title: 'О нас', href: '#о-нас' },
  { title: 'Статьи', href: '#статьи' },
  { title: 'Связаться', href: '#связаться' },
];

// Анимация для мобильного меню
const menuVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // ease-out-expo
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // ease-out-expo
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Анимация для элементов внутри меню
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // ease-out-expo
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1], // ease-out-expo
    },
  },
};

// Анимация для затемнения фона
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Обработчик клика по ссылке
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Затемнение фона */}
          <motion.div 
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 bg-background z-50 overflow-hidden max-w-[70%] ml-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="h-full flex flex-col p-8 pt-24">
              {/* Ссылки меню */}
              <nav className="flex-1 flex flex-col justify-center space-y-6">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      className="text-4xl sm:text-5xl md:text-6xl font-display inline-block text-accent hover:text-secondary transition-colors duration-300 transform hover:translate-x-2"
                      onClick={handleLinkClick}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Нижняя часть с контактами */}
              <motion.div
                variants={itemVariants}
                className="mt-auto pt-8 border-t border-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-muted text-sm mb-2">Напишите нам</h3>
                    <a
                      href="mailto:info@mishlenteam.ru"
                      className="text-foreground hover:text-accent transition-colors duration-300"
                    >
                      info@mishlenteam.ru
                    </a>
                  </div>
                  <div>
                    <h3 className="text-muted text-sm mb-2">Позвоните нам</h3>
                    <a
                      href="tel:+79001234567"
                      className="text-foreground hover:text-accent transition-colors duration-300"
                    >
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>
                
                {/* Социальные сети */}
                <div className="mt-8 flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                    aria-label="Telegram"
                  >
                    <span className="text-accent">TG</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <span className="text-accent">IG</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                    aria-label="Behance"
                  >
                    <span className="text-accent">BE</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 