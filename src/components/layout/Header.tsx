'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MenuButton from '../../components/ui/MenuButton';
import MobileMenu from '../../components/ui/MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Переключатель меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-[95%] mx-auto flex items-center justify-between">
          {/* Логотип */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-accent group relative overflow-hidden">
              <span className="inline-block relative z-10">
                <span style={{ fontFamily: 'Pixy' }}>Mishlen Team</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
          </motion.div>

          {/* Кнопка меню */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-[100]"
          >
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </motion.div>
        </div>
      </header>

      {/* Мобильное меню */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header; 