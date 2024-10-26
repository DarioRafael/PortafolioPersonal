import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, DownloadIcon, ChevronUpIcon } from 'lucide-react';

// Import your components
import Home from './components/PaginaPrincipal';
import Projects from './components/Proyectos';
import Skills from './components/Certificados';
import Experience from './components/Experiencia';
import Contact from './components/Contacto';
import Certificados from './components/Certificados';


const MobileMenu = React.forwardRef(({ isOpen, onClose }, ref) => {
  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.3 } },
    open: { x: 0, transition: { duration: 0.3 } }
  };

  return (
      <motion.div
          ref={ref}
          className="fixed top-0 right-0 h-screen w-64 bg-gray-900 shadow-lg z-50 p-6"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
      >
        <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-blue-400"
            aria-label="Cerrar menú"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <nav className="flex flex-col space-y-6 mt-16">
          {[
            ['Inicio', '/'],
            ['Proyectos', '/projects'],
            ['Habilidades', '/skills'],
            ['Experiencia', '/experience'],
            ['Certificados', '/certificates'],
            ['Contacto', '/contact'],
          ].map(([title, url]) => (
              <Link
                  key={url}
                  to={url}
                  onClick={onClose}
                  className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
              >
                {title}
              </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
          <a
              href="/tu-cv.pdf"
              target="_blank"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <DownloadIcon className="h-5 w-5" />
            <span>Descargar CV</span>
          </a>
        </div>
      </motion.div>
  );
});

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <AnimatePresence>
        {isVisible && (
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
                aria-label="Volver arriba"
            >
              <ChevronUpIcon className="h-6 w-6" />
            </motion.button>
        )}
      </AnimatePresence>
  );
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
          isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !buttonRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <header
              className={`fixed w-full z-40 transition-all duration-300 ${
                  isScrolled
                      ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-lg'
                      : 'bg-transparent py-4'
              }`}
          >
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-sans font-bold text-white hover:text-blue-400 transition-colors"
                >
                  Dario Rafael
                </Link>

                <div className="flex items-center space-x-6">
                  <nav className="hidden md:flex items-center space-x-8">
                    {[
                      ['Inicio', '/'],
                      ['Proyectos', '/projects'],
                      ['Habilidades', '/skills'],
                      ['Experiencia', '/experience'],
                      ['Certificados', '/certificates'],
                      ['Contacto', '/contact'],
                    ].map(([title, url]) => (
                        <Link
                            key={url}
                            to={url}
                            className="text-white hover:text-blue-400 transition-colors font-medium"
                        >
                          {title}
                        </Link>
                    ))}
                  </nav>

                  <div className="hidden md:block">
                    <a
                        href="/tu-cv.pdf"
                        target="_blank"
                        className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <DownloadIcon className="h-5 w-5" />
                      <span>Descargar CV</span>
                    </a>
                  </div>

                  <button
                      ref={buttonRef}
                      onClick={() => setIsMenuOpen(true)}
                      className="md:hidden text-white hover:text-blue-400 transition-colors"
                      aria-label="Abrir menú"
                  >
                    <MenuIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              ref={menuRef}
          />

          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificates" element={<Certificados />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Columna de Información Personal */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Dario Rafael</h3>
                <p className="text-gray-400 leading-relaxed">
                  Desarrollador en formación, apasionado por la tecnología y la innovación. Explora mis proyectos y
                  conecta conmigo.
                </p>
              </div>

              {/* Columna de Redes Sociales */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Sígueme</h3>
                <div className="flex justify-center md:justify-end space-x-6 text-2xl">
                  <a href="https://github.com/DarioRafael" target="_blank" rel="noopener noreferrer"
                     className="hover:text-blue-400 transition-colors">
                    <FaGithub/>
                  </a>
                  <a href="https://www.linkedin.com/in/dariorafaelgarciabarcenas/" target="_blank" rel="noopener noreferrer"
                     className="hover:text-blue-400 transition-colors">
                    <FaLinkedin/>
                  </a>
                  <a href="mailto:dariorafa29@gmail.com" className="hover:text-blue-400 transition-colors">
                    <FaEnvelope/>
                  </a>
                </div>
              </div>

            </div>

            {/* Línea Divisoria y Derechos Reservados */}
            <div className="mt-12 pt-6 border-t border-gray-700 text-center">
              <p>© {new Date().getFullYear()} Dario Rafael García Bárcenas. Todos los derechos reservados.</p>
            </div>
          </footer>

          <ScrollToTop/>
        </div>
      </Router>
  );
}

export default App;