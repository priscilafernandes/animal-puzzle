buzz.defaults.formats = ['mp3'];
buzz.defaults.preload = 'metadata';

const controleNext = document.getElementById("next");
const controlePrev = document.getElementById("previous");
const theBody = document.getElementsByTagName("body")[0];

const animals = [
    { img: 'assets/img/animal-bird.svg', color: '#797979', word: 'bird', sound: 'animalSounds/passaros.mp3' },
    { img: 'assets/img/animal-cat.svg', color: '#969696', word: 'cat', sound: 'kid/gato' }
]
console.log(animals)
const winSound = new buzz.sound('kid/animeWow').preload = true
const error = new buzz.sound('kid/Nani');
let alphabetSounds = {};
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
console.log(alphabet)
for (let i in alphabet) {
    let letter = alphabet[i];
    alphabetSounds[letter] = new buzz.sound('kid/' + letter);
    console.log("entrou no for 1")
}
function startMaking(){
    console.log("entrou na func ")
    let idx = 0
    const container = document.getElementById("container");
    const picture = document.getElementById("picture");
    const models = document.getElementById("models");
    const letters = document.getElementById("letters");

    console.log(letters)

    theBody.addEventListener("selectstart", () => {
        return false
    })

    controleNext.addEventListener('click', () => {
        refreshGame();
        buildGame(++idx);
        return false
    })
    controlePrev.addEventListener('click', () => {
        refreshGame();
        buildGame(--idx);
        return false
    })

    let refreshGame = () => {
        models.innerHTML = ""
        letters.innerHTML = ""
    }

    const buildGame = (x) => {
        console.log("entrou na biuld game")
        if (x > animals.length - 1) {
            idx = 0;
        }
        if (x < 0) {
            idx = animals.length - 1
        }

        let game = animals[idx]
        let score = 0;

        let animalSound = new buzz.sound(game.sound);
        animalSound.play();

        

        theBody.pause = true
        theBody.style = `background-color: ${game.color}`
        // theBody.animate({
        //     backgroundColor: game.color
        // })

        picture.setAttribute("src", game.img)
        picture.removeEventListener('click', () =>{
            picture.addEventListener('click', () => {
                animalSound.play();
            })
        })
        

        var modelLetters = game.word.split('');

        for (let i in modelLetters) {
            console.log("aqui letras")
            var letter = modelLetters[i];
            let li = document.createElement("li")
            let textNode = document.createTextNode(letter)
            li.appendChild(textNode)
            models.appendChild(li)
        }

        var letterWidth = models.querySelectorAll('li')
        letterWidth = models.offsetWidth

        models.style = `width = ${letterWidth * models.querySelectorAll('li').length}`

        var letterss = game.word.split('')
        var shuffled = letterss.sort(() => {
            return Math.random() < 0.5 ? -1 : 1
        })

        for (var i in shuffled) {
            let li = document.createElement("li")
            let textNode = document.createTextNode(shuffled[i])
            li.setAttribute("class","draggable")
            console.log(li)
            li.appendChild(textNode)
            letters.appendChild(li)
        }

        letters.querySelectorAll('li').forEach((i) => {
            console.log("show")
            var position = {
                top: (models.offsetTop) + (Math.random() * 100) + 80,
                left: (models.offsetLeft) - (container.offsetLeft) + (Math.random() * 20) + 1 * letterWidth,
                angle: (Math.random() * 30) - 10
            }
            console.log(i.textContent)
            console.log(letterWidth)
            i.style = `
            top:${position.top}px;
            transform: rotate(${position.angle}deg);
            left:${position.left}px
            `
            i.addEventListener("click", ()=>{
                let letra = i.textContent;
                if(alphabetSounds[letra]){
                    alphabetSounds[letra].play()
                }
            })

        })
        let letterItem = document.getElementsByClassName("draggable")
        let letraDrop = modelLetters.textContent;

        let mouseOfSet = {x:0,y:0}

        let isMouseDown = false;
        function onMouseDown(e,item){
            console.log("Mouse down")
            isMouseDown = true;
            mouseOfSet = {x: item.offsetLeft - e.clientX, y: item.offsetTop - e.clientY}
            item.style.backgroundColor = "rgba(255, 255, 255, 0.274)"
        }
        function onMouseMove(e,item){
            e.preventDefault();
           
            if(isMouseDown == true){
                item.style.left = e.clientX + mouseOfSet.x + "px";
                item.style.top = e.clientY + mouseOfSet.y + "px"
            }
        }
        function onMouseUp(e,item){
            console.log("mouse up")
            isMouseDown = false;
            if(letterItem == letraDrop){

            }else{
                error.play();
            }
            item.style.backgroundColor = "rbga(255,255,255)"
        }

        for(let i = 0; i < letterItem.length; i++){
            item = letterItem[i]

            item.addEventListener("mousedown", (e)=>{
                onMouseDown(e,item)
            })
            document.body.addEventListener("mousemove", (e)=>{
                onMouseMove(e, item)
            })
            item.addEventListener("mouseup", (e)=>{
                onMouseUp(e,item)
            })

        }

    }
}
startMaking();