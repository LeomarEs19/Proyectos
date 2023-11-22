const abrirModal = document.getElementById("abrirModal");
const miModal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");
const imagenModal = document.getElementById("imagenModal");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
var img4 = document.querySelector(".img4");
var img5 = document.querySelector(".img5");
var foto1 = document.querySelector(".foto1");
var foto2 = document.querySelector(".foto2");
var foto3 = document.querySelector(".foto3");
var foto4 = document.querySelector(".foto4");
var foto5 = document.querySelector(".foto5");

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

function setActive(img) {
  var imagenes = document.querySelectorAll(".imag");
  imagenes.forEach(function (imagen) {
    imagen.classList.remove("active");
  });
  img.classList.add("active");
}

miniaturas = [img1, img2, img3, img4, img5];

miniaturas.forEach(function (miniatura) {
  miniatura.addEventListener("mouseover", function () {
    abrirModal.src = miniatura.src;
    setActive(miniatura);
  });
});

function setActive(img) {
  var imagenes = document.querySelectorAll(".img");
  imagenes.forEach(function (imagen) {
    imagen.classList.remove("active");
  });
  img.classList.add("active");
}

miniaturas = [foto1, foto2, foto3, foto4, foto5];

miniaturas.forEach(function (miniatura) {
  miniatura.addEventListener("mouseover", function () {
    imagenModal.src = miniatura.src;
    setActive(miniatura);
  });
});
