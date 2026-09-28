const translations = {
  fr: {
    "Loading portfolio": "Chargement du portfolio",
    "Hello. Discover my work and enjoy your visit.": "Bonjour. Découvrez mon travail et profitez de votre visite.",
    "Home": "Accueil",
    "About": "À propos",
    "Skills": "Compétences",
    "Experience": "Expérience",
    "Work": "Projets",
    "Awards": "Distinctions",
    "Contact": "Contact",
    "Language": "Langue",
    "Available for freelance": "Disponible en freelance",
    "Building reliable, scalable web applications that deliver real business value.": "Je crée des applications web fiables et évolutives qui apportent une vraie valeur métier.",
    "Professional statistics": "Statistiques professionnelles",
    "Years Experience": "Années d'expérience",
    "Projects": "Projets",
    "Technologies": "Technologies",
    "Remote Ready": "Prêt pour le remote",
    "Download CV": "Télécharger le CV",
    "View Projects": "Voir les projets",
    "Intro": "Introduction",
    "What I am all about.": "Qui je suis.",
    "Hi everyone! My name is Rado. I am Software Engineer from Madagascar. I am passionate about new technology and I am always eager to learn new things. I am always up for a challenge and I am not afraid to step outside of my comfort zone.": "Bonjour à tous ! Je m'appelle Rado. Je suis ingénieur logiciel à Madagascar. Je suis passionné par les nouvelles technologies et toujours désireux d'apprendre. J'aime relever les défis et sortir de ma zone de confort.",
    "In addition to my passion for technology, I also have a number of other interests. I love to play football. I also love the thrill of exploring the open road on my motorcycle. It's a great way to escape the hustle and bustle of everyday life and clear my head.": "En plus de ma passion pour la technologie, j'ai d'autres centres d'intérêt. J'aime jouer au football et partir à l'aventure sur les routes à moto. C'est une excellente façon d'échapper au rythme quotidien et de me changer les idées.",
    "What I can do.": "Ce que je peux faire.",
    "Web Development": "Développement web",
    "Mobile Development": "Développement mobile",
    "Database": "Base de données",
    "Others": "Autres",
    "Office automation software": "Bureautique",
    "Network theory": "Théorie des réseaux",
    "Project Management": "Gestion de projet",
    "What I accomplished": "Mes réalisations",
    "Developer FullStack": "Développeur FullStack",
    "November 2024 - Now": "Novembre 2024 - Aujourd'hui",
    "Stacks :": "Technologies :",
    "Developer intern": "Stagiaire développeur",
    "Competitions": "Compétitions",
    "Hackathon Inter Universitaire (Third place HIU 2023)": "Hackathon Inter Universitaire (3e place HIU 2023)",
    "Hackaton ZahaGeek 3.0 2024 (Third place)": "Hackathon ZahaGeek 3.0 2024 (3e place)",
    "Personal Project": "Projet personnel",
    "Ongoing": "En cours",
    "Various personal and school projects": "Divers projets personnels et scolaires",
    "Works": "Projets",
    "I build the real value.": "Je crée de la valeur.",
    "Carpooling platform, Master II final project": "Plateforme de covoiturage, projet de fin de Master II",
    "Small project for training in Vue 3": "Petit projet d'entraînement avec Vue 3",
    "A website used to find the tags of a YouTube video by its url": "Un site pour trouver les tags d'une vidéo YouTube à partir de son URL",
    "A website developed by the Spudster team which serves to indicate the cheapest products in a specific location": "Un site développé par l'équipe Spudster pour indiquer les produits les moins chers dans un lieu donné",
    "Weekly coding challenge 2022, developed by twisty team": "Challenge de programmation hebdomadaire 2022, réalisé par la Twisty Team",
    "A Malagasy game developed with the Python programming language": "Jeu malgache développé avec le langage Python",
    "Ultimate frontend challenge organized by Spudster team": "Challenge frontend organisé par l'équipe Spudster",
    "Integration training from random template": "Entraînement à l'intégration depuis un template aléatoire",
    "What I Won": "Mes distinctions",
    "Weekly Coding Challenge 2nd edition": "Weekly Coding Challenge, 2e édition",
    "Twisty Team - First Place": "Twisty Team - Première place",
    "By TechZara September 2022": "Par TechZara, septembre 2022",
    "ASJA Antsirabe - Third Place": "ASJA Antsirabe - Troisième place",
    "By TechZara": "Par TechZara",
    "Spudster Team - Third Place": "Spudster Team - Troisième place",
    "By Orange Digital Center June 2024": "Par Orange Digital Center, juin 2024",
    "Contacts": "Contacts",
    "Hire me.": "Engagez-moi.",
    "Location": "Localisation",
    "Whatsapp": "WhatsApp",
    "Email": "E-mail",
    "Top": "Haut",
    "Toggle Dark Mode": "Activer le mode sombre"
  }
};

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const translatePage = (language) => {
  const dictionary = translations[language] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement && !["SCRIPT", "STYLE", "SELECT"].includes(node.parentElement.tagName)) {
      textNodes.push(node);
    }
  }

  textNodes.forEach((node) => {
    const original = normalizeText(node.nodeValue);
    const translated = dictionary[original];
    if (translated) {
      const leadingWhitespace = node.nodeValue.match(/^\s*/)[0];
      const trailingWhitespace = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
    }
  });

  document.documentElement.lang = language;
  document.title = language === "fr" ? "José Alain RADOHERITIANA | Portfolio" : "José Alain RADOHERITIANA";
  const languageGroup = document.querySelector(".language-switcher");
  if (languageGroup) {
    languageGroup.setAttribute("aria-label", language === "fr" ? "Langue" : "Language");
  }
};

const storedLanguage = localStorage.getItem("language") || "en";
window.siteLanguage = storedLanguage;
translatePage(storedLanguage);

const languageOptions = document.querySelectorAll(".language-option");
languageOptions.forEach((option) => {
  const isActive = option.dataset.language === storedLanguage;
  option.classList.toggle("is-active", isActive);
  option.setAttribute("aria-pressed", String(isActive));
  option.addEventListener("click", () => {
    localStorage.setItem("language", option.dataset.language);
    window.location.reload();
  });
});