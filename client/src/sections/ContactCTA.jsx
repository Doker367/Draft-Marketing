import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiArrowRight, FiMessageCircle } from 'react-icons/fi'

const ContactCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-10" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FiMessageCircle className="w-4 h-4" />
              <span>¿Listo para empezar?</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Hablemos sobre tu
              <span className="block text-primary-200">
                próximo proyecto
              </span>
            </h2>
            
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Estás a un paso de transformar tu negocio. Contáctanos para una 
              consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-10">
              <motion.a
                href="tel:9631326010"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Llámanos ahora</div>
                  <div className="text-primary-200">963 132 6010</div>
                </div>
              </motion.a>
              
              <motion.a
                href="mailto:Draft.mkt@Hotmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Envíanos un email</div>
                  <div className="text-primary-200">Draft.mkt@Hotmail.com</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="font-bold text-2xl mb-6 text-center">
                Consulta Gratuita de 30 Minutos
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Análisis gratuito de tu situación actual</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Identificación de oportunidades de crecimiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Propuesta personalizada sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                  <span>Asesoría especializada en el mercado chiapaneco</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 group"
                >
                  <span>Solicitar Consulta Gratuita</span>
                  <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <a
                  href="https://wa.me/529631326010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
              
              <p className="text-center text-sm opacity-80 mt-4">
                Respuesta garantizada en menos de 2 horas
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24h</div>
            <div className="text-primary-200">Respuesta Máxima</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">8+</div>
            <div className="text-primary-200">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">150+</div>
            <div className="text-primary-200">Proyectos Éxitosos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-primary-200">Chiapaneco</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA