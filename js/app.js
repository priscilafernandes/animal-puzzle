const main = document.getElementById("main");
const container = document.getElementById("container");
const wordFill = document.getElementsByClassName("word-fill");
const letterFill = document.getElementsByClassName("letter-fill");
const letterEmpty = document.getElementsByClassName("letter-empty");
const slides = document.getElementsByClassName("slides");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let slideIndex = 1;

showAnimals();
playMusic();
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

// música de fundo
function playMusic() {
  let audio = new Audio("../assets/sounds/soundtrack-claudio-the-worm.mp3");
  audio.addEventListener("loadeddata", async (e) => {
    try {
      await e.target.play();
      e.target.volume = 0.5;
      e.target.loop = true;
    } catch(err) {
        console.log(`${err.name}: ${err.message}`);
        throw alert("Para ouvir a música habilite o áudio no navegador");
      }
  });
}

// som das letras
function letterSound(letter) {  
  let sound = new Audio(`../assets/sounds/letters/${letter}.ogg`);
  sound.play();
}

// drag e drop das letras 
function dragDrop() {
  let draggedLetter = null;

  for (let i = 0; i < letterFill.length; i++) {
    letterFill[i].addEventListener("dragstart", (e) => {
      letterSound(e.target.textContent);
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

      wordSuccess();
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
        let successLetterSound = new Audio("../assets/sounds/sound-success-letter.mp3");
        
        setTimeout(() => {
          successLetterSound.currentTime = 1.5;
          successLetterSound.play();
          successLetterSound.volume = 0.7;
        }, 200);

        e.target.append(draggedLetter);
        draggedLetter.classList.add("dragged-letter");        
      } else {
        let errorSound = new Audio("../assets/sounds/sound-error.mp3");
        
        setTimeout(() => {
          errorSound.play();
        }, 200)        
      }
    });
  }
}

// slideshow dos animais
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

// acertou a palavra
function wordSuccess() {
  let currentWord = wordFill[slideIndex-1].children;
  let successWordSound = new Audio("../assets/sounds/sound-success-word.mp3");

  if (currentWord.length == 0 || currentWord.length < 1) {
    setTimeout(() => {
      successWordSound.play();
    }, 1000)
  }
}
