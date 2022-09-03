displaytext = document.getElementById("hiddentext");

button = document.getElementById("button");

contact = document.getElementById("contacttext");

button.addEventListener("click", onclick);

button.addEventListener("mouseout", onmouseout);

function onclick() {
    displaytext.style.color = "black";
}
function onmouseout() {
    displaytext.style.color = "rgb(210,198,183)";
    ourtext.style.color = "black";
}
ourtext = document.getElementById("contacttext");

ourtext.addEventListener("mouseover", onmouseover);
ourtext.addEventListener("mouseout", onmouseout);

function onmouseover() {
    ourtext.style.color = "red";
}

textentry = document.getElementById("textarea");

textentry.addEventListener("change", onchange);

function onchange() {
    newtext = textarea.value;
    contact.innerHTML = newtext;
}