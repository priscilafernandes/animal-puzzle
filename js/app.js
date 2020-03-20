const main = document.getElementById("main");
const container = document.getElementById("container");
const letterFill = document.getElementsByClassName("letter-fill");
const letterEmpty = document.getElementsByClassName("letter-empty");
const slides = document.getElementsByClassName("slides");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

showAnimals();
dragDrop();

// renderização dos animais na tela
function showAnimals() {
  data.map(item => {
    const section = document.createElement("section");

    section.classList.add("slides");
    section.style["background-image"] = `linear-gradient(#fff 10%, ${item.backg} 50%)`;

    let word = item.name.split("");
    let content = `
      <div class="content">
        <img src="./assets/img/${item.img}" alt=${item.name} class="img-animal">

        <ul class="word-empty">${word.map(letter => `
          <li class="letter-empty" id="${Math.floor(Math.random() * 1000) + 1}">${letter}</li>
        `).join(" ")}</ul>

        <ul class="word-fill">${word.map(letter => `
          <li class="letter-fill" draggable="true" id="${Math.floor(Math.random() * 1000) + 1}">${letter}</li>
        `).sort( () => 0.5 - Math.random() ).join(" ") }</ul>
      </div>
    `;

    section.insertAdjacentHTML("beforeend", content);
    container.appendChild(section);
  });
}

// drag e drop das letras 
function dragDrop() {
  let draggedLetter = null;

  for (let i = 0; i < letterFill.length; i++) {
    letterFill[i].addEventListener("dragstart", (e) => {
      draggedLetter = e.target;

      setTimeout(() => {
        draggedLetter.style.display = "none";
      })
    });

    letterFill[i].addEventListener("dragend", (e) => {
      setTimeout(() => {
        draggedLetter.style.display = "block";
        draggedLetter = null;
      }, 0);
    });
  }

  for (let j = 0; j < letterEmpty.length; j++) {
    letterEmpty[j].addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    letterEmpty[j].addEventListener("dragenter", (e) => {
      e.preventDefault();
    });
    
    letterEmpty[j].addEventListener("drop", (e) => {
      e.preventDefault();

      if (e.target.textContent == draggedLetter.textContent) {
        e.target.append(draggedLetter);
        draggedLetter.classList.add("dragged-letter");
      }
    });
  } 
}

// slideshow dos animais
let slideIndex = 1;
showSlides(slideIndex);

btnPrev.addEventListener("click", (n) => {
  n = -1;
  showSlides(slideIndex += n);
});

btnNext.addEventListener("click", (n) => {
  n = 1;
  showSlides(slideIndex += n);
});

function showSlides(n) {
  let i;
  
  if (n > slides.length) { 
    slideIndex = 1 
  }  

  if (n < 1) { 
    slideIndex = slides.length 
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
   
  slides[slideIndex-1].style.display = "block";
} 
