import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiUser,
  FiHome,
  FiMessageSquare,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const services = [
    'Marketing Digital',
    'Campañas BTL',
    'Branding e Identidad',
    'Organización de Eventos',
    'Diseño Gráfico',
    'Consultoría Estratégica',
    'Fotografía y Video',
    'Gestión de Redes Sociales'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the form data to your API
      console.log('Form data:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Teléfono',
      info: '963 132 6010',
      description: 'Lun - Vie: 9:00 AM - 6:00 PM',
      action: 'tel:9631326010'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'Draft.mkt@Hotmail.com',
      description: 'Respuesta en 24 horas',
      action: 'mailto:Draft.mkt@Hotmail.com'
    },
    {
      icon: FiMapPin,
      title: 'Ubicación',
      info: 'Comitán de Domínguez, Chiapas',
      description: 'México 30000',
      action: 'https://maps.google.com/?q=Comitán+de+Domínguez+Chiapas'
    },
    {
      icon: FiClock,
      title: 'Horarios',
      info: 'Lunes - Viernes',
      description: '9:00 AM - 6:00 PM',
      action: null
    }
  ]

  const faqs = [
    {
      question: '¿Qué servicios de marketing ofrecen?',
      answer: 'Ofrecemos servicios completos de marketing digital, campañas BTL, branding, organización de eventos, diseño gráfico y consultoría estratégica.'
    },
    {
      question: '¿Trabajan con empresas de todo México?',
      answer: 'Sí, aunque estamos ubicados en Chiapas, trabajamos con clientes de todo México y también tenemos experiencia en proyectos internacionales.'
    },
    {
      question: '¿Cuánto tiempo toma desarrollar una campaña?',
      answer: 'Depende del alcance del proyecto. Una campaña digital puede tomar 2-4 semanas, mientras que proyectos de branding pueden requerir 1-3 meses.'
    },
    {
      question: '¿Ofrecen consultas gratuitas?',
      answer: 'Sí, ofrecemos una consulta inicial gratuita para entender sus necesidades y proponer la mejor estrategia para su negocio.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contacto - Draft Marketing Chiapas | Consulta Gratuita</title>
        <meta 
          name="description" 
          content="Contacta a Draft Marketing en Comitán, Chiapas. Teléfono: 963 132 6010. Email: Draft.mkt@Hotmail.com. Consulta gratuita para tu proyecto de marketing." 
        />
        <meta 
          name="keywords" 
          content="contacto draft marketing, marketing chiapas, comitan dominguez, consulta marketing, agencia publicidad chiapas" 
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
              <FiMessageSquare className="w-4 h-4" />
              <span>Estamos aquí para ayudarte</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Hablemos sobre tu
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                próximo proyecto
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Estamos listos para impulsar tu negocio al siguiente nivel. 
              Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9631326010"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <FiPhone className="w-5 h-5" />
                <span>Llamar Ahora</span>
              </a>
              
              <a
                href="mailto:Draft.mkt@Hotmail.com"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <FiMail className="w-5 h-5" />
                <span>Enviar Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors block mb-1"
                    >
                      {info.info}
                    </a>
                  ) : (
                    <div className="text-primary-600 font-medium mb-1">{info.info}</div>
                  )}
                  
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="max-w-lg">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  Solicita tu consulta gratuita
                </h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Cuéntanos sobre tu proyecto y te responderemos con una propuesta personalizada 
                  en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <div className="relative">
                        <FiHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Tu teléfono"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-4 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <FiCheckCircle className="w-5 h-5" />
                      ) : (
                        <FiAlertCircle className="w-5 h-5" />
                      )}
                      <span>
                        {submitStatus === 'success' 
                          ? 'Mensaje enviado exitosamente. Te contactaremos pronto.' 
                          : 'Hubo un error al enviar el mensaje. Intenta nuevamente.'}
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120636.73616929424!2d-92.13707890429688!3d16.24915199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8a5b0b4a7f7%3A0x8b7a5b65b4d7c4e6!2sComit%C3%A1n%20de%20Dom%C3%ADnguez%2C%20Chis.!5e0!3m2!1ses!2smx!4v1703261234567!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Draft Marketing Chiapas"
                />
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Síguenos en redes sociales</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { platform: 'Facebook', icon: FiFacebook, followers: '2.5K', url: '#' },
                    { platform: 'Instagram', icon: FiInstagram, followers: '1.8K', url: '#' },
                    { platform: 'LinkedIn', icon: FiLinkedin, followers: '500+', url: '#' },
                    { platform: 'Twitter', icon: FiTwitter, followers: '1.2K', url: '#' }
                  ].map((social) => {
                    const Icon = social.icon
                    
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{social.platform}</div>
                          <div className="text-gray-600 text-xs">{social.followers} seguidores</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <FiClock className="w-5 h-5" />
                  <span>Horarios de Atención</span>
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunes - Viernes</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábados</span>
                    <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingos</span>
                    <span className="font-medium text-gray-900">Cerrado</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-accent-100 rounded-lg">
                  <p className="text-accent-700 text-sm">
                    💡 <strong>Tip:</strong> Para consultas urgentes fuera del horario, 
                    puedes escribirnos por WhatsApp al 963 132 6010
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 text-lg">
              Aquí tienes respuestas a las dudas más comunes de nuestros clientes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact