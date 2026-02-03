import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay, FiTrendingUp } from 'react-icons/fi'
import { RevealText, FadeInText, GradientText } from '../components/AnimatedText'

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
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh opacity-10" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)],
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
      <motion.div 
        className="container relative z-10 px-4 sm:px-6"
        style={{ y, scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <FadeInText delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <FiTrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Agencia #1 en Chiapas</span>
              </div>
            </FadeInText>

            {/* Headline with reveal animation */}
            <RevealText 
              className="font-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 sm:mb-6"
              delay={0.3}
            >
              Transformamos ideas en
            </RevealText>
            
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 sm:mb-6"
            >
              <GradientText>éxito digital</GradientText>
            </motion.div>

            {/* Description */}
            <FadeInText delay={0.8}>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Somos la agencia de marketing integral que tu negocio necesita. 
                Con más de 8 años de experiencia, hemos ayudado a empresas chiapanecas 
                a crecer y posicionarse como líderes.
              </p>
            </FadeInText>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-10"
            >
              {[
                { value: '150+', label: 'Proyectos', color: 'primary' },
                { value: '8', label: 'Años', color: 'accent' },
                { value: '98%', label: 'Satisfacción', color: 'primary' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <motion.div 
                    className={`text-2xl sm:text-3xl font-bold text-${stat.color}-400 mb-1`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Consulta Gratuita</span>
                  <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto"
              >
                <FiPlay className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">Ver Nuestro Trabajo</span>
                <span className="xs:hidden">Ver Trabajo</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
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
                  <div className="w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center mx-auto">
                    <div className="w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-4xl sm:text-6xl font-bold text-white">D</span>
                    </div>
                  </div>
                  
                  {/* Floating Service Cards */}
                  {[
                    { text: 'Marketing Digital', position: 'top-0 left-0', delay: 0 },
                    { text: 'BTL', position: 'top-0 right-0', delay: 0.2 },
                    { text: 'Branding', position: 'bottom-0 left-0', delay: 0.4 },
                    { text: 'Eventos', position: 'bottom-0 right-0', delay: 0.6 }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: service.delay + 0.8 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute ${service.position} w-24 sm:w-32 h-16 sm:h-20 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all`}
                    >
                      <span className="text-xs font-semibold text-center px-2">
                        {service.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
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
    </motion.section>
  )
}

export default HeroSection