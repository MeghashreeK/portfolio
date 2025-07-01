import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state]);

  const menuItems = [
    { id: 1, num: '01.', text: 'About', section: 'about' },
    { id: 2, num: '02.', text: 'Experience', section: 'experience' },
    { id: 3, num: '03.', text: 'Work', section: 'work' },
    { id: 4, num: '04.', text: 'Contact', section: 'contact' },
  ];

  // Close side panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0A192F]  shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-[90%] mx-auto h-[10vh] flex justify-between items-center">
        {/* Hamburger (mobile only) */}
        <div className="md:hidden w-full flex justify-end">
          <motion.button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-5 h-5 relative z-[100]"
            initial={false}
            animate={menuOpen ? 'open' : 'closed'}
          >
            <motion.span
              className="h-1 w-full bg-white rounded origin-top-left"
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="h-1 w-full bg-white rounded"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-1 w-full bg-white rounded origin-bottom-left"
              variants={{
                open: { rotate: -45, y: 6 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Desktop Nav */}
        <motion.ul className="hidden md:flex font-mono items-center justify-end  w-full text-[#CCD6F6] gap-5">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              className="hover:text-[#64FFCF] transition-colors duration-300 cursor-pointer"
              onClick={() => handleNavClick(menuItem.section)}
            >
              <span className="text-[#64FFCF]">{menuItem.num}</span> {menuItem.text}
            </li>
          ))}
          <a
            href="https://drive.google.com/file/d/1XZNzOe-gI1QEzf4aTHRKFegj2zrpnyOE/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer relative inline-block px-4 py-2 font-mono text-[16px] text-[#64FFCF] border border-[#64FFCF] rounded group"
          >
            <span className="relative z-10">Resume</span>
            <span className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-[#64FFCF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 ease-in-out rounded" />
          </a>
        </motion.ul>

        {/* Mobile Side Panel */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                ref={panelRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className="fixed top-0 right-0  h-screen w-[70%] bg-[#0A192F] p-8 flex flex-col items-start gap-6 text-white md:hidden shadow-lg z-50"
              >
                <div className=' flex flex-col gap-6 pt-10'>
{menuItems.map((menuItem) => (
                  <div
                    key={menuItem.id}
                    className="text-[18px] font-mono cursor-pointer hover:text-[#64FFCF] transition-colors duration-300 "
                    onClick={() => handleNavClick(menuItem.section)}
                  >
                    <span className="text-[#64FFCF]">{menuItem.num}</span> {menuItem.text}
                  </div>
                ))}
                <a
                  href="https://drive.google.com/file/d/1XZNzOe-gI1QEzf4aTHRKFegj2zrpnyOE/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer mt-4 text-center inline-block px-4 py-2 font-mono text-[16px] text-[#64FFCF] border border-[#64FFCF] rounded"
                >
                  Resume
                </a>
                </div>
                
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
