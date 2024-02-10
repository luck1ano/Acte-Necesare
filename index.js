const acteDeProprietate = document.getElementById("acte-de-proprietate");
const checkedFromLocalStorage = JSON.parse(localStorage.getItem("actedeproprietate"));
let checked = false;

function checkState() {
if(checkedFromLocalStorge === "true") {
    checked = true;
} else if(checkedFromLocalStorage === "false") {
    checked = false;
}}

checkState();

acteDeProprietate.addEventListener("click", function() {
    if (checked === false) {
    acteDeProprietate.style = "background: greeen;";
    checked = true;
    } else if (checked === true) {
        acteDeProprietate.style = "color: red;";
        checked = false;
    }
    localStorage.setItem ("actedeproprietate", JSON.stringify(checked));
});