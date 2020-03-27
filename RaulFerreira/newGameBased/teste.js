
const animals = [
    {img: 'assets/img/animal-bird.svg', color: '#797979', word: 'bird'},
    {img: 'assets/img/animal-cat.svg', color: '#969696', word: 'cat'} 
]
const doc = document.getElementById("teste")
for(i=0;i<animals.length;i++){
    let image = animals[i].img;
    let divImage = document.createElement("div")
    doc.appendChild(divImage)
    let images = document.createElement("img")
    divImage.style = "border: 1px solid red; text-align: center; background-color: black"
    images.src = image
    images.style = "width: 70%; height: 70%; border: 10px solid white; background-color: #3131314b"

    divImage.appendChild(images)
}