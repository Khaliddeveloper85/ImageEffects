var blur = document.getElementById("blur");

var invert = document.getElementById("invert");

var huerotate = document.getElementById("huerotate");

var saturate = document.getElementById("saturate");

var image = document.getElementById("img");

var uploadinp = document.getElementById("adr");


function enableEffects() {
  image.style.filter =
  "blur(" + blur.value + "px)" + "invert(" + invert.value + "%)" + "hue-rotate(" + huerotate.value + "deg)" + "saturate(" + saturate.value + "%)";
}

function uploadImg() {
  image.setAttribute("src",adr.value);

}
