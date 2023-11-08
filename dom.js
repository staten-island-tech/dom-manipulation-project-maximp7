const DOMSelectors = {
  card_holder: document.getElementById("card_holder"),
  card_form: document.getElementById("card_form"),
  name_input: document.getElementById("name_input"),
  color_input: document.getElementById("color_input"),
  taste_input: document.getElementById("taste_input"),
  btn: document.getElementById("btn"),
};

DOMSelectors.card_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const new_card = {
    name: DOMSelectors.name_input.value,
    color: DOMSelectors.color_input_value,
    taste: DOMSelectors.taste_input_value,
  };
  add_card(new_card);
  clear_fields();
});

function add_card(card) {
  DOMSelectors.card_holder.insertAdjacentHIML(
    "afterbegin",
    `<div class="card">
        <h1 class="card-title">${card.name}</h1>
        <h2 class="age">${card.color}</h2> 
        <img src="${card.taste}" alt="">
        <button class="remove">Remove</button>
        </div>`
  );

  const button = document.querySelector(".remove");
  button.addEventListener("click", (event) => {
    button.parentElement.remove();
  });
}

DOMSelectors.btn.addEventListener("click", function () {
  DOMSelectors.input.value = "";
});

function clear_fields() {
  DOMSelectors.name_input.value = null;
  DOMSelectors.color_input.value = null;
  DOMSelectors.taste_input.value = null;
}
