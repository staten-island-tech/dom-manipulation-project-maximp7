const form = document.querySelector("#form");
console.log(form);
const firstName = document.querySelector(".first-name");
DOMSelectors = {
    form: document.querySelector
}

DOMSelectors.form.addEventListener("submit", function () {
    console.log(DOMSelectors)
    event.preventDefault();
});
