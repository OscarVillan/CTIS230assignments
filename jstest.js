// Step 1: Get the Element that we want to affect and // store it away so that were ready to respond to the // event


ourText = document.getElementById("newtext");

// This code asks the document for the element
// that has id newtext and stores the response in
// something named ourText

// Step 2: We want to tell ourText to change when
// the mouse moves over it, so we attach an
// event named onMouseOver listener to ourText 
// common even names pg 604

ourText.addEventListener("mouseover", onMouseOver);
// Here's our event listener
function onMouseOver() {
    ourText.style.color = "green";
    ourText.style.fontsize = "3em";
    ourText.innerHTML = "And we changed the text";
}
ourText.addEventListener("mouseout", onmouseout);
function onmouseout() {
    ourText.style.color = "black";
    ourText.style.fontSize = "1em";
    ourText.innerHTML = "<strong> And we changed it back </strong>";
}
// Get the button with the Id "button1" and store it away
ourButton = document.getElementById("button1");
// tell the button which even listener is attached to it
// when user clicks on it
ourButton.addEventListener("click", onclick);
// write the even handler
myCard = document.getElementById("card");
function onclick() {
    ourText.innerHTML = "I clicked the button";
    ourText.style.fontsize = "2em";
    myCard.style.display = "block";
}
// Get the textfield with the id myinput.
ourInput = document.getElementById("myinput"); // this contains the new text
ourHeading = document.getElementById("header"); // what were going to modify

// tell the textfield what event listener is connected  to its events
ourInput.addEventListener("change", changeText); // the text in the field changes
ourInput.addEventListener("blur", changeText); // the text field loses focus.
// the text field has focus when were typing into it
// when we click out of it, the text field loses focus, and that generates
// a blur event 

function changeText() {
    // Get the text the user entered
    newtext = ourInput.value; //we ask ourInput 
    ourHeading.innerHTML = newtext;
}

myCardImage = document.getElementById("cardimage");
myCard.addEventListener("click", changeImage);

function changeImage() {
    if (myCard.style.position == "") {//this asks whether the myCard div is in its original position.
        myCard.style.position = "absolute";
        myCard.style.top = "100px";
        myCard.style.left = "100px";
        myCardImage.style.width = "80px"; // make the width of the image 80 px not the div because the image will spill out
        myCardImage.src = "2_of_clubs.png";
    }
    else {
        myCard.style.position = "";
        myCard.style.top = "";
        myCard.style.left = "";
        myCardImage.style.width = "";
        myCardImage.src = "2_of_diamonds.png";
    }
}