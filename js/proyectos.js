let proyectos = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/proyectos.json")
    .then(res => res.json())
    .then(data => {
      proyectos = data.proyectos;
      pintarProyectos(proyectos);
    })
    .catch(err => console.error("Error cargando proyectos:", err));

  const input = document.getElementById("buscador");

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase().trim();

    const filtrados = proyectos.filter(p =>
      p.id.toLowerCase().includes(texto) ||
      p.nombre.toLowerCase().includes(texto) ||
      p.cliente.toLowerCase().includes(texto)
    );

    pintarProyectos(filtrados);
  });
});


function pintarProyectos(listaProyectos) {
  const contenedor = document.getElementById("listaProyectos");
  contenedor.innerHTML = "";

  if (listaProyectos.length === 0) {
    contenedor.innerHTML = "<p class='vacio'>No se encontraron proyectos</p>";
    return;
  }

  listaProyectos.forEach(p => {
    const card = document.createElement("a");
    card.className = "proyecto-card";
    card.href = p.link;
    card.target = "_self";

    card.innerHTML = `
      <img src="${p.imagen || 'assets/img/placeholder.png'}">
      <div class="proyecto-info">
        <h3>${p.codigo}</h3>
        <p>${p.nombre}</p>
        <span>${p.cliente}</span>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

