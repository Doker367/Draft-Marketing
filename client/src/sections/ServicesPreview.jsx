import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiMonitor, 
  FiSpeaker, 
  FiEdit3, 
  FiCalendar,
  FiArrowRight,
  FiTrendingUp
} from 'react-icons/fi'
import { RevealText, FadeInText, SlideUpText } from '../components/AnimatedText'

const ServicesPreview = () => {
  const services = [
    {
      icon: FiMonitor,
      title: 'Marketing Digital',
      description: 'Estrategias digitales completas para posicionar tu marca en el mundo online.',
      features: ['SEO/SEM', 'Redes Sociales', 'Email Marketing', 'Analytics'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: FiSpeaker,
      title: 'Campañas BTL',
      description: 'Activaciones innovadoras que conectan directamente con tu audiencia.',
      features: ['Activaciones', 'Promociones', 'Eventos Masivos', 'Experiencias'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: FiEdit3,
      title: 'Branding e Identidad',
      description: 'Creamos identidades visuales memorables que destacan en el mercado.',
      features: ['Logo Design', 'Manual de Marca', 'Packaging', 'Aplicaciones'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: FiCalendar,
      title: 'Organización de Eventos',
      description: 'Eventos corporativos y comerciales que dejan huella en tu audiencia.',
      features: ['Lanzamientos', 'Conferencias', 'Ferias', 'Inauguraciones'],
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <FadeInText delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 sm:mb-6">
              <FiTrendingUp className="w-4 h-4" />
              <span>Nuestros Servicios</span>
            </div>
          </FadeInText>
          
          <RevealText className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">
            Soluciones completas para hacer crecer tu negocio
          </RevealText>
          
          <FadeInText delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Ofrecemos servicios integrales de marketing que se adaptan a las necesidades 
              específicas de tu empresa.
            </p>
          </FadeInText>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <SlideUpText key={service.title} delay={service.delay}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-full"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 h-full">
                    {/* Icon */}
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  
                  {/* Content */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Learn More */}
                  <motion.button 
                    className="text-primary-600 hover:text-primary-700 font-semibold text-xs sm:text-sm flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span>Conocer más</span>
                    <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </SlideUpText>
            )
          })}
        </div>

        {/* CTA */}
        <FadeInText delay={0.6}>
          <div className="text-center mt-12 sm:mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span>Ver Todos los Servicios</span>
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>
        </FadeInText>
      </div>
    </section>
  )
}

export default ServicesPreview