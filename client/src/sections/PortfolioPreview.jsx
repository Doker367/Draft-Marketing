import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiEye, FiTrendingUp } from 'react-icons/fi'

const PortfolioPreview = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Campaña "Chiapas Sabor Auténtico"',
      client: 'Gobierno del Estado de Chiapas',
      category: 'BTL',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      result: '+300% reconocimiento de marca',
      description: 'Activación masiva para promover productos gastronómicos chiapanecos'
    },
    {
      id: 2,
      title: 'Lanzamiento Digital "EcoVerde Chiapas"',
      client: 'EcoVerde',
      category: 'Digital',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      result: '+250% ventas online',
      description: 'Estrategia digital completa para productos orgánicos sustentables'
    },
    {
      id: 3,
      title: 'Branding "Café de los Altos"',
      client: 'Cooperativa Cafetalera',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
      result: '+180% valor percibido',
      description: 'Renovación de identidad visual para café de especialidad'
    }
  ]

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-large transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold">
          {project.category}
        </div>
        
        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold flex items-center space-x-2">
            <FiEye className="w-4 h-4" />
            <span>Ver Proyecto</span>
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">{project.client}</p>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>
        
        {/* Result */}
        <div className="flex items-center space-x-2 text-green-600">
          <FiTrendingUp className="w-4 h-4" />
          <span className="font-semibold text-sm">{project.result}</span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FiTrendingUp className="w-4 h-4" />
            <span>Casos de Éxito</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Proyectos que
            <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              generan resultados
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubre cómo hemos ayudado a empresas chiapanecas a alcanzar 
            sus objetivos y superar las expectativas de crecimiento.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-soft mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">98%</div>
              <div className="text-gray-600">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">+450%</div>
              <div className="text-gray-600">Crecimiento Promedio</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>Ver Portafolio Completo</span>
            <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview