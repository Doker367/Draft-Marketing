import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../sections/HeroSection'
import ServicesPreview from '../sections/ServicesPreview'
import StatsSection from '../sections/StatsSection'
import AboutPreview from '../sections/AboutPreview'
import PortfolioPreview from '../sections/PortfolioPreview'
import ContactCTA from '../sections/ContactCTA'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Draft Marketing - Agencia de Marketing Digital en Chiapas</title>
        <meta 
          name="description" 
          content="Agencia de marketing digital, BTL, branding y eventos en Comitán de Domínguez, Chiapas. Transformamos ideas en estrategias exitosas para tu negocio." 
        />
        <meta 
          name="keywords" 
          content="marketing digital chiapas, agencia publicidad, BTL, branding, eventos, comitan dominguez" 
        />
        <meta property="og:title" content="Draft Marketing - Agencia de Marketing Digital en Chiapas" />
        <meta property="og:description" content="Servicios profesionales de marketing digital, campañas BTL, branding y organización de eventos en Chiapas." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
      </Helmet>

      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <AboutPreview />
      <PortfolioPreview />
      <ContactCTA />
    </>
  )
}

export default Home