import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiMonitor, 
  FiSpeaker, 
  FiEdit3, 
  FiCalendar,
  FiArrowRight,
  FiCheck,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiStar,
  FiPlay
} from 'react-icons/fi'

const Services = () => {
  const [activeService, setActiveService] = useState('digital')

  const services = {
    digital: {
      icon: FiMonitor,
      title: 'Marketing Digital',
      subtitle: 'Potencia tu presencia online',
      description: 'Estrategias digitales completas que posicionan tu marca en el mundo online y generan resultados medibles.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      services: [
        'Estrategia Digital Integral',
        'SEO y Posicionamiento Web',
        'SEM y Google Ads',
        'Gestión de Redes Sociales',
        'Email Marketing',
        'Marketing de Contenidos',
        'Analítica y Reporting',
        'E-commerce y Ventas Online'
      ],
      benefits: [
        'Aumento del tráfico web hasta 400%',
        'Mejora en conversión promedio del 250%',
        'ROI positivo desde el primer mes',
        'Presencia 24/7 en mercados objetivo'
      ],
      process: [
        'Auditoria digital completa',
        'Diseño de estrategia personalizada',
        'Implementación y optimización',
        'Monitoreo y reporting constante'
      ],
      pricing: 'Desde $8,000 MXN/mes'
    },
    btl: {
      icon: FiSpeaker,
      title: 'Campañas BTL',
      subtitle: 'Conecta directamente con tu audiencia',
      description: 'Activaciones innovadoras y experiencias memorables que crean vínculos emocionales con tu marca.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      services: [
        'Activaciones de Marca',
        'Eventos Promocionales',
        'Marketing de Guerrilla',
        'Sampling y Degustaciones',
        'Roadshows y Giras',
        'Merchandising Estratégico',
        'Experiencias Inmersivas',
        'Marketing Sensorial'
      ],
      benefits: [
        'Interacción directa con consumidores',
        'Recordación de marca del 85%',
        'Generación de buzz y viralidad',
        'Medición de impacto en tiempo real'
      ],
      process: [
        'Definición de objetivos y audiencia',
        'Conceptualización creativa',
        'Planificación logística detallada',
        'Ejecución y seguimiento'
      ],
      pricing: 'Desde $15,000 MXN/evento'
    },
    branding: {
      icon: FiEdit3,
      title: 'Branding e Identidad',
      subtitle: 'Crea una marca inolvidable',
      description: 'Desarrollamos identidades visuales y estratégicas que destacan en el mercado y conectan con tu audiencia.',
      image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80',
      services: [
        'Estrategia de Marca',
        'Diseño de Logo e Identidad',
        'Manual de Identidad Corporativa',
        'Naming y Arquitectura de Marca',
        'Packaging y Etiquetado',
        'Señalética y Aplicaciones',
        'Rebranding y Renovación',
        'Brand Guidelines'
      ],
      benefits: [
        'Incremento en valor percibido del 180%',
        'Diferenciación competitiva clara',
        'Lealtad de marca mejorada',
        'Coherencia en todos los puntos de contacto'
      ],
      process: [
        'Investigación y análisis de mercado',
        'Definición de personalidad de marca',
        'Desarrollo de identidad visual',
        'Implementación y monitoreo'
      ],
      pricing: 'Desde $25,000 MXN'
    },
    events: {
      icon: FiCalendar,
      title: 'Organización de Eventos',
      subtitle: 'Eventos que dejan huella',
      description: 'Creamos experiencias únicas que fortalecen relaciones comerciales y posicionan tu marca en el mercado.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      services: [
        'Eventos Corporativos',
        'Lanzamientos de Producto',
        'Conferencias y Seminarios',
        'Ferias y Exposiciones',
        'Convenciones de Ventas',
        'Inauguraciones',
        'Aniversarios Corporativos',
        'Team Building'
      ],
      benefits: [
        'Fortalecimiento de relaciones B2B',
        'Posicionamiento como líder de mercado',
        'Generación de leads calificados',
        'Cobertura mediática garantizada'
      ],
      process: [
        'Conceptualización y planificación',
        'Gestión logística integral',
        'Coordinación de proveedores',
        'Ejecución y seguimiento post-evento'
      ],
      pricing: 'Desde $20,000 MXN'
    }
  }

  const currentService = services[activeService]
  const Icon = currentService.icon

  const additionalServices = [
    {
      title: 'Consultoría Estratégica',
      description: 'Análisis profundo y recomendaciones para optimizar tu estrategia de marketing.',
      icon: FiTarget
    },
    {
      title: 'Producción Audiovisual',
      description: 'Videos corporativos, fotografía profesional y contenido multimedia de alta calidad.',
      icon: FiPlay
    },
    {
      title: 'Capacitación Empresarial',
      description: 'Talleres y entrenamientos para potenciar las habilidades de marketing de tu equipo.',
      icon: FiUsers
    }
  ]

  return (
    <>
      <Helmet>
        <title>Servicios de Marketing - Draft Marketing Chiapas | Digital, BTL, Branding</title>
        <meta 
          name="description" 
          content="Servicios completos de marketing: digital, BTL, branding y eventos en Chiapas. Estrategias personalizadas que generan resultados medibles para tu empresa." 
        />
        <meta 
          name="keywords" 
          content="servicios marketing digital, campañas btl, branding chiapas, eventos corporativos, seo chiapas, redes sociales" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FiStar className="w-4 h-4" />
              <span>Servicios Profesionales</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Soluciones completas de
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                marketing integral
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Transformamos tu visión en resultados con estrategias personalizadas que 
              se adaptan a las necesidades únicas de tu empresa y mercado objetivo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">4</div>
                <div className="text-sm text-gray-400">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Soporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">98%</div>
                <div className="text-sm text-gray-400">Éxito</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-1">ROI</div>
                <div className="text-sm text-gray-400">Garantizado</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(services).map(([key, service]) => {
              const ServiceIcon = service.icon
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveService(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    activeService === key
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <ServiceIcon className={`w-8 h-8 mx-auto mb-3 ${
                    activeService === key ? 'text-white' : 'text-primary-600'
                  }`} />
                  <div className={`font-semibold text-sm text-center ${
                    activeService === key ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-3xl text-gray-900">
                        {currentService.title}
                      </h2>
                      <p className="text-primary-600 font-semibold">
                        {currentService.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Servicios incluidos:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {currentService.services.map((service, index) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Beneficios clave:</h3>
                    <ul className="space-y-2">
                      {currentService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <FiTrendingUp className="w-4 h-4 text-primary-600" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Inversión desde:</div>
                      <div className="text-2xl font-bold text-primary-600">
                        {currentService.pricing}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Solicitar Cotización</span>
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative">
                  <motion.img
                    key={currentService.image}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Process Steps Overlay */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
                    <h4 className="font-semibold text-gray-900 mb-3">Proceso:</h4>
                    <ol className="space-y-2">
                      {currentService.process.map((step, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <span className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Servicios
              <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                complementarios
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Ampliamos tu estrategia con servicios especializados que potencian 
              el impacto de tus campañas principales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const ServiceIcon = service.icon
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ServiceIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              ¿Listo para potenciar tu marketing?
            </h2>
            
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Cada día que esperas es una oportunidad perdida. Comencemos hoy 
              a construir la estrategia que llevará tu negocio al siguiente nivel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Consulta Gratuita</span>
                <FiArrowRight />
              </Link>
              
              <a
                href="tel:9631326010"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Llamar Ahora</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services