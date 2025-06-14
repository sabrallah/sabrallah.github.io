#!/bin/bash

# Script pour démarrer un serveur local pour prévisualiser le site
# Usage: ./start-server.sh [port]

PORT=${1:-8000}

echo "🍽️  Démarrage du serveur Tasty Restaurant..."
echo "📂 Répertoire: $(pwd)"
echo "🌐 Port: $PORT"
echo ""
echo "Ouvrez votre navigateur à: http://localhost:$PORT"
echo "Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""

# Vérifier si Python 3 est disponible
if command -v python3 &> /dev/null; then
    echo "🐍 Utilisation de Python 3..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "🐍 Utilisation de Python..."
    python -m http.server $PORT
elif command -v php &> /dev/null; then
    echo "🐘 Utilisation de PHP..."
    php -S localhost:$PORT
elif command -v node &> /dev/null && npm list -g http-server &> /dev/null; then
    echo "📦 Utilisation de Node.js http-server..."
    npx http-server -p $PORT
else
    echo "❌ Aucun serveur HTTP disponible."
    echo "Veuillez installer Python, PHP, ou Node.js avec http-server."
    echo ""
    echo "Installation rapide:"
    echo "  - Python: généralement préinstallé"
    echo "  - PHP: sudo apt install php (Ubuntu/Debian)"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - http-server: npm install -g http-server"
    exit 1
fi
