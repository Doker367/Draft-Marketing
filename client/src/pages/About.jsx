import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiAward, 
  FiUsers, 
  FiTarget, 
  FiHeart,
  FiTrendingUp,
  FiMapPin,
  FiArrowRight,
  FiStar
} from 'react-icons/fi'

const About = () => {
  const timeline = [
    {
      year: '2016',
      title: 'Fundación',
      description: 'Iniciamos operaciones en Comitán con una visión: transformar el marketing en Chiapas.',
      milestone: 'Primera oficina'
    },
    {
      year: '2018',
      title: 'Expansión Digital',
      description: 'Incorporamos servicios de marketing digital y comenzamos a trabajar con clientes regionales.',
      milestone: '50+ clientes'
    },
    {
      year: '2020',
      title: 'Innovación BTL',
      description: 'Nos especializamos en campañas BTL innovadoras durante la pandemia.',
      milestone: 'Premio regional'
    },
    {
      year: '2022',
      title: 'Reconocimiento',
      description: 'Obtuvimos certificaciones internacionales y expandimos nuestro equipo creativo.',
      milestone: '100+ proyectos'
    },
    {
      year: '2024',
      title: 'Líderes del Mercado',
      description: 'Nos posicionamos como la agencia líder en marketing integral en Chiapas.',
      milestone: '150+ clientes satisfechos'
    }
  ]

  const team = [
    {
      name: 'Carlos Mendoza',
      position: 'Director General & Fundador',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      bio: 'Visionario del marketing chiapaneco con más de 12 años transformando empresas.',
      skills: ['Estrategia', 'Liderazgo', 'BTL']
    },
    {
      name: 'María Elena González',
      position: 'Directora Creativa',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
      bio: 'Especialista en branding e identidad visual con enfoque en mercados locales.',
      skills: ['Branding', 'Creatividad', 'Diseño']
    },
    {
      name: 'Roberto Chávez',
      position: 'Gerente de Marketing Digital',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Experto en estrategias digitales y posicionamiento SEO para PyMEs.',
      skills: ['SEO/SEM', 'Analítica', 'Social Media']
    },
    {
      name: 'Ana Sofía Morales',
      position: 'Coordinadora de Eventos',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      bio: 'Organizadora de eventos corporativos y activaciones BTL innovadoras.',
      skills: ['Eventos', 'Logística', 'Activaciones']
    }
  ]

  const values = [
    {
      icon: FiHeart,
      title: 'Pasión Chiapaneca',
      description: 'Amamos nuestra tierra y trabajamos con orgullo para impulsar el desarrollo empresarial de Chiapas.'
    },
    {
      icon: FiTarget,
      title: 'Resultados Medibles',
      description: 'Nos enfocamos en generar impacto real y medible que se traduzca en crecimiento para tu negocio.'
    },
    {
      icon: FiUsers,
      title: 'Colaboración Auténtica',
      description: 'Trabajamos contigo como socios estratégicos, no solo como proveedores de servicios.'
    },
    {
      icon: FiAward,
      title: 'Excelencia Creativa',
      description: 'Buscamos la excelencia en cada proyecto, combinando creatividad con estrategia efectiva.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Nosotros - Draft Marketing Chiapas | 8 Años Transformando Empresas</title>
        <meta 
          name="description" 
          content="Conoce la historia de Draft Marketing: 8 años liderando el marketing en Chiapas. Equipo experto, valores sólidos y resultados comprobados desde 2016." 
        />
        <meta 
          name="keywords" 
          content="draft marketing historia, agencia marketing chiapas, equipo profesional, valores empresariales, comitan dominguez" 
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
              <FiHeart className="w-4 h-4" />
              <span>Nuestra Historia</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              8 años impulsando
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                el éxito empresarial
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Desde 2016, hemos sido el motor creativo detrás del crecimiento de empresas chiapanecas. 
              Descubre cómo nuestra pasión por el marketing se ha convertido en tu herramienta de éxito.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">8+</div>
                <div className="text-sm text-gray-400">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-1">150+</div>
                <div className="text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">98%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Chiapaneco</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Valores que nos
              <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                definen y guían
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Nuestros valores no son solo palabras en la pared. Son principios que aplicamos 
              en cada proyecto y en cada relación que construimos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Nuestro camino hacia
              <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                la excelencia
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Cada año ha sido una oportunidad para crecer, aprender e innovar en beneficio 
              de nuestros clientes y la comunidad empresarial chiapaneca.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-500 rounded-full hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  {/* Year Badge */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mb-4 md:mb-0 flex-shrink-0">
                    <span className="font-bold text-white text-lg">{item.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-2xl p-8 shadow-lg flex-1 max-w-lg ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.milestone}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              El equipo detrás de
              <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                cada éxito
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Conoce a los profesionales apasionados que hacen posible que tu empresa 
              alcance nuevas alturas en el competitivo mundo del marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                    <FiStar className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
              ¿Listo para ser parte de nuestros casos de éxito?
            </h2>
            
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Trabajemos juntos para escribir el próximo capítulo de éxito de tu empresa. 
              Con 8 años de experiencia, sabemos cómo hacer que tu negocio destaque.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Hablemos de tu Proyecto</span>
                <FiArrowRight />
              </Link>
              
              <Link
                to="/portfolio"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Ver Nuestro Trabajo</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About