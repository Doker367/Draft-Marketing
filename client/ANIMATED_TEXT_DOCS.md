# 🎨 Componentes de Texto Animado - Estilo Apple

Componentes de animación de texto tipo Apple para Draft Marketing. Efectos suaves, profesionales y optimizados para dispositivos móviles.

## 📦 Instalación

Los componentes ya están instalados en `src/components/AnimatedText.jsx`

## 🚀 Uso Rápido

```jsx
import { FadeInText, RevealText, GradientText } from '../components/AnimatedText'

function MiComponente() {
  return (
    <div>
      <FadeInText>
        <h1>Mi título con fade in</h1>
      </FadeInText>
      
      <RevealText className="text-4xl font-bold">
        Texto revelado palabra por palabra
      </RevealText>
      
      <GradientText>
        Gradiente animado
      </GradientText>
    </div>
  )
}
```

## 📚 Componentes Disponibles

### 1. FadeInText
Aparece con desenfoque y deslizamiento desde abajo.

```jsx
<FadeInText delay={0.2} className="text-3xl">
  Mi contenido
</FadeInText>
```

**Props:**
- `delay` (number): Retraso en segundos (default: 0)
- `className` (string): Clases CSS adicionales

**Ideal para:** Títulos principales, contenido hero

---

### 2. RevealText
Revela el texto palabra por palabra con efecto blur.

```jsx
<RevealText delay={0.5} className="text-5xl font-bold">
  Este texto se revela palabra por palabra
</RevealText>
```

**Props:**
- `delay` (number): Retraso inicial
- `className` (string): Clases CSS

**Ideal para:** Títulos impactantes, eslóganes

---

### 3. GradientText
Texto con gradiente animado que se mueve continuamente.

```jsx
<GradientText className="text-6xl font-bold">
  Texto con gradiente
</GradientText>
```

**Props:**
- `className` (string): Clases CSS

**Ideal para:** Palabras clave, CTAs destacados

---

### 4. ParallaxText
Efecto parallax que mueve el texto al hacer scroll.

```jsx
<ParallaxText speed={0.5} className="text-7xl">
  Texto Parallax
</ParallaxText>
```

**Props:**
- `speed` (number): Velocidad del efecto (default: 0.5)
- `className` (string): Clases CSS

**Ideal para:** Secciones grandes, backgrounds

---

### 5. BlurText
Se desenfoca gradualmente al hacer scroll.

```jsx
<BlurText className="text-6xl">
  Este texto se desenfoca
</BlurText>
```

**Props:**
- `className` (string): Clases CSS

**Ideal para:** Transiciones entre secciones

---

### 6. ScaleText
Escala el texto al entrar y salir del viewport.

```jsx
<ScaleText className="text-5xl">
  Texto con scale
</ScaleText>
```

**Props:**
- `className` (string): Clases CSS

**Ideal para:** Elementos destacados, testimonios

---

### 7. SlideUpText
Desliza desde abajo con overflow hidden.

```jsx
<SlideUpText delay={0.3} className="text-4xl">
  Desliza desde abajo
</SlideUpText>
```

**Props:**
- `delay` (number): Retraso en segundos
- `className` (string): Clases CSS

**Ideal para:** Listas, contenido secuencial

---

### 8. Rotate3DText
Rotación 3D al hacer scroll.

```jsx
<Rotate3DText className="text-6xl">
  Rotación 3D
</Rotate3DText>
```

**Props:**
- `className` (string): Clases CSS

**Ideal para:** Elementos creativos, secciones especiales

---

### 9. ClipText
Revelación con máscara de recorte.

```jsx
<ClipText delay={0.2} className="text-5xl">
  Efecto de cortina
</ClipText>
```

**Props:**
- `delay` (number): Retraso en segundos
- `className` (string): Clases CSS

**Ideal para:** Títulos de sección, encabezados

---

### 10. AnimatedText (Universal)
Componente que acepta el tipo de animación como prop.

```jsx
<AnimatedText type="fade" delay={0.2} speed={0.5} className="text-4xl">
  Mi contenido
</AnimatedText>
```

**Props:**
- `type` (string): 'fade' | 'parallax' | 'blur' | 'reveal' | 'gradient' | 'scale' | 'slideUp' | 'rotate3d' | 'clip'
- `delay` (number): Retraso en segundos
- `speed` (number): Velocidad (para parallax)
- `className` (string): Clases CSS

**Tipos disponibles:**
- `fade` - FadeInText
- `parallax` - ParallaxText
- `blur` - BlurText
- `reveal` - RevealText
- `gradient` - GradientText
- `scale` - ScaleText
- `slideUp` - SlideUpText
- `rotate3d` - Rotate3DText
- `clip` - ClipText

---

## 💡 Ejemplos Prácticos

### Hero Section
```jsx
<section className="min-h-screen flex items-center">
  <div className="container">
    <FadeInText delay={0.2}>
      <p className="text-sm uppercase tracking-wider text-gray-500">
        Bienvenido a
      </p>
    </FadeInText>
    
    <RevealText className="text-7xl font-bold my-6">
      Draft Marketing
    </RevealText>
    
    <SlideUpText delay={0.5}>
      <h2 className="text-3xl">
        <GradientText>Tu éxito es nuestra misión</GradientText>
      </h2>
    </SlideUpText>
  </div>
</section>
```

### Sección de Servicios
```jsx
<section className="py-20">
  <RevealText className="text-5xl font-bold text-center mb-12">
    Nuestros Servicios
  </RevealText>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {servicios.map((servicio, idx) => (
      <SlideUpText key={idx} delay={0.3 + idx * 0.1}>
        <div className="bg-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">{servicio.titulo}</h3>
          <p>{servicio.descripcion}</p>
        </div>
      </SlideUpText>
    ))}
  </div>
</section>
```

### Llamada a la Acción
```jsx
<section className="bg-gradient-to-r from-primary-600 to-accent-500 py-20">
  <div className="container text-center text-white">
    <FadeInText>
      <h2 className="text-5xl font-bold mb-6">
        ¿Listo para empezar?
      </h2>
    </FadeInText>
    
    <SlideUpText delay={0.3}>
      <p className="text-xl mb-8">
        Contáctanos hoy y recibe una consulta gratuita
      </p>
    </SlideUpText>
    
    <FadeInText delay={0.6}>
      <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold">
        Consulta Gratis
      </button>
    </FadeInText>
  </div>
</section>
```

---

## 📱 Responsive por Defecto

Todos los componentes están optimizados para dispositivos móviles:
- Animaciones suaves en todos los tamaños de pantalla
- Performance optimizada con Intersection Observer
- Reducción automática de motion en dispositivos que lo prefieran

---

## ⚡ Performance

Los componentes utilizan:
- ✅ Framer Motion para animaciones optimizadas por GPU
- ✅ Intersection Observer para detectar visibilidad
- ✅ `once: true` por defecto (animación solo la primera vez)
- ✅ Lazy loading automático

---

## 🎨 Personalización

Todos los componentes aceptan `className` para personalizar:

```jsx
<FadeInText className="text-5xl font-bold text-primary-600 mb-8">
  Mi contenido personalizado
</FadeInText>
```

Puedes combinarlos con Tailwind CSS para crear efectos únicos.

---

## 🔧 Tips y Mejores Prácticas

1. **Usa delays escalonados** para múltiples elementos:
   ```jsx
   {items.map((item, idx) => (
     <FadeInText key={idx} delay={0.1 * idx}>
       {item}
     </FadeInText>
   ))}
   ```

2. **Combina efectos** para resultados únicos:
   ```jsx
   <FadeInText>
     <GradientText className="text-6xl font-bold">
       Texto combinado
     </GradientText>
   </FadeInText>
   ```

3. **No abuses de las animaciones** - menos es más en diseño profesional

4. **Usa RevealText para títulos** impactantes de 5-10 palabras máximo

5. **Parallax y Blur** funcionan mejor en secciones grandes (min-h-screen)

---

## 📖 Documentación Adicional

Para ver todos los ejemplos en acción, visita:
`/src/examples/AnimatedTextExamples.jsx`

---

## 🐛 Troubleshooting

**Las animaciones no funcionan:**
- Verifica que Framer Motion esté instalado: `npm install framer-motion`
- Asegúrate de importar correctamente los componentes

**Las animaciones son lentas en móviles:**
- Reduce el número de elementos animados simultáneos
- Usa `once: true` (ya está por defecto)

**El texto parpadea:**
- Asegúrate de tener `initial` y `animate` props correctas
- Verifica que no haya conflictos con otras animaciones CSS

---

## 📞 Soporte

Para dudas o sugerencias sobre los componentes animados:
- Email: Draft.mkt@Hotmail.com
- Tel: 963 132 6010

---

Desarrollado con ❤️ para Draft Marketing - Comitán de Domínguez, Chiapas
