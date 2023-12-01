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

function showBoxShare() {
  const backgroundMask = document.querySelector(".backgroundMask");
  const share_page = document.querySelector(".share_page");
  backgroundMask.classList.remove("hidden");
  backgroundMask.classList.add("animatedBackMask");
  backgroundMask.classList.add("flex");
  share_page.classList.remove("closeBoxShare")
  share_page.classList.add("showBoxShare");
  document.body.style.overflow = "hidden";
}

function closeBoxShare() {
  const backgroundMask = document.querySelector(".backgroundMask");
  const share_page = document.querySelector(".share_page");

  setTimeout(() => {
    backgroundMask.classList.add("hidden");
    backgroundMask.classList.remove("flex");
  }, 700);
  share_page.classList.remove("showBoxShare");
  share_page.classList.add("closeBoxShare");
  document.body.style.overflow = "auto";
}
