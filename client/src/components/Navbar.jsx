import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/', active: location.pathname === '/' },
    { name: 'Nosotros', path: '/about', active: location.pathname === '/about' },
    { name: 'Servicios', path: '/services', active: location.pathname === '/services' },
    { name: 'Portafolio', path: '/portfolio', active: location.pathname === '/portfolio' },
    { name: 'Contacto', path: '/contact', active: location.pathname === '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FiPhone className="w-4 h-4" />
                <a href="tel:9631326010" className="hover:text-primary-300 transition-colors">
                  963 132 6010
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="w-4 h-4" />
                <a href="mailto:Draft.mkt@Hotmail.com" className="hover:text-primary-300 transition-colors">
                  Draft.mkt@Hotmail.com
                </a>
              </div>
            </div>
            <div className="text-primary-300">
              Lun - Vie: 9:00 AM - 6:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
            : 'bg-transparent py-6'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">D</span>
              </div>
              <span className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Draft Marketing
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 relative ${
                    isScrolled
                      ? item.active
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                      : item.active
                        ? 'text-white'
                        : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-primary-600' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Consulta Gratis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 max-w-sm bg-white shadow-2xl"
            >
              <div className="p-6">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-white text-sm">D</span>
                    </div>
                    <span className="font-bold text-lg text-gray-900">Draft Marketing</span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                          item.active
                            ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Consulta Gratis
                  </Link>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <FiPhone className="w-4 h-4" />
                        <a href="tel:9631326010" className="hover:text-primary-600">
                          963 132 6010
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMail className="w-4 h-4" />
                        <a href="mailto:Draft.mkt@Hotmail.com" className="hover:text-primary-600">
                          Draft.mkt@Hotmail.com
                        </a>
                      </div>
                    </div>
                  </div>
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