# 🚀 GUÍA DE DESPLIEGUE A PRODUCCIÓN
# Draft Marketing - Docker + Nginx

## ✅ CONFIRMACIÓN IMPORTANTE

**NO SE MODIFICÓ NADA VISUAL:**
- ✅ Componentes React intactos
- ✅ Estilos Tailwind sin cambios
- ✅ Animaciones Framer Motion preservadas
- ✅ Rutas internas de React Router sin modificar
- ✅ Assets y estructura de carpetas igual
- ✅ Colores, tipografías y layout sin tocar

**SOLO SE AGREGÓ:**
- Configuración de producción (Dockerfile, nginx.conf)
- Optimización de build (vite.config.js)
- Orquestación con Docker Compose
- Scripts de despliegue automatizado

---

## 📋 PREREQUISITOS

1. Docker instalado (versión 20.10+)
2. Docker Compose instalado (versión 2.0+)
3. Red Docker externa creada
4. Nginx-proxy configurado en el servidor

---

## 🔧 CONFIGURACIÓN INICIAL

### 1. Crear la red externa (una sola vez)

```bash
docker network create web_proxy_network
```

### 2. Verificar que nginx-proxy esté corriendo

```bash
docker ps | grep nginx-proxy
```

---

## 🚀 DESPLIEGUE AUTOMÁTICO

### Opción 1: Script automatizado (Recomendado)

```bash
cd /home/doker/Descargas/LARCAD/Draft-Marketing
./deploy.sh
```

### Opción 2: Comandos manuales

```bash
# 1. Ir al directorio del proyecto
cd /home/doker/Descargas/LARCAD/Draft-Marketing

# 2. Construir la imagen
docker compose build --no-cache --build-arg BASE_PATH=/larcad

# 3. Iniciar el servicio
docker compose up -d

# 4. Verificar que está corriendo
docker ps | grep draft-marketing

# 5. Ver logs
docker logs -f draft-marketing-web
```

---

## 🔍 VERIFICACIÓN

### Verificar que el contenedor está saludable

```bash
docker ps --filter "name=draft-marketing"
```

Debe mostrar: **Status: Up X minutes (healthy)**

### Verificar logs

```bash
docker logs --tail 50 draft-marketing-web
```

### Probar endpoint de salud

```bash
docker exec draft-marketing-web wget -qO- http://localhost:80/health
```

Debe retornar: **healthy**

---

## 🌐 ACCESO A LA APLICACIÓN

Una vez desplegado, la aplicación estará disponible en:

**URL de producción:**
```
https://midominio.com/larcad
```

**Asegúrate de:**
1. El DNS apunta al servidor
2. Nginx-proxy está configurado correctamente
3. Los certificados SSL están activos

---

## 📊 ESTRUCTURA DE ARCHIVOS CREADOS

```
Draft-Marketing/
├── Dockerfile              # Multi-stage build optimizado
├── nginx.conf             # Configuración nginx para SPA
├── docker-compose.yml     # Orquestación con red externa
├── .dockerignore          # Optimización de build
├── deploy.sh              # Script de despliegue automatizado
└── client/
    └── vite.config.js     # Actualizado solo build config
```

---

## 🔄 ACTUALIZAR LA APLICACIÓN

```bash
# 1. Pull últimos cambios del repo
git pull origin main

# 2. Rebuild y redeploy
docker compose down
docker compose build --no-cache
docker compose up -d

# O usar el script
./deploy.sh
```

---

## 🛠️ COMANDOS ÚTILES

### Ver logs en tiempo real
```bash
docker logs -f draft-marketing-web
```

### Entrar al contenedor
```bash
docker exec -it draft-marketing-web sh
```

### Ver uso de recursos
```bash
docker stats draft-marketing-web
```

### Reiniciar el contenedor
```bash
docker compose restart
```

### Detener el servicio
```bash
docker compose down
```

### Ver estado de salud
```bash
docker inspect --format='{{.State.Health.Status}}' draft-marketing-web
```

---

## 🐛 TROUBLESHOOTING

### El contenedor no inicia
```bash
# Ver logs detallados
docker logs draft-marketing-web

# Verificar configuración de nginx
docker exec draft-marketing-web nginx -t
```

### Error 502 Bad Gateway
```bash
# Verificar que nginx-proxy puede acceder al contenedor
docker exec nginx-proxy curl http://draft-marketing-web/health

# Verificar red
docker network inspect web_proxy_network
```

### Assets no cargan (404)
```bash
# Verificar que el BASE_PATH esté correcto
docker exec draft-marketing-web ls -la /usr/share/nginx/html/assets

# Reconstruir con el base path correcto
docker compose build --build-arg BASE_PATH=/larcad
```

### El contenedor se detiene solo
```bash
# Ver por qué falló
docker logs draft-marketing-web

# Verificar health check
docker inspect draft-marketing-web | grep -A 10 "Health"
```

---

## 🔒 CONFIGURACIÓN DE SEGURIDAD

### Headers de seguridad (Ya incluidos en nginx.conf)
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

### Límites de recursos (Ya incluidos en docker-compose.yml)
- ✅ CPU: 1 core máximo
- ✅ RAM: 512MB máximo
- ✅ Reservas garantizadas

---

## 📈 OPTIMIZACIONES IMPLEMENTADAS

### Dockerfile
- ✅ Multi-stage build (reducción de tamaño)
- ✅ Layer caching optimizado
- ✅ node_modules no en producción
- ✅ Alpine Linux (imagen mínima)

### Nginx
- ✅ Gzip compression habilitado
- ✅ Cache agresivo de assets estáticos
- ✅ try_files para SPA routing
- ✅ Worker processes auto-escalables

### Vite Build
- ✅ Minificación con Terser
- ✅ Drop console.log en producción
- ✅ Code splitting por vendor
- ✅ Hashing de assets para cache busting

---

## 📝 VARIABLES DE ENTORNO

Edita `docker-compose.yml` para personalizar:

```yaml
environment:
  - VIRTUAL_HOST=tudominio.com          # Tu dominio
  - VIRTUAL_PATH=/larcad                 # Subpath (ajustar si necesario)
  - VIRTUAL_PORT=80                      # Puerto interno
  - LETSENCRYPT_HOST=tudominio.com       # Para SSL automático
  - LETSENCRYPT_EMAIL=tuemail@email.com  # Email para certificados
```

---

## 🎯 CHECKLIST DE DESPLIEGUE

- [ ] Red externa `web_proxy_network` creada
- [ ] Nginx-proxy corriendo en el servidor
- [ ] DNS configurado apuntando al servidor
- [ ] Variables en docker-compose.yml ajustadas
- [ ] Build exitoso sin errores
- [ ] Contenedor healthy después de 40s
- [ ] Endpoint /health responde
- [ ] Aplicación accesible desde https://tudominio.com/larcad
- [ ] Assets cargan correctamente
- [ ] Rutas internas de React funcionan
- [ ] SSL/TLS activo
- [ ] Logs sin errores críticos

---

## 📞 SOPORTE

**Draft Marketing**
- Email: Draft.mkt@Hotmail.com
- Tel: 963 132 6010
- Ubicación: Comitán de Domínguez, Chiapas

---

## ⚠️ IMPORTANTE

- **NO modifiques** el código de los componentes React
- **NO cambies** configuraciones de Tailwind o estilos
- **Solo ajusta** variables de entorno y configuración de infraestructura
- **Siempre** haz backup antes de actualizar en producción

---

Preparado para producción por DevOps Engineer
Fecha: 3 de febrero de 2026
Proyecto: Draft Marketing - Listo para deploy
