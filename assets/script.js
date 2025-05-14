const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const img = document.querySelector(".banner-img"); // sélectionne l'image
const leftArrow = document.querySelector(".arrow_left"); // sélectionne la flèche gauche
const rightArrow = document.querySelector(".arrow_right"); // sélectionne la flèche droite
const dotsContainer = document.querySelector(".dots"); // sélectionne le container des dots
let currentIndex = 0; // on garde une trace de l'index de l'image actuelle

function dotsApearence() {
  for (let i = 0; i < slides.length; i++) {
    // boucle sur le nombre de slides
    const dot = document.createElement("span"); // crée un nouveau span à chaque tour
    dot.classList.add("dot"); // ajoute une classe CSS
    dotsContainer.appendChild(dot); // ajoute le dot au container
  }
}
function dotSelected() {
  const dots = document.querySelectorAll(".dot"); // sélectionne tous les dots
  dots.forEach((dot, index) => {
    // boucle sur chaque dot
    dot.classList.remove("dot_selected"); // retire la classe dot_selected de tous les dots
    if (index === currentIndex) {
      dot.classList.add("dot_selected"); // ajoute la classe dot_selected au dot correspondant à l'index actuel
    } else {
      dot.classList.remove("dot_selected"); // retire la classe dot_selected des autres dots
    }
  });
}

function changeImage() {
  img.src = `./assets/images/slideshow/${slides[currentIndex].image}`; // change l'image
  document.querySelector("p").innerHTML = slides[currentIndex].tagLine; // change le tagLine
}

leftArrow.addEventListener("mousedown", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1; // si l'index est 0, on va à la dernière image, sinon on décrémente
  dotSelected(); // met à jour le dot sélectionné
  changeImage(); // change l'image
});

rightArrow.addEventListener("mousedown", () => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1; // si l'index est le dernier, on va à l'image 0, sinon on incrémente
  dotSelected(); // met à jour le dot sélectionné
  changeImage(); // change l'image
});

dotsApearence(); // crée les dots
dotSelected(); // met à jour le dot sélectionné
changeImage(); // change l'image initiale
