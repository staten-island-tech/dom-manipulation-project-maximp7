const DOMselectors = {
  form: document.getElementById("form"),
  FruitNameform: document.getElementById("fruit-name"),
  FruitImgform: document.getElementById("image"),
  FruitDescform: document.getElementById("Color"),
  title: document.querySelectorAll("card-title"),
  image: document.querySelectorAll("pic"),
  desc: document.querySelectorAll(".fruit-desc"),
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

function addcard(Animal) {
  document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", `div class="card">
  <h1 class="card-title">${Fruit.name}</h1>
  <img src="${Fruit, img}" alt="" class-"pic">
  <h2 class="animal-desc">${Animal.desc}</h2>
  <button class="btnd">Remove the Card</button>
  </div>`);
}

const btnr = document.querySelector(".btnd");
btnr.addEventListener("click", (event) => {
  btnr.parentElement.remove(Fruit)
})


DoMselectors.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const Concard = makeFruit();
  addcard(Concard);
  emptytbox();
});

function emptytbox() {
  DOMSelectors.name_input.value = null;
  DOMSelectors.color_input.value = null;
  DOMSelectors.taste_input.value = null;
}
