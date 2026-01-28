# Draft Marketing - Aplicación Web

Una aplicación web completa y lista para producción para Draft Marketing, una agencia de marketing ubicada en Comitán de Domínguez, Chiapas, México.

## 🏢 Información de la Empresa

- **Nombre**: Draft Marketing
- **Ubicación**: Comitán de Domínguez, Chiapas, México
- **Teléfono**: 963 132 6010
- **Email**: Draft.mkt@Hotmail.com
- **Servicios**: Marketing Digital, Campañas BTL, Branding, Organización de Eventos

## 🚀 Tecnologías

### Frontend
- React 18 con JavaScript
- Tailwind CSS para estilos
- Framer Motion para animaciones
- React Three Fiber para efectos 3D
- GSAP y Locomotive Scroll
- Vite como bundler
- React Router para navegación
- React Helmet para SEO

### Backend
- Node.js con Express.js
- Helmet para seguridad
- CORS y Rate Limiting
- Nodemailer para emails
- Winston para logging
- Express Validator

### DevOps
- Docker y Docker Compose
- Nginx como proxy reverso
- Configuración SSL
- Variables de entorno

## 📁 Estructura del Proyecto

```
draft-marketing/
├── client/                 # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/         # Páginas principales
│   │   ├── sections/      # Secciones de página
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Utilidades
│   │   └── styles/        # Estilos globales
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend Express
│   ├── src/
│   │   ├── controllers/   # Controladores
│   │   ├── routes/        # Rutas API
│   │   ├── middleware/    # Middleware personalizado
│   │   ├── services/      # Servicios (email, etc.)
│   │   └── utils/         # Utilidades del servidor
│   ├── package.json
│   └── server.js
├── docker-compose.yml     # Configuración Docker
├── Dockerfile.client      # Imagen Docker para frontend
├── Dockerfile.server      # Imagen Docker para backend
└── README.md
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn
- Docker y Docker Compose (para producción)

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd draft-marketing

# Instalar dependencias del frontend
cd client
npm install

# Instalar dependencias del backend
cd ../server
npm install
```

### Desarrollo Local
```bash
# Terminal 1 - Frontend (puerto 3000)
cd client
npm run dev

# Terminal 2 - Backend (puerto 5000)
cd server
npm run dev
```

### Producción con Docker
```bash
# Construir y ejecutar todos los servicios
docker-compose up --build -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

## 🎨 Características Principales

### Frontend
- **Diseño Responsive**: Optimizado para móviles y desktop
- **Animaciones Avanzadas**: Efectos 3D, parallax y transiciones suaves
- **SEO Optimizado**: Meta tags dinámicos y estructura semántica
- **Performance**: Lazy loading, optimización de imágenes
- **Accesibilidad**: Cumple con estándares WCAG

### Backend
- **API RESTful**: Endpoints para contacto, servicios y portfolio
- **Seguridad**: Protección XSS, CSRF, rate limiting
- **Validación**: Validación de datos de entrada
- **Email Service**: Envío de formularios de contacto
- **Logging**: Registro de eventos y errores

## 🔒 Características de Seguridad

- Headers de seguridad con Helmet.js
- Rate limiting para prevenir spam
- Validación y sanitización de datos
- Protección CORS configurada
- Variables de entorno para datos sensibles
- SSL/HTTPS en producción

## 📊 SEO y Performance

- Meta tags optimizados por página
- Sitemap.xml automático
- Open Graph y Twitter Cards
- Lazy loading de imágenes
- Compresión de assets
- Cache headers optimizados

## 🌍 Localización

- Contenido en español mexicano
- Contexto cultural chiapaneco
- Información local de contacto
- Horarios zona Centro de México

## 📧 Configuración de Email

Para el servicio de email, configurar las siguientes variables de entorno en el servidor:

```env
SMTP_HOST=tu-servidor-smtp
SMTP_PORT=587
SMTP_USER=tu-email
SMTP_PASS=tu-contraseña
EMAIL_FROM=Draft.mkt@Hotmail.com
EMAIL_TO=Draft.mkt@Hotmail.com
```

## 🚦 Estados del Proyecto

- ✅ Estructura básica
- ✅ Frontend React con componentes
- ✅ Backend Express con API
- ✅ Sistema de routing
- ✅ Formularios de contacto
- ✅ Integración de animaciones
- ✅ Configuración Docker
- ✅ Documentación

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:
- Email: Draft.mkt@Hotmail.com
- Teléfono: 963 132 6010

## 📄 Licencia

Este proyecto es propiedad de Draft Marketing. Todos los derechos reservados.