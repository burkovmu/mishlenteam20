'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MenuIconButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuIconButton: React.FC<MenuIconButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative z-[100] w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
        isOpen ? 'bg-secondary' : 'bg-accent hover:bg-accent/90'
      }`}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      <div className="w-6 h-6 relative">
        <motion.span
          className="absolute left-0 top-[5px] w-6 h-[2px] bg-white rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 top-[11px] w-6 h-[2px] bg-white rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? 10 : 0
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 bottom-[5px] w-6 h-[2px] bg-white rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </button>
  );
};

export default MenuIconButton; 