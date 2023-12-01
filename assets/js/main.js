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
  const shareBox = document.querySelector(".share_box");
  backgroundMask.classList.remove("hidden");
  backgroundMask.classList.add("animatedBackMask");
  backgroundMask.classList.add("flex");
  shareBox.classList.remove("closeBoxShare");
  shareBox.classList.add("showBoxShare");
  document.body.style.overflow = "hidden";
}

function closeBoxShare() {
  const backgroundMask = document.querySelector(".backgroundMask");
  const shareBox = document.querySelector(".share_box");

  setTimeout(() => {
    backgroundMask.classList.add("hidden");
    backgroundMask.classList.remove("flex");
  }, 700);
  shareBox.classList.remove("showBoxShare");
  shareBox.classList.add("closeBoxShare");
  document.body.style.overflow = "auto";
}

function OpenOffCanvas() {
  const offcanvasBack = document.querySelector(".offcanvasBack");
  const offCanvas = document.querySelector(".offcanvas");
  offcanvasBack.classList.remove("hidden");
  offcanvasBack.classList.add("animatedBackMask");
  offCanvas.classList.remove("HideOffCanvas");
  offCanvas.classList.add("showOffCanvas");
  document.body.style.overflow = "hidden";
}

const allLinksOffCanvas = document.querySelectorAll(".link_offcanvas");
allLinksOffCanvas.forEach((link) => {
  link.addEventListener("click", closeOffCanvas);
});

function closeOffCanvas() {
  const offcanvasBack = document.querySelector(".offcanvasBack");
  const offCanvas = document.querySelector(".offcanvas");
  setTimeout(() => {
    offcanvasBack.classList.add("hidden");
  }, 700);

  offCanvas.classList.remove("showOffCanvas");
  offCanvas.classList.add("HideOffCanvas");
  document.body.style.overflow = "auto";
}

function copiarTexto() {
  const texto = document.getElementById("link_share").innerText;

  navigator.clipboard.writeText(texto)
    .then(function() {
      alert('Texto copiado com sucesso!');
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
}
