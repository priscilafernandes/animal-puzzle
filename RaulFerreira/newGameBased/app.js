buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

const controleNext = document.getElementById("next");
const controlePrev = document.getElementById("previous");
const theBody = document.getElementsByTagName("body")[0];

const animals = [
    {img: 'assets/img/animal-bird.svg', color: '#797979', word: 'bird', sound: 'animalSounds/passaros.mp3'},
    {img: 'assets/img/animal-cat.svg', color: '#969696', word: 'cat', sound: 'animalSound/gato.mp3'} 
]

const winSound = new buzz.sound('');
const error = new buzz.sound('');
let alphabetSounds = {};
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

for(let i in alphabet){
    let letter = alphabet[i];
    alphabetSounds[letter] = new buzz.sound('kid/'+letter);
}

let idx = 0
const container = document.getElementById("container");
const picture = document.getElementById("picture");
const models = document.getElementById("models");
const letters = document.getElementById("letters");

controleNext.addEventListener('click', ()=>{
    refreshGame();
    buildGame(++idx);
    return false
})
controlePrev.addEventListener('click', () =>{
    refreshGame();
    buildGame(--idx);
    return false
})

let refreshGame = () =>{
    models.innerHTML('');
    letters.innerHTML('');
}

const buildGame = (x) =>{
    if(x > animals.length -1){
        idx = 0;
    }
    if(x < 0){
        idx = animals.length -1
    }

    let game = animals[idx]
    let score = 0;

    let animalSound = new buzz.sound(game.sound);
    animalSound.play();

    theBody.pause()
    theBody.style.backgroundColor = game.color

    picture.setAttribute("src", game.img)
    picture.removeEventListener('click')
    picture.addEventListener('click', ()=>{
        animalSound.play();
    })

    var modelLetters = game.word.split('');

    for(let i in modelLetters){
        var letter = modelLetters[i];
        models.append('<li>'+letter+'</li>');
    }

    // var letterWidth = models.

}