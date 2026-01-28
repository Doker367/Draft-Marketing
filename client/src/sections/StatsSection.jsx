import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiTrendingUp, FiAward, FiMapPin } from 'react-icons/fi'

// Counter Hook
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, shouldStart])

  return count
}

const StatCard = ({ icon: Icon, number, suffix, label, delay, color }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useCounter(number, 2000, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      
      <p className="text-gray-600 font-medium">
        {label}
      </p>
    </motion.div>
  )
}

const StatsSection = () => {
  const stats = [
    {
      icon: FiUsers,
      number: 150,
      suffix: '+',
      label: 'Proyectos Completados',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: FiTrendingUp,
      number: 450,
      suffix: '%',
      label: 'Crecimiento Promedio',
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: FiAward,
      number: 98,
      suffix: '%',
      label: 'Satisfacción del Cliente',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: FiMapPin,
      number: 8,
      suffix: '',
      label: 'Años en el Mercado',
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Resultados que
            <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              hablan por nosotros
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Más de 8 años ayudando a empresas chiapanecas a alcanzar sus metas 
            y superar las expectativas de crecimiento.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-gray-700 italic mb-8">
              "Draft Marketing transformó completamente nuestra presencia digital. 
              En solo 6 meses aumentamos nuestras ventas en un 300% y nos posicionamos 
              como líderes en nuestro sector."
            </p>
            <footer className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">María Elena González</div>
                <div className="text-gray-600">CEO, Café de los Altos</div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection