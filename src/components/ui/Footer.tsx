'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.6361 7H17.6477" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 5.79C21.2483 6.12 20.4534 6.34 19.64 6.44C20.4982 5.92 21.1413 5.12 21.45 4.17C20.6436 4.65 19.7608 4.99 18.84 5.17C18.2245 4.5 17.405 4.06 16.5098 3.92C15.6147 3.78 14.6945 3.95 13.8938 4.4C13.093 4.85 12.4569 5.55 12.0852 6.39C11.7135 7.23 11.6273 8.17 11.84 9.06C10.2094 8.98 8.61444 8.55 7.15865 7.8C5.70287 7.05 4.41839 6.01 3.39 4.74C3.02914 5.38 2.83952 6.1 2.84 6.83C2.83872 7.5 3.00422 8.16 3.32176 8.75C3.63929 9.34 4.09589 9.84 4.66 10.21C4.00798 10.19 3.36989 10.01 2.8 9.68V9.73C2.80489 10.69 3.13599 11.62 3.73731 12.36C4.33864 13.09 5.17326 13.57 6.1 13.72C5.74326 13.82 5.37287 13.87 5 13.87C4.74189 13.87 4.48442 13.85 4.23 13.8C4.49391 14.64 5.00462 15.38 5.69107 15.9C6.37753 16.42 7.20558 16.71 8.06 16.73C6.6172 17.87 4.83588 18.49 3 18.49C2.66574 18.49 2.33174 18.47 2 18.44C3.87443 19.64 6.05881 20.28 8.29 20.27C9.82969 20.29 11.3571 20 12.7831 19.42C14.2091 18.84 15.505 17.99 16.5952 16.92C17.6854 15.84 18.5458 14.56 19.1358 13.14C19.7258 11.72 20.0322 10.19 20.04 8.65C20.04 8.47 20.04 8.28 20.04 8.09C20.8279 7.5 21.4951 6.78 22 5.96L22 5.79Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.56 3.69C12.32 8.67 14.66 11.82 18.13 20.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.13 7.6C14.87 10.38 10.17 11.38 3.95 11.28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.56 19.51C9.14 15.44 13.26 13.18 20.1 13.38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Behance',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 7H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 17H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 7H2V17H6C8.2 17 10 15.2 10 12C10 8.8 8.2 7 6 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 7H14V12H18C19.1 12 20 11.1 20 9.5C20 7.9 19.1 7 18 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12H14V17H18C19.1 17 20 16.1 20 14.5C20 12.9 19.1 12 18 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-card relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="container-fluid px-4 md:px-6 relative z-10">
        <div className="max-w-[95%] mx-auto">
          {/* Верхняя часть футера с логотипом */}
          <div className="py-16 flex flex-col items-center text-center border-b border-border/30 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block">
                <span className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  Mishlen Team
                </span>
              </Link>
              <p className="text-foreground/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light">
                Мы создаем уникальные цифровые решения, которые помогают нашим клиентам выделиться в онлайн-пространстве.
              </p>
              <div className="flex items-center justify-center gap-6 mt-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border hover:border-accent/50 text-foreground/70 hover:text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Основная часть футера с колонками */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                <div className="relative p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 group-hover:border-accent/50 transition duration-300">
                  <h3 className="text-xl font-bold font-display mb-4">Готовы обсудить проект?</h3>
                  <p className="text-foreground/70 mb-4 font-light">
                    Свяжитесь с нами, и мы поможем реализовать ваши идеи
                  </p>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    Связаться
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-bold font-display mb-6 text-gradient">Навигация</h3>
                <ul className="space-y-4 font-light">
                  <li>
                    <Link href="/" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      Проекты
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      Услуги
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      Контакты
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold font-display mb-6 text-gradient">Услуги</h3>
                <ul className="space-y-4 font-light">
                  <li>
                    <Link href="#services" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      Веб-разработка
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      UI/UX дизайн
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      Интернет-магазины
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-6 h-px bg-border group-hover:w-8 group-hover:bg-accent transition-all duration-300"></span>
                      SEO-оптимизация
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold font-display mb-6 text-gradient">Контакты</h3>
                <ul className="space-y-4 font-light">
                  <li>
                    <a href="tel:+79991234567" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                        </svg>
                      </div>
                      +7 (999) 123-45-67
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@mishlenteam.ru" className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      info@mishlenteam.ru
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Нижняя часть футера с копирайтом */}
          <div className="py-6 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-foreground/60 text-sm font-light mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                &copy; {currentYear} MISHLEN Team. Все права защищены.
              </motion.p>
              
              <motion.div 
                className="flex space-x-6 mt-4 md:mt-0 text-sm font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                  Политика конфиденциальности
                </Link>
                <Link href="#" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                  Условия использования
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 