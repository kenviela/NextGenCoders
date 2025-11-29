// llamar al footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/Footer/Footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error cargando footer:", error));
});
