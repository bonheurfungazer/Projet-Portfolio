# PhotoStudio Portfolio

Ce projet est la réalisation d'un site web statique professionnel pour un photographe, "PhotoStudio".
Il a été conçu avec un design moderne (thème sombre, "glassmorphism", animations au défilement) et est entièrement responsive. Les coordonnées et informations sont localisées pour le Cameroun, et l'année de copyright est fixée à 2026.

**Projet réalisé par l'étudiant : Guepi takouo peguy maeva**

## Structure du projet
- `index.html` : Page d'accueil avec hero section, services et galerie.
- `portfolio.html` : Page des réalisations avec filtres CSS purs et grille d'images.
- `contact.html` : Page de contact avec formulaire et carte Google Maps (Douala, Cameroun).
- `css/style.css` : Fichier de styles CSS principal (variables CSS, flexbox/grid, animations).
- `js/script.js` : Script pour le menu hamburger et les animations au défilement (`IntersectionObserver`).
- `images/` : Dossier prévu pour les images (actuellement utilise des images Unsplash en ligne).

## Technologies utilisées
- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts (Poppins, Open Sans)
- FontAwesome (Icônes)

---

## 🚀 Comment ouvrir le site en local ?

Ce site est purement statique (HTML, CSS, JS). Vous n'avez pas besoin de serveur de base de données ni d'outils complexes pour le visionner. Voici deux méthodes pour l'ouvrir :

### Méthode 1 : Ouverture simple (La plus facile)
1. Téléchargez ou clonez le dossier du projet sur votre ordinateur.
2. Ouvrez le dossier du projet.
3. Faites un **double-clic** sur le fichier `index.html`.
4. Le site s'ouvrira automatiquement dans votre navigateur web par défaut (Chrome, Firefox, Safari, Edge, etc.).

### Méthode 2 : Utilisation d'un serveur local (Recommandé pour les animations complexes)
Certaines fonctionnalités très spécifiques du web moderne (bien que non bloquantes ici) fonctionnent mieux sur un serveur local. Si vous avez Python ou un éditeur de code installé :

**Avec Python :**
1. Ouvrez votre terminal (ou invite de commande).
2. Naviguez jusqu'au dossier du projet : `cd chemin/vers/le/dossier`
3. Lancez la commande suivante :
   - Sur Mac/Linux : `python3 -m http.server 8000`
   - Sur Windows : `python -m http.server 8000`
4. Ouvrez votre navigateur et allez à l'adresse : `http://localhost:8000`

**Avec VS Code (Extension Live Server) :**
1. Ouvrez le dossier du projet dans Visual Studio Code.
2. Installez l'extension **"Live Server"** de Ritwick Dey si ce n'est pas déjà fait.
3. Faites un clic droit sur `index.html` et choisissez **"Open with Live Server"**.
4. Le site s'ouvrira automatiquement dans votre navigateur avec rechargement à chaud.

---

## Déploiement
Le site peut être déployé gratuitement sur n'importe quel hébergeur de sites statiques comme GitHub Pages, Netlify, Vercel, ou Hostinger.
