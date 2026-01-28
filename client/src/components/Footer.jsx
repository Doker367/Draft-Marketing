import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiArrowUp
} from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'Marketing Digital', href: '/services#digital' },
      { name: 'Campañas BTL', href: '/services#btl' },
      { name: 'Branding', href: '/services#branding' },
      { name: 'Eventos', href: '/services#eventos' }
    ],
    company: [
      { name: 'Nosotros', href: '/about' },
      { name: 'Portafolio', href: '/portfolio' },
      { name: 'Contacto', href: '/contact' },
      { name: 'Blog', href: '#' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Aviso Legal', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: FiFacebook, href: '#', name: 'Facebook' },
    { icon: FiInstagram, href: '#', name: 'Instagram' },
    { icon: FiLinkedin, href: '#', name: 'LinkedIn' },
    { icon: FiTwitter, href: '#', name: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">D</span>
              </div>
              <span className="font-bold text-xl">Draft Marketing</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Somos una agencia de marketing integral ubicada en Chiapas, especializada en 
              transformar ideas en estrategias exitosas que impulsan el crecimiento de tu negocio.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <FiMapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">Comitán de Domínguez, Chiapas, México</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <FiPhone className="w-4 h-4 text-primary-400" />
                <a href="tel:9631326010" className="text-gray-400 hover:text-white transition-colors">
                  963 132 6010
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <FiMail className="w-4 h-4 text-primary-400" />
                <a href="mailto:Draft.mkt@Hotmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Draft.mkt@Hotmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <FiClock className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">Lun - Vie: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            
            <p className="text-gray-400 text-sm mb-4">
              Mantente al día con las últimas tendencias en marketing
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 border border-primary-600 rounded-r-lg transition-colors">
                  <FiMail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Draft Marketing. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Legal Links */}
              <div className="flex space-x-4">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Volver arriba"
              >
                <FiArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/529631326010"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <FiPhone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </footer>
  )
}

export default Footer