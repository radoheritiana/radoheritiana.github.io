const pres = () => {
  ityped.init("#type", {
    strings: [
      window.siteLanguage === "fr" ? "Ingénieur logiciel" : "Software Engineer",
      window.siteLanguage === "fr" ? "Développeur FullStack" : "FullStack Developer",
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 500,
    cursorChar: "_",
    showCursor: true,
    loop: true,
  });
};

pres();
