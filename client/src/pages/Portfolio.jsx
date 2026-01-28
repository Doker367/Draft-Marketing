import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiFilter, 
  FiEye, 
  FiExternalLink, 
  FiTrendingUp, 
  FiCalendar, 
  FiUser,
  FiAward,
  FiArrowRight
} from 'react-icons/fi'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'Todos los Proyectos', count: 6 },
    { id: 'btl', name: 'Campañas BTL', count: 2 },
    { id: 'digital', name: 'Marketing Digital', count: 2 },
    { id: 'branding', name: 'Branding', count: 2 },
    { id: 'events', name: 'Eventos', count: 1 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Campaña "Chiapas Sabor Auténtico"',
      client: 'Gobierno del Estado de Chiapas',
      category: 'btl',
      year: 2023,
      description: 'Activación masiva para promover los productos gastronómicos chiapanecos en 15 municipios.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      results: ['+300% en reconocimiento de marca', '50,000+ personas impactadas', '15 municipios'],
      tags: ['BTL', 'Gobierno', 'Gastronomía'],
      featured: true
    },
    {
      id: 2,
      title: 'Lanzamiento Digital "EcoVerde Chiapas"',
      client: 'EcoVerde',
      category: 'digital',
      year: 2023,
      description: 'Estrategia digital completa para empresa de productos orgánicos con enfoque sustentable.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      results: ['+250% en ventas online', '15,000 seguidores', '+400% tráfico web'],
      tags: ['Digital', 'Sustentabilidad', 'E-commerce'],
      featured: true
    },
    {
      id: 3,
      title: 'Branding "Café de los Altos"',
      client: 'Cooperativa Cafetalera',
      category: 'branding',
      year: 2022,
      description: 'Renovación completa de identidad visual para cooperativa de café de especialidad.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
      results: ['+180% valor percibido', 'Mercados premium', '+120% precio venta'],
      tags: ['Branding', 'Café', 'Premium'],
      featured: true
    },
    {
      id: 4,
      title: 'Festival del Ámbar',
      client: 'Ayuntamiento de Simojovel',
      category: 'events',
      year: 2023,
      description: 'Organización y promoción del primer Festival del Ámbar de Chiapas.',
      image: 'https://images.unsplash.com/photo-1578894381295-01ff98ac26a9?auto=format&fit=crop&w=600&q=80',
      results: ['8,000+ visitantes', '15 medios nacionales', '+300% ventas artesanos'],
      tags: ['Evento', 'Turismo', 'Cultural'],
      featured: false
    },
    {
      id: 5,
      title: 'Universidad del Sur - Captación',
      client: 'Universidad del Sur',
      category: 'digital',
      year: 2023,
      description: 'Estrategia digital para incrementar matrícula universitaria.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=600&q=80',
      results: ['+45% inscripciones', '12,000 leads', 'ROI 4:1'],
      tags: ['Educación', 'Digital', 'Leads'],
      featured: false
    },
    {
      id: 6,
      title: 'Textiles Chiapaneca - Rebranding',
      client: 'Grupo Textil Chiapaneca',
      category: 'branding',
      year: 2022,
      description: 'Rebranding para empresa textil enfocada en mercados internacionales.',
      image: 'https://images.unsplash.com/photo-1583195764036-6dc88757541e?auto=format&fit=crop&w=600&q=80',
      results: ['8 países nuevos', '+150% valor marca', 'Ferias internacionales'],
      tags: ['Textil', 'Internacional', 'Exportación'],
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Destacado
          </div>
        )}

        {/* Year */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
          {project.year}
        </div>

        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <FiEye className="w-4 h-4" />
            <span>Ver Proyecto</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <FiUser className="w-4 h-4" />
          <span>{project.client}</span>
        </div>

        <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Results */}
        <div className="space-y-2 mb-4">
          {project.results.slice(0, 2).map((result, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-sm">
              <FiTrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">{result}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Learn More */}
        <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-2 group">
          <span>Ver detalles completos</span>
          <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  )

  return (
    <>
      <Helmet>
        <title>Portafolio de Proyectos - Draft Marketing Chiapas</title>
        <meta 
          name="description" 
          content="Descubre nuestros casos de éxito en marketing: campañas BTL, branding, marketing digital y activaciones en Chiapas. Proyectos reales con resultados medibles." 
        />
        <meta 
          name="keywords" 
          content="portafolio marketing chiapas, casos exito, campañas btl, branding chiapas, marketing digital" 
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
              <FiAward className="w-4 h-4" />
              <span>Casos de Éxito</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Proyectos que
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                transforman negocios
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Descubre cómo hemos ayudado a empresas chiapanecas a alcanzar sus objetivos 
              y posicionarse como líderes en sus respectivos mercados.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">150+</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-1">98%</div>
                <div className="text-sm text-gray-400">Éxito</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-1">8</div>
                <div className="text-sm text-gray-400">Años</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <FiFilter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filtrar por categoría:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No se encontraron proyectos en esta categoría.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Section */}
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
              Resultados que hablan por nosotros
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estos son algunos de los impactos medibles que hemos generado para nuestros clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '+450%', label: 'Incremento promedio en ventas', icon: FiTrendingUp },
              { metric: '98%', label: 'Tasa de satisfacción', icon: FiAward },
              { metric: '24h', label: 'Tiempo de respuesta promedio', icon: FiCalendar },
              { metric: '150+', label: 'Proyectos completados exitosamente', icon: FiUser }
            ].map((stat, index) => {
              const Icon = stat.icon
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.metric}
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {stat.label}
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
              ¿Listo para ser nuestro próximo caso de éxito?
            </h2>
            
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Cada proyecto que realizamos está diseñado para superar expectativas. 
              Tu empresa podría ser nuestro próximo caso de estudio destacado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2">
                <span>Solicitar Consulta Gratuita</span>
                <FiArrowRight />
              </button>
              
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <span>Ver Más Proyectos</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {selectedProject.client}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Resultados obtenidos:</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <FiTrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio