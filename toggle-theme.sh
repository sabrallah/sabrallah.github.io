#!/bin/bash

echo "🎨 Gestionnaire de thèmes pour Tasty Restaurant"
echo "==============================================="
echo ""
echo "Choisissez le thème souhaité :"
echo "1) Thème lumineux (actuel)"
echo "2) Thème sombre (original)"
echo ""
read -p "Votre choix (1 ou 2) : " choice

case $choice in
    1)
        echo "✅ Activation du thème lumineux..."
        # Le thème lumineux est déjà activé par défaut
        echo "Le thème lumineux est maintenant actif !"
        ;;
    2)
        echo "🌙 Activation du thème sombre..."
        # Désactiver temporairement le thème lumineux
        for file in *.html; do
            if [[ -f "$file" ]]; then
                sed -i 's|<link rel="stylesheet" href="css/light-theme.css">|<!-- <link rel="stylesheet" href="css/light-theme.css"> -->|g' "$file"
            fi
        done
        echo "Le thème sombre est maintenant actif !"
        ;;
    *)
        echo "❌ Choix invalide. Utilisation du thème par défaut (lumineux)."
        ;;
esac

echo ""
echo "🔄 Pour voir les changements, actualisez votre navigateur."
echo "🌐 Site disponible sur : http://localhost:8000"
