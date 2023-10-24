/* const form = document.querySelector("#form");
console.log(form);
const firstName = document.querySelector(".first-name");
DOMSelectors = {
    form: document.querySelector
}

DOMSelectors.form.addEventListener("submit", function () {
    console.log(DOMSelectors)
    event.preventDefault();
});
 */

const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("Box"),
    points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
    background.style.backgroundColor = "blue";
    text.innerHTML = "This is now Blue";
    text.style.fontSize = "40px";
}
backgroundAndText(DOMSelectors.box, DOMSelectors.text);