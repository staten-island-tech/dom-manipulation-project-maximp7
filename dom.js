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
// foods

const DOMSelectors = {
         btn:document.getElementById("btn"),
         input:document.querySelector(`#input`),
       box:document.getElementById("container"),
}
DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", ` <div><p id="card"> ${task}.
     <button class="btnd">-</button> </p> </div> `)
erase();
    erase();
}

const remove = document.querySelectorAll(".btnd");
remove.forEach((buttond) => {
    buttond.addEventListener("click", (event) => {
        event.target.parentElement.remove();
        backgroundAndText(DOMSelectors.box, DOMSelectors.text);
    });
})
