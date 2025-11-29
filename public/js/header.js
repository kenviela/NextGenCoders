// Cargar el header a la vista
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/Header/Header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error cargando header:", error));
});
