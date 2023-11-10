const DOMselectors = {
  form: document.getElementById("card-form"),
  FruitNameform: document.getElementById("fruit-name"),
  FruitImgform: document.getElementById("image"),
  FruitDescform: document.getElementById("Color"),
  button: document.getElementById("btn"),
};

function makeFruit() {
  const make = {name: DOMselectors.FruitNameform.value,img: DOMselectors.FruitImgform.value,desc: DOMselectors.FruitDescform.value,
  };
  return make;
}

function addcard(Fruit) {
  const cardHolder = document.getElementById("card_holder");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = ` <h1 class="cardtitle">${Fruit.name}</h1>
    <img src="${Fruit.img}" alt="" class="picture">
    <h2 class="fruitdesc">${Fruit.desc}</h2>
    <button class="btnremove">Remove the Card</button>`;
  cardHolder.insertAdjacentElement("afterbegin", card);

  card.querySelector(".btnremove").addEventListener("click", () => {
    card.remove();
  });
}

DOMselectors.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const makey = makeFruit();
  addcard(makey);
  cleartext();
});

function cleartext() {
  DOMselectors.FruitNameform.value = "";
  DOMselectors.FruitImgform.value = "";
  DOMselectors.FruitDescform.value = "";
}
