const parrafos = document.querySelectorAll(".parrafo");
const seccion = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".seccion_papelera");

parrafos.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    item.classList.add("dragging");
    event.dataTransfer.setData("id", item.id);
    const imagen = document.querySelector(".imagen_fantasma");
    event.dataTransfer.setDragImage(imagen, 0, 0);
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

seccion.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  seccion.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

papelera.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
});

papelera.addEventListener("drop", (event) => {
  const id_parrafo = event.dataTransfer.getData("id");
  document.getElementById(id_parrafo).remove();
});
