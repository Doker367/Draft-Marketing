import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay, FiTrendingUp } from 'react-icons/fi'

// 3D Floating Elements
function FloatingCube({ position, color, scale = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.1
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  )
}

function Scene() {
  const cubes = useMemo(() => [
    { position: [-2, 1, -1], color: '#0ea5e9', scale: 0.8 },
    { position: [2, -1, -2], color: '#ef4444', scale: 1.2 },
    { position: [1, 2, -1.5], color: '#10b981', scale: 0.6 },
    { position: [-1.5, -0.5, -2], color: '#f59e0b', scale: 0.9 },
  ], [])

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      {cubes.map((cube, index) => (
        <FloatingCube
          key={index}
          position={cube.position}
          color={cube.color}
          scale={cube.scale}
        />
      ))}
    </>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh opacity-10" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <FiTrendingUp className="w-4 h-4" />
              <span>Agencia #1 en Chiapas</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Transformamos
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                ideas en éxito
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
            >
              Somos la agencia de marketing integral que tu negocio necesita. 
              Con más de 8 años de experiencia, hemos ayudado a empresas chiapanecas 
              a crecer y posicionarse como líderes en sus mercados.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mb-10"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-400 mb-1">150+</div>
                <div className="text-sm text-gray-400">Proyectos Exitosos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent-400 mb-1">8</div>
                <div className="text-sm text-gray-400">Años de Experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-400 mb-1">98%</div>
                <div className="text-sm text-gray-400">Clientes Satisfechos</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
              >
                <span>Consulta Gratuita</span>
                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 group">
                <FiPlay className="w-5 h-5" />
                <span>Ver Nuestro Trabajo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image/Graphic */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full max-w-lg mx-auto"
              >
                <div className="relative">
                  {/* Central Circle */}
                  <div className="w-80 h-80 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center mx-auto">
                    <div className="w-64 h-64 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">D</span>
                    </div>
                  </div>
                  
                  {/* Floating Service Cards */}
                  {[
                    { text: 'Marketing Digital', position: 'top-0 left-0', delay: 0 },
                    { text: 'BTL Campaigns', position: 'top-0 right-0', delay: 0.2 },
                    { text: 'Branding', position: 'bottom-0 left-0', delay: 0.4 },
                    { text: 'Eventos', position: 'bottom-0 right-0', delay: 0.6 }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: service.delay + 0.8 }}
                      className={`absolute ${service.position} w-32 h-20 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center`}
                    >
                      <span className="text-xs font-semibold text-center">
                        {service.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection