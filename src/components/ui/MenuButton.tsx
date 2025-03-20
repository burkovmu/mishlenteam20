'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  return (
    <motion.button
      className={`relative z-[100] flex flex-col justify-center items-center w-14 h-14 rounded-full transition-colors duration-300 outline-none border-2 ${isOpen ? 'bg-secondary border-secondary' : 'bg-accent border-accent'}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      <div className="flex flex-col justify-center items-center w-7 h-7 space-y-[6px]">
        <motion.span
          className="w-7 h-[2px] bg-white rounded-full block"
          variants={topLineVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-7 h-[2px] bg-white rounded-full block"
          variants={middleLineVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-7 h-[2px] bg-white rounded-full block"
          variants={bottomLineVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.button>
  );
};

export default MenuButton;
