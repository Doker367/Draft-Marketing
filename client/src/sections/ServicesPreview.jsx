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
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FiTrendingUp className="w-4 h-4" />
            <span>Nuestros Servicios</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Soluciones completas para
            <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              hacer crecer tu negocio
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ofrecemos servicios integrales de marketing que se adaptan a las necesidades 
            específicas de tu empresa, desde estrategias digitales hasta activaciones presenciales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More */}
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-2 group">
                    <span>Conocer más</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>Ver Todos los Servicios</span>
            <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview