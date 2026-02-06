import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const navRef = useRef(null)
  
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const navBlur = useTransform(scrollY, [0, 100], [8, 20])

  const navItems = [
    { name: 'Inicio', path: '/', active: location.pathname === '/' },
    { name: 'Nosotros', path: '/about', active: location.pathname === '/about' },
    { name: 'Servicios', path: '/services', active: location.pathname === '/services' },
    { name: 'Portafolio', path: '/portfolio', active: location.pathname === '/portfolio' },
    { name: 'Contacto', path: '/contact', active: location.pathname === '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
      
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled_progress = (winScroll / height) * 100
      setScrollProgress(scrolled_progress)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    closed: { 
      opacity: 0, 
      x: -20,
      filter: 'blur(10px)'
    },
    open: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 origin-left z-[100]"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Top Bar - Hidden on mobile and scroll */}
      <motion.div 
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -48 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="hidden md:block fixed top-0 left-0 right-0 bg-primary-900 text-white overflow-hidden z-40"
        style={{ 
          pointerEvents: isScrolled ? 'none' : 'auto',
          height: isScrolled ? 0 : '40px'
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-10 text-xs lg:text-sm">
            <div className="flex items-center gap-6">
              <motion.a 
                href="tel:9631326010" 
                className="flex items-center gap-2 hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="w-3.5 h-3.5" />
                <span>963 132 6010</span>
              </motion.a>
              <motion.a 
                href="mailto:Draft.mkt@Hotmail.com" 
                className="flex items-center gap-2 hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="w-3.5 h-3.5" />
                <span>Draft.mkt@Hotmail.com</span>
              </motion.a>
            </div>
            <div className="flex items-center gap-4 text-primary-300">
              <span className="hidden lg:inline">Lun - Vie: 9:00 AM - 6:00 PM</span>
              <div className="flex gap-3">
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="#" className="hover:text-white transition-colors"><FiFacebook className="w-3.5 h-3.5" /></motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="#" className="hover:text-white transition-colors"><FiInstagram className="w-3.5 h-3.5" /></motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-0' 
            : 'top-0 md:top-10'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        }}
      >
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link 
                to="/" 
                className="flex items-center gap-2 sm:gap-3 group z-50" 
                onClick={closeMenu}
              >
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <span className="font-bold text-white text-lg">D</span>
                </motion.div>
                <motion.span 
                  className={`font-bold text-lg sm:text-xl transition-colors ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  Draft Marketing
                </motion.span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2 group"
                  >
                    <motion.span
                      className={`font-medium text-sm transition-all duration-300 relative ${
                        isScrolled
                          ? item.active
                            ? 'text-primary-600'
                            : 'text-gray-700 group-hover:text-primary-600'
                          : item.active
                            ? 'text-white'
                            : 'text-white/90 group-hover:text-white'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.span>
                    {item.active && (
                      <motion.div
                        layoutId="activeNavTab"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-primary-600' : 'bg-white'
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button Desktop */}
              <motion.div 
                className="hidden lg:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  Consulta Gratis
                </Link>
              </motion.div>

              {/* Mobile CTA + Menu Button */}
              <div className="flex items-center gap-3 lg:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className={`p-2 rounded-lg transition-all ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-black/60"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                damping: 30,
                stiffness: 300
              }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="min-h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="font-bold text-white text-lg">D</span>
                    </div>
                    <span className="font-bold text-lg text-gray-900">Draft Marketing</span>
                  </div>
                  <motion.button
                    onClick={closeMenu}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className={`block py-4 px-5 rounded-xl font-semibold text-base transition-all duration-300 ${
                            item.active
                              ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <motion.div 
                    className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-bold text-gray-900 mb-4">Contáctanos</h3>
                    <div className="space-y-3">
                      <a 
                        href="tel:9631326010" 
                        className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <FiPhone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Teléfono</p>
                          <p className="font-semibold text-sm">963 132 6010</p>
                        </div>
                      </a>
                      <a 
                        href="mailto:Draft.mkt@Hotmail.com" 
                        className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <FiMail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="font-semibold text-sm">Draft.mkt@Hotmail.com</p>
                        </div>
                      </a>
                    </div>

                    {/* Social Media */}
                    <div className="mt-6 pt-6 border-t border-white/50">
                      <p className="text-xs text-gray-600 mb-3">Síguenos</p>
                      <div className="flex gap-3">
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors shadow-sm"
                        >
                          <FiFacebook className="w-4 h-4" />
                        </a>
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-colors shadow-sm"
                        >
                          <FiInstagram className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <p className="text-xs text-center text-gray-500">
                    Lun - Vie: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-center text-gray-400 mt-2">
                    Comitán de Domínguez, Chiapas
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar