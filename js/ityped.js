const pres = () => {
  ityped.init("#type", {
    strings: [
      "Software Engineer",
      "FullStack Developer",
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
