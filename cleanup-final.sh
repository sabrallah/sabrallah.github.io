#!/bin/bash

echo "🧹 Nettoyage final du projet Tasty Restaurant..."
echo ""

# Supprimer les fichiers temporaires et de cache
echo "🗑️  Suppression des fichiers temporaires..."
find . -name "*.tmp" -delete 2>/dev/null
find . -name "*.bak" -delete 2>/dev/null
find . -name "*~" -delete 2>/dev/null
find . -name ".DS_Store" -delete 2>/dev/null

# Vérifier la structure finale
echo ""
echo "📁 Structure finale du projet:"
echo "================================"
tree -I '.git' || ls -la

echo ""
echo "📊 Statistiques du projet:"
echo "=========================="
echo "Pages HTML: $(ls -1 *.html | wc -l)"
echo "Fichiers CSS: $(ls -1 css/*.css | wc -l)"
echo "Fichiers JS: $(ls -1 js/*.js | wc -l)"
echo "Images: $(ls -1 images/* | wc -l)"

echo ""
echo "💾 Taille totale du projet:"
du -sh . --exclude=.git

echo ""
echo "✅ Nettoyage terminé !"
echo "Le projet est maintenant optimisé et ne contient que les fichiers nécessaires."
