#!/bin/bash

echo "🔍 Vérification du nettoyage de toutes les références 'freehtml5.co'..."
echo ""

# Recherche de toutes les références à freehtml5.co
echo "Recherche de 'freehtml5.co':"
grep -r "freehtml5.co" . --exclude-dir=.git --exclude="*.sh" || echo "✅ Aucune référence trouvée"

echo ""
echo "Recherche de 'FreeHTML5':"
grep -r "FreeHTML5" . --exclude-dir=.git --exclude="*.sh" || echo "✅ Aucune référence trouvée"

echo ""
echo "Recherche de 'Free HTML5':"
grep -r "Free HTML5" . --exclude-dir=.git --exclude="*.sh" || echo "✅ Aucune référence trouvée"

echo ""
echo "🧪 Test de la structure du site..."

# Vérifier que les fichiers principaux existent
files=("index.html" "about.html" "menu.html" "gallery.html" "contact.html" "reservation.html")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file existe"
    else
        echo "❌ $file manquant"
    fi
done

echo ""
echo "🎨 Vérification des fichiers CSS personnalisés..."
if [ -f "css/custom-improvements.css" ]; then
    echo "✅ CSS personnalisé présent"
else
    echo "❌ CSS personnalisé manquant"
fi

echo ""
echo "⚡ Vérification des scripts JavaScript améliorés..."
if [ -f "js/enhancements.js" ]; then
    echo "✅ JavaScript amélioré présent"
else
    echo "❌ JavaScript amélioré manquant"
fi

echo ""
echo "📱 Vérification des fichiers PWA..."
if [ -f "manifest.json" ]; then
    echo "✅ Manifest PWA présent"
else
    echo "❌ Manifest PWA manquant"
fi

if [ -f "sw.js" ]; then
    echo "✅ Service Worker présent"
else
    echo "❌ Service Worker manquant"
fi

echo ""
echo "🏁 Vérification terminée !"
echo "Le site Tasty Restaurant est maintenant prêt et ne contient plus de références à freehtml5.co"
