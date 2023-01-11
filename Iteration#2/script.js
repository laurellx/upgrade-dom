// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement("div");
console.log(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newParagraph = document.createElement("p");
newDiv.append(newParagraph);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const anotherDiv = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const anotherParagraph = document.createElement("p");
  anotherDiv.append(anotherParagraph);
}
console.log(anotherDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const andAnotherP = document.createElement("p");
andAnotherP.innerText = "Soy dinámico!";
document.body.append(andAnotherP);

console.log(andAnotherP);

// 2.5 Inserta en el h2 con la clase.fn - insert - here el texto 'Wubba Lubba dub dub'.

const findElement = document.getElementsByClassName("fn-insert-here");
console.log(findElement);

const rickSaid = (findElement[0].innerText = "Wubba Lubba dub dub");
console.log(rickSaid);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const newList = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const element = apps[i];
  const listItem = document.createElement("li");
  listItem.innerText = element;
  newList.append(listItem);
  document.body.append(newList);
}
console.log(newList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll(".fn-remove-me");
console.log(elementsToRemove);
for (let toRemove of elementsToRemove) {
  toRemove.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con.appendChild.

const findDivs = document.querySelectorAll("div.fn-insert-here");
console.log(findDivs);

const middleParagraph = document.createElement("p");
middleParagraph.innerText = "Voy en medio!";

document.body.insertBefore(middleParagraph, findDivs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

for (let singleDiv of findDivs) {
  const newP = document.createElement("p");
  newP.innerText = "Voy dentro!";

  singleDiv.append(newP);
}
