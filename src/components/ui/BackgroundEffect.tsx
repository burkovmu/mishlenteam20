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
      {/* Интерактивный цветной фон с градиентными пятнами */}
      <div 
        className="fixed inset-0 z-[-1] opacity-70 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(100, 70, 255, 0.8), transparent 30%), 
                      radial-gradient(circle at ${100 - mousePosition.x * 100}% ${mousePosition.y * 80}%, rgba(255, 70, 120, 0.8), transparent 40%), 
                      radial-gradient(circle at ${mousePosition.x * 80}% ${100 - mousePosition.y * 100}%, rgba(70, 200, 255, 0.8), transparent 35%), 
                      radial-gradient(circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 25}%, rgba(255, 180, 70, 0.5), transparent 45%)`,
          filter: 'blur(60px)',
          transition: 'background 0.3s ease-out'
        }}
      />
      
      {/* Более прозрачная текстура для затемнения */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-black/10 to-black/5 opacity-10 mix-blend-multiply pointer-events-none" />
      
      {/* Эффект затемнения с узором */}
      <div className="fixed inset-0 z-[-3] pointer-events-none">
        <div className="absolute inset-0 bg-[#080808] opacity-40" />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: `${mousePosition.x * 10}px ${mousePosition.y * 10}px`,
            transition: 'background-position 0.3s ease-out'
          }}
        />
      </div>
      
      {/* Динамическое затемнение при прокрутке */}
      <div 
        className="fixed inset-0 z-[-4] bg-gradient-to-b from-black/0 via-black/40 to-black/80 pointer-events-none"
        style={{
          opacity: 0.2 + (scrollPosition * 0.3),
          transition: 'opacity 0.3s ease-out'
        }}
      />
    </>
  );
}; 