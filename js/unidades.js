document.addEventListener("DOMContentLoaded", () => {

  const proyecto = JSON.parse(localStorage.getItem("proyectoSeleccionado"));

  if (!proyecto) {
    window.location.href = "index.html";
    return;
  }

  // Título
  document.getElementById("tituloProyecto").textContent = proyecto.nombre;

  const contenedor = document.getElementById("listaUnidades");

  // Crear tarjetas de unidades
  proyecto.unidades.forEach(u => {

    const card = document.createElement("a");
    card.className = "proyecto-card";
    card.href = u.link;

    card.innerHTML = `
      <h3>${u.nombre}</h3>
      <span class="ver">Ingresar</span>
    `;

    contenedor.appendChild(card);
  });

});