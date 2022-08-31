






mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1")
// grab the largeview and card1 elements to manipulate later //
// make osmething happen when we click on them //

document.addEventListener("keyup", hideBigImage);

card1.addEventListener("click", makeBigImage)
mybigimage.addEventListener("click", hideBigImage)

function makeBigImage() {
    //first be sure that the largeview element has no leftover HTML // 
    mybigimage.innerHTML = "";
    //add an img element as a child of this largeview
    bigimage = document.createElement("img");
    bigimage.src ="2_of_clubs.png";
    // make this new element a child of the div for the big image
    mybigimage.appendChild(bigimage);
    // remove the dont show so that the div element is displayed
    mybigimage.classList.remove("dontshow");

}
function hideBigImage() {
    //just add dontshow class back to that div and the css rule for dontshow takes effect again.
    mybigimage.classList.add("dontshow")
}