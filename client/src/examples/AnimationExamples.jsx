// Ejemplo: Cómo integrar AnimatedText en diferentes secciones

import { 
  RevealText, 
  FadeInText, 
  SlideUpText, 
  GradientText,
  ParallaxText 
} from '../components/AnimatedText'

// ==========================================
// 1. EJEMPLO: AboutPreview
// ==========================================
export const AboutPreviewExample = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        {/* Badge */}
        <FadeInText delay={0.1}>
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Sobre Nosotros
          </div>
        </FadeInText>

        {/* Título principal */}
        <RevealText className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Agencia líder en marketing en Chiapas
        </RevealText>

        {/* Descripción */}
        <FadeInText delay={0.3}>
          <p className="text-xl text-gray-600 mb-8">
            Con más de 8 años de experiencia, hemos ayudado a cientos de empresas...
          </p>
        </FadeInText>

        {/* Lista de beneficios */}
        <div className="grid md:grid-cols-3 gap-6">
          {['Experiencia', 'Innovación', 'Resultados'].map((item, idx) => (
            <SlideUpText key={idx} delay={0.4 + idx * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-2">{item}</h3>
                <p className="text-gray-600">Descripción...</p>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 2. EJEMPLO: ContactCTA
// ==========================================
export const ContactCTAExample = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="container px-4 text-center text-white">
        {/* Título grande */}
        <RevealText className="text-5xl md:text-6xl font-bold mb-6">
          ¿Listo para crecer?
        </RevealText>

        {/* Subtítulo con gradiente */}
        <FadeInText delay={0.3}>
          <h3 className="text-2xl mb-8">
            <GradientText>
              Comienza tu transformación digital hoy
            </GradientText>
          </h3>
        </FadeInText>

        {/* Botones */}
        <FadeInText delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold">
              Consulta Gratis
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold">
              Ver Casos de Éxito
            </button>
          </div>
        </FadeInText>
      </div>
    </section>
  )
}

// ==========================================
// 3. EJEMPLO: StatsSection
// ==========================================
export const StatsExample = () => {
  const stats = [
    { value: '150+', label: 'Proyectos Completados' },
    { value: '98%', label: 'Clientes Satisfechos' },
    { value: '8', label: 'Años de Experiencia' },
    { value: '50+', label: 'Marcas Impulsadas' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <RevealText className="text-4xl font-bold text-center mb-12">
          Números que hablan por nosotros
        </RevealText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <SlideUpText key={idx} delay={0.2 + idx * 0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 4. EJEMPLO: PortfolioPreview con Parallax
// ==========================================
export const PortfolioExample = () => {
  const projects = [
    { title: 'Proyecto 1', category: 'Branding', image: '/img1.jpg' },
    { title: 'Proyecto 2', category: 'Digital', image: '/img2.jpg' },
    { title: 'Proyecto 3', category: 'BTL', image: '/img3.jpg' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        {/* Título con parallax */}
        <ParallaxText speed={0.3} className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            <GradientText>Nuestro Portafolio</GradientText>
          </h2>
        </ParallaxText>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <SlideUpText key={idx} delay={0.2 + idx * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-64 bg-gray-200">
                  {/* Imagen aquí */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 5. EJEMPLO: Testimonials
// ==========================================
export const TestimonialsExample = () => {
  const testimonials = [
    {
      name: 'Juan Pérez',
      company: 'Empresa ABC',
      text: 'Excelente servicio, resultados increíbles...',
      avatar: '/avatar1.jpg'
    },
    // ... más testimonios
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <RevealText className="text-4xl font-bold text-center mb-4">
          Lo que dicen nuestros clientes
        </RevealText>

        <FadeInText delay={0.3}>
          <p className="text-xl text-center text-gray-600 mb-12">
            Testimonios reales de empresas que confiaron en nosotros
          </p>
        </FadeInText>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <SlideUpText key={idx} delay={0.2 + idx * 0.1}>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 6. EJEMPLO: Pricing Section
// ==========================================
export const PricingExample = () => {
  const plans = [
    { name: 'Básico', price: '$499', features: ['Feature 1', 'Feature 2'] },
    { name: 'Pro', price: '$999', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Premium', price: '$1,499', features: ['Todo incluido'] }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <RevealText className="text-5xl font-bold text-center mb-4">
          Planes y Precios
        </RevealText>

        <FadeInText delay={0.3}>
          <p className="text-xl text-center text-gray-600 mb-12">
            Elige el plan perfecto para tu negocio
          </p>
        </FadeInText>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <SlideUpText key={idx} delay={0.2 + idx * 0.1}>
              <div className={`bg-white p-8 rounded-2xl shadow-lg ${
                idx === 1 ? 'ring-4 ring-primary-600 scale-105' : ''
              }`}>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700">
                  Elegir Plan
                </button>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 7. EJEMPLO: FAQ Section
// ==========================================
export const FAQExample = () => {
  const faqs = [
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Los resultados comienzan a verse desde las primeras semanas...'
    },
    // ... más FAQs
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 max-w-4xl mx-auto">
        <RevealText className="text-4xl font-bold text-center mb-12">
          Preguntas Frecuentes
        </RevealText>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <SlideUpText key={idx} delay={0.1 + idx * 0.05}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 8. EJEMPLO: Timeline Section
// ==========================================
export const TimelineExample = () => {
  const steps = [
    { title: 'Consulta Inicial', description: 'Analizamos tus necesidades' },
    { title: 'Estrategia', description: 'Creamos un plan personalizado' },
    { title: 'Implementación', description: 'Ejecutamos la estrategia' },
    { title: 'Resultados', description: 'Medimos y optimizamos' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <RevealText className="text-4xl font-bold text-center mb-12">
          Nuestro Proceso
        </RevealText>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <SlideUpText key={idx} delay={0.2 + idx * 0.1}>
              <div className="flex gap-6 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 9. EJEMPLO: Team Section
// ==========================================
export const TeamExample = () => {
  const team = [
    { name: 'Ana García', role: 'CEO', image: '/team1.jpg' },
    { name: 'Carlos López', role: 'Director Creativo', image: '/team2.jpg' },
    { name: 'María Ruiz', role: 'Marketing Manager', image: '/team3.jpg' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <RevealText className="text-4xl font-bold text-center mb-4">
          Nuestro Equipo
        </RevealText>

        <FadeInText delay={0.3}>
          <p className="text-xl text-center text-gray-600 mb-12">
            Profesionales apasionados por el marketing
          </p>
        </FadeInText>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <SlideUpText key={idx} delay={0.2 + idx * 0.1}>
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </SlideUpText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 10. EJEMPLO: Combinación Compleja
// ==========================================
export const ComplexExample = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-900 to-accent-900 text-white">
      <div className="container px-4">
        {/* Badge animado */}
        <FadeInText delay={0.1}>
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            🚀 Nuevo Servicio
          </div>
        </FadeInText>

        {/* Título revelado */}
        <RevealText className="text-6xl md:text-7xl font-bold mb-6">
          Transformamos ideas en realidad digital
        </RevealText>

        {/* Subtítulo con gradiente */}
        <FadeInText delay={0.4}>
          <h2 className="text-3xl mb-8">
            <GradientText>
              El futuro del marketing está aquí
            </GradientText>
          </h2>
        </FadeInText>

        {/* Lista de beneficios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {['Innovación', 'Resultados', 'Soporte 24/7'].map((benefit, idx) => (
            <SlideUpText key={idx} delay={0.6 + idx * 0.1}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">{benefit}</h3>
                <p className="text-white/80">Descripción del beneficio</p>
              </div>
            </SlideUpText>
          ))}
        </div>

        {/* CTA */}
        <FadeInText delay={1}>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all">
            Comenzar Ahora
          </button>
        </FadeInText>
      </div>
    </section>
  )
}

// ==========================================
// TIPS DE USO
// ==========================================

/*
1. DELAYS ESCALONADOS
   - Usa delays incrementales para crear secuencias
   - Ejemplo: 0, 0.1, 0.2, 0.3...

2. COMBINACIONES EFECTIVAS
   - RevealText para títulos principales
   - FadeInText para contenido general
   - SlideUpText para listas y grids
   - GradientText para palabras clave

3. PERFORMANCE
   - No animes más de 10 elementos simultáneamente
   - Usa 'once: true' (ya está por defecto)
   - Agrupa animaciones relacionadas

4. RESPONSIVE
   - Las animaciones funcionan en todos los dispositivos
   - Considera reducir delays en móviles si es necesario

5. ACCESIBILIDAD
   - Los usuarios pueden desactivar animaciones en su OS
   - Framer Motion respeta prefers-reduced-motion
*/
