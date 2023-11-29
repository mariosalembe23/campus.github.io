const scrollingPage = () => {
  const logoLetter = document.querySelector(".logo_letter");
  const navbar = document.querySelector(".navbar");

  if (window.scrollY === 0) {
    logoLetter.classList.remove("oculto");
    navbar.classList.remove("customizedBackNavbar");
  } else {
    logoLetter.classList.add("oculto");
    navbar.classList.add("customizedBackNavbar");
  }
};

document.addEventListener("scroll", scrollingPage);
