const body = document.querySelector("body");

const dog = document.querySelector(".dog");
console.log(dog);

const dogName = "Perro";
console.log("dogName", dogName);

const newDog = document.createElement("div");
newDog.classList.add("dog");

const image = document.createElement("img");
image.src = "https://picsum.photos/id/237/500/500";
image.alt = "Dog";

const input = document.createElement("input");
input.placeholder = "Escribe el nombre del perro";
input.id = "puppyName";

const buttonInput = document.createElement("button");
buttonInput.textContent = "Agregar nombre del perro";

const h2 = document.createElement("h2")
h2.textContent = "Hola, soy un perro bebé";

const pPuppyName = document.createElement("h3");
pPuppyName.id = "name";

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum hic tempora reiciendis reprehenderit laborum id nesciunt, aliquam beatae obcaecati. Rem quaerat eum animi laudantium hic unde cum excepturi natus quasi?"
p.classList.add("moreInfo");

const button = document.createElement("button");
button.textContent = "Click para saber más sobre mí";

button.classList.add("button");

body.appendChild(newDog);
newDog.appendChild(image);
newDog.appendChild(input);
newDog.appendChild(buttonInput);
newDog.appendChild(h2);
newDog.appendChild(pPuppyName);
newDog.appendChild(p);
newDog.appendChild(button);

const showMore = () => document.querySelector(".moreInfo").style.display = "block";

const addName = () => {
    const name = document.querySelector("#puppyName").value;
    document.querySelector("#name").textContent = `Hola soy ${name}`;
}

document.querySelector(".button").addEventListener("click", showMore);
buttonInput.addEventListener("click", addName);