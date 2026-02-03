#!/bin/bash
# ===========================================
# COMANDOS RÁPIDOS - DRAFT MARKETING DEPLOY
# ===========================================

echo "📦 DRAFT MARKETING - COMANDOS DE PRODUCCIÓN"
echo ""

# BUILD
echo "🔨 BUILD:"
echo "docker compose build --no-cache --build-arg BASE_PATH=/larcad"
echo ""

# DEPLOY
echo "🚀 DEPLOY:"
echo "./deploy.sh"
echo "# O manualmente:"
echo "docker compose up -d"
echo ""

# LOGS
echo "📋 LOGS:"
echo "docker logs -f draft-marketing-web"
echo "docker logs --tail 100 draft-marketing-web"
echo ""

# STATUS
echo "📊 STATUS:"
echo "docker ps | grep draft-marketing"
echo "docker stats draft-marketing-web"
echo ""

# HEALTH
echo "💚 HEALTH CHECK:"
echo "docker exec draft-marketing-web wget -qO- http://localhost:80/health"
echo "docker inspect --format='{{.State.Health.Status}}' draft-marketing-web"
echo ""

# RESTART
echo "🔄 RESTART:"
echo "docker compose restart"
echo ""

# STOP
echo "⏹️  STOP:"
echo "docker compose down"
echo ""

# UPDATE
echo "🔄 UPDATE:"
echo "git pull && docker compose build --no-cache && docker compose up -d"
echo ""

# DEBUG
echo "🐛 DEBUG:"
echo "docker exec -it draft-marketing-web sh"
echo "docker exec draft-marketing-web nginx -t"
echo "docker network inspect web_proxy_network"
echo ""

# CLEANUP
echo "🧹 CLEANUP:"
echo "docker system prune -a --volumes"
echo ""
