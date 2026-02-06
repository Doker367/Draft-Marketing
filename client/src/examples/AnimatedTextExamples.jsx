import React from 'react'
import { 
  FadeInText, 
  ParallaxText, 
  BlurText, 
  RevealText, 
  GradientText,
  ScaleText,
  SlideUpText,
  Rotate3DText,
  ClipText,
  AnimatedText 
} from '../components/AnimatedText'

/**
 * Ejemplos de uso de los componentes de texto animado tipo Apple
 * Úsalos en cualquier página o sección de tu aplicación
 */

const AnimatedTextExamples = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        
        {/* Ejemplo 1: Fade In Text */}
        <section className="mb-32">
          <FadeInText>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Título con Fade In
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-xl text-gray-600">
              Este texto aparece con un efecto de desenfoque y deslizamiento
            </p>
          </FadeInText>
        </section>

        {/* Ejemplo 2: Reveal Text (palabra por palabra) */}
        <section className="mb-32">
          <RevealText className="text-5xl font-bold text-gray-900 mb-6">
            Este texto se revela palabra por palabra con efecto de desenfoque
          </RevealText>
        </section>

        {/* Ejemplo 3: Gradient Text Animado */}
        <section className="mb-32">
          <h2 className="text-6xl font-bold mb-6">
            <GradientText>
              Texto con Gradiente Animado
            </GradientText>
          </h2>
        </section>

        {/* Ejemplo 4: Parallax Text */}
        <section className="mb-32 min-h-screen flex items-center justify-center">
          <ParallaxText speed={0.5}>
            <h2 className="text-7xl font-bold text-gray-900">
              Texto Parallax
            </h2>
          </ParallaxText>
        </section>

        {/* Ejemplo 5: Blur Text (se desenfoca al hacer scroll) */}
        <section className="mb-32 min-h-screen flex items-center justify-center">
          <BlurText>
            <h2 className="text-6xl font-bold text-gray-900">
              Este texto se desenfoca al hacer scroll
            </h2>
          </BlurText>
        </section>

        {/* Ejemplo 6: Scale Text */}
        <section className="mb-32 min-h-screen flex items-center justify-center">
          <ScaleText>
            <h2 className="text-6xl font-bold text-gray-900">
              Texto con Scale en Scroll
            </h2>
          </ScaleText>
        </section>

        {/* Ejemplo 7: Slide Up Text */}
        <section className="mb-32">
          <SlideUpText>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Título que sube desde abajo
            </h2>
          </SlideUpText>
          <SlideUpText delay={0.2}>
            <p className="text-xl text-gray-600">
              Perfecto para presentaciones secuenciales
            </p>
          </SlideUpText>
        </section>

        {/* Ejemplo 8: Rotate 3D Text */}
        <section className="mb-32 min-h-screen flex items-center justify-center">
          <Rotate3DText>
            <h2 className="text-6xl font-bold text-gray-900">
              Rotación 3D en Scroll
            </h2>
          </Rotate3DText>
        </section>

        {/* Ejemplo 9: Clip Text */}
        <section className="mb-32">
          <ClipText>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Texto revelado con máscara
            </h2>
          </ClipText>
          <ClipText delay={0.3}>
            <p className="text-xl text-gray-600">
              Efecto de cortina que revela el contenido
            </p>
          </ClipText>
        </section>

        {/* Ejemplo 10: Uso con AnimatedText (componente universal) */}
        <section className="mb-32 space-y-12">
          <AnimatedText type="fade" delay={0}>
            <h3 className="text-3xl font-bold">Fade In</h3>
          </AnimatedText>
          
          <AnimatedText type="reveal" delay={0.2}>
            <h3 className="text-3xl font-bold">Reveal por palabras</h3>
          </AnimatedText>
          
          <AnimatedText type="slideUp" delay={0.4}>
            <h3 className="text-3xl font-bold">Slide Up</h3>
          </AnimatedText>

          <AnimatedText type="gradient">
            <h3 className="text-4xl font-bold">Gradiente Animado</h3>
          </AnimatedText>
        </section>

        {/* Ejemplo de uso práctico en una sección de servicios */}
        <section className="bg-white rounded-3xl p-12 mb-32">
          <RevealText className="text-4xl font-bold text-gray-900 text-center mb-4">
            Nuestros Servicios
          </RevealText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 text-center mb-12">
              Soluciones integrales de marketing digital
            </p>
          </FadeInText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Marketing Digital', 'Branding', 'Estrategia BTL'].map((service, idx) => (
              <SlideUpText key={idx} delay={0.5 + idx * 0.1}>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{service}</h4>
                  <p className="text-gray-600">
                    Descripción del servicio y sus beneficios principales
                  </p>
                </div>
              </SlideUpText>
            ))}
          </div>
        </section>

        {/* Combinación de efectos */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <FadeInText>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Bienvenido a
              </p>
            </FadeInText>
            
            <RevealText className="text-7xl font-bold mb-6">
              Draft Marketing
            </RevealText>
            
            <SlideUpText delay={0.5}>
              <h3 className="text-3xl mb-8">
                <GradientText>Tu éxito es nuestra misión</GradientText>
              </h3>
            </SlideUpText>

            <FadeInText delay={0.8}>
              <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                Comenzar Ahora
              </button>
            </FadeInText>
          </div>
        </section>

      </div>
    </div>
  )
}

export default AnimatedTextExamples
