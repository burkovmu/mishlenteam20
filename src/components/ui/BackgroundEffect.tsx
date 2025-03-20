'use client';

import { useState, useEffect } from 'react';

export const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Обновляем позицию мыши для интерактивного фона
      const { clientX, clientY } = e;
      setMousePosition({
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight
      });
    };
    
    const handleScroll = () => {
      // Получаем процент прокрутки страницы
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      {/* Интерактивный цветной фон с градиентными пятнами - уменьшена яркость цветов */}
      <div 
        className="fixed inset-0 z-[-1] opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(80, 60, 180, 0.6), transparent 30%), 
                      radial-gradient(circle at ${100 - mousePosition.x * 100}% ${mousePosition.y * 80}%, rgba(180, 60, 100, 0.5), transparent 40%), 
                      radial-gradient(circle at ${mousePosition.x * 80}% ${100 - mousePosition.y * 100}%, rgba(60, 120, 180, 0.5), transparent 35%), 
                      radial-gradient(circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 25}%, rgba(180, 140, 60, 0.3), transparent 45%)`,
          filter: 'blur(70px)',
          transition: 'background 0.3s ease-out'
        }}
      />
      
      {/* Более темная текстура для затемнения */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-black/30 to-black/15 opacity-30 mix-blend-multiply pointer-events-none" />
      
      {/* Эффект затемнения с узором - увеличена прозрачность базового цвета */}
      <div className="fixed inset-0 z-[-3] pointer-events-none">
        <div className="absolute inset-0 bg-[#050505] opacity-60" />
        <div 
          className="absolute inset-0 opacity-8" 
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: `${mousePosition.x * 10}px ${mousePosition.y * 10}px`,
            transition: 'background-position 0.3s ease-out'
          }}
        />
      </div>
      
      {/* Динамическое затемнение при прокрутке - увеличена базовая непрозрачность */}
      <div 
        className="fixed inset-0 z-[-4] bg-gradient-to-b from-black/20 via-black/50 to-black/80 pointer-events-none"
        style={{
          opacity: 0.3 + (scrollPosition * 0.4),
          transition: 'opacity 0.3s ease-out'
        }}
      />
    </>
  );
}; 