const DOMselectors = {
  form: document.getElementById("card-form"),
  FruitNameform: document.getElementById("fruit-name"),
  FruitImgform: document.getElementById("image"),
  FruitDescform: document.getElementById("Color"),
  button: document.getElementById("btn"),
};

function makeFruit() {
  const make = {
    name: DOMselectors.FruitNameform.value,
    img: DOMselectors.FruitImgform.value,
    desc: DOMselectors.FruitDescform.value,
  };
  return make;
}

function addcard(Fruit) {
  const cardHolder = document.getElementById("card_holder");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = ` <h1 class="card-title">${Fruit.name}</h1>
    <img src="${Fruit.img}" alt="" class="pic">
    <h2 class="animal-desc">${Fruit.desc}</h2>
    <button class="btnd">Remove the Card</button>`;
  cardHolder.insertAdjacentElement("afterbegin", card);

  card.querySelector(".btnd").addEventListener("click", () => {
    card.remove();
  });
}

DOMselectors.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const Concard = makeFruit();
  addcard(Concard);
  emptytbox();
});

function emptytbox() {
  DOMselectors.FruitNameform.value = "";
  DOMselectors.FruitImgform.value = "";
  DOMselectors.FruitDescform.value = "";
}
