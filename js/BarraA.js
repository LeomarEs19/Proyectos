const abrirModal = document.getElementById("abrirModal");
const miModal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");
const imagenModal = document.getElementById("imagenModal");
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var img4 = document.querySelector(".img4")
var img5 = document.querySelector(".img5")

abrirModal.addEventListener("click", function () {
  miModal.style.display = "block";
});

cerrarModal.addEventListener("click", function () {
  miModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == miModal) {
    miModal.style.display = "none";
  }
});

function setActive(img){
  var imagenes = document.querySelectorAll(".img");
  imagenes.forEach(function(imagenes){
      imagenes.classList.remove("active");
  });
  img.classList.add("active");
}

img1.addEventListener("click", function(){
  imagenModal.src = ""
  imagenModal.src = img1.src
  setActive(img1)
})
img2.addEventListener("click", function(){
  imagenModal.src = ""
  imagenModal.src = img2.src
  setActive(img2)
})
img3.addEventListener("click", function(){
  imagenModal.src = ""
  imagenModal.src = img3.src
  setActive(img3)
})
img4.addEventListener("click", function(){
  imagenModal.src = ""
  imagenModal.src = img4.src
  setActive(img4)
})
img5.addEventListener("click", function(){
  imagenModal.src = ""
  imagenModal.src = img5.src
  setActive(img5)
})
