function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("img-1").src = "./images/mobile/image-curiosity.jpg";
        document.getElementById("img-2").src = "./images/mobile/image-deep-earth.jpg";
        document.getElementById("img-3").src = "./images/mobile/image-fisheye.jpg";
        document.getElementById("img-4").src = "./images/mobile/image-from-above.jpg";
        document.getElementById("img-5").src = "./images/mobile/image-grid.jpg";
        document.getElementById("img-6").src = "./images/mobile/image-night-arcade.jpg";
        document.getElementById("img-7").src = "./images/mobile/image-pocket-borealis.jpg";
        document.getElementById("img-8").src = "./images/mobile/image-soccer-team.jpg";
    } else {
        document.getElementById("img-1").src = "./images/desktop/image-curiosity.jpg";
        document.getElementById("img-2").src = "./images/desktop/image-deep-earth.jpg";
        document.getElementById("img-3").src = "./images/desktop/image-fisheye.jpg";
        document.getElementById("img-4").src = "./images/desktop/image-from-above.jpg";
        document.getElementById("img-5").src = "./images/desktop/image-grid.jpg";
        document.getElementById("img-6").src = "./images/desktop/image-night-arcade.jpg";
        document.getElementById("img-7").src = "./images/desktop/image-pocket-borealis.jpg";
        document.getElementById("img-8").src = "./images/desktop/image-soccer-team.jpg";
    }
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes