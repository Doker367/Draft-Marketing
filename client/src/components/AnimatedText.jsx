import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// Texto con efecto de aparición en scroll
export const FadeInText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)' 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Texto con efecto parallax
export const ParallaxText = ({ children, className = '', speed = 0.5 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Texto que se desenfoca al hacer scroll (estilo Apple)
export const BlurText = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  })
  
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 10])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.9])

  return (
    <motion.div
      ref={ref}
      style={{ 
        filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none',
        opacity,
        scale
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Texto revelado por palabras
export const RevealText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const words = children.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Texto con gradiente animado
export const GradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center']
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }}
    >
      {children}
    </motion.span>
  )
}

// Texto con efecto de escalado al hacer scroll
export const ScaleText = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Texto con efecto de slide desde abajo
export const SlideUpText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: [0.25, 0.4, 0.25, 1]
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Texto con efecto de rotación 3D
export const Rotate3DText = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ 
        rotateX,
        opacity,
        transformPerspective: 1000
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Texto con máscara de clip
export const ClipText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.65, 0, 0.35, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Componente principal con todas las opciones
export const AnimatedText = ({ 
  children, 
  className = '', 
  type = 'fade', 
  delay = 0,
  speed = 0.5 
}) => {
  const components = {
    fade: FadeInText,
    parallax: ParallaxText,
    blur: BlurText,
    reveal: RevealText,
    gradient: GradientText,
    scale: ScaleText,
    slideUp: SlideUpText,
    rotate3d: Rotate3DText,
    clip: ClipText
  }

  const Component = components[type] || FadeInText

  return (
    <Component className={className} delay={delay} speed={speed}>
      {children}
    </Component>
  )
}

export default AnimatedText
