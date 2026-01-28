import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiTarget, FiUsers } from 'react-icons/fi'

const AboutPreview = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y se refleja en cada proyecto'
    },
    {
      icon: FiTarget,
      title: 'Resultados',
      description: 'Nos enfocamos en generar impacto medible para tu negocio'
    },
    {
      icon: FiUsers,
      title: 'Colaboración',
      description: 'Trabajamos contigo como socios estratégicos'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FiHeart className="w-4 h-4" />
              <span>Nuestra Historia</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              8 años impulsando
              <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                el crecimiento en Chiapas
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Desde 2016, Draft Marketing ha sido el aliado estratégico de empresas 
              chiapanecas que buscan crecer y posicionarse en mercados cada vez más 
              competitivos. Nuestra experiencia local nos permite entender las 
              necesidades únicas de la región.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Combinamos la creatividad chiapaneca con estrategias de marketing 
              probadas a nivel internacional, creando soluciones únicas que conectan 
              con la audiencia local mientras abren puertas a mercados nacionales.
            </p>

            {/* Values */}
            <div className="space-y-6 mb-10">
              {values.map((value, index) => {
                const Icon = value.icon
                
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group"
            >
              <span>Conoce Nuestra Historia</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Equipo Draft Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">8+</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600 mb-1">150+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-2xl p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Chiapas</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview