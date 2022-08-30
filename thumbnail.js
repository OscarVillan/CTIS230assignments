mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1")
// grab the largeview and card1 elements to manipulate later //
// make osmething happen when we click on them //

card1.addEventListener("click", makeBigImage)
mybigimage.addEventListener("click", hideBigImage)

function makeBigImage() {
    //first be sure that the largeview element has no leftover HTML // 
    mybigimage.innerHTML = "";
    //add an img element as a child of this largeview
    bigimage = document.createElement("img")
    bigimage.src ="2_of_clubs.png";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");

}