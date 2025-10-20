class Musica {
  constructor({ id, title, description, imgUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.musicas = [];
    this.contadorId = 1;
  }
  getAllMusicas() {
    return this.musicas.slice();
  }
  createMusica({ title, description, imgUrl }) {

    const musica = new Musica({
      id: this.contadorId++,
      title,
      description,
      imgUrl: imgUrl || ""
    });
    this.musicas.push(musica);
    return musica;
  }
  // EXTRA: deleteActivity
  deleteMusica(id) {
    const i = this.musicas.findIndex(a => a.id === Number(id));
    if (i === -1) return false;
    this.musicas.splice(i, 1);
    return true;
  }
}

const repo = new Repository();

const formulario = document.getElementById("form-actividad");
const lista = document.getElementById("tarjetas");
if (lista) lista.classList.add("content");

// ==================== ACTIVIDAD 02 ====================
function musicaToElement(musica) {
  const { id, title, description, imgUrl } = musica;

  const tarjeta = document.createElement("section");
  tarjeta.setAttribute("data-id", String(id));

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const h4 = document.createElement("h4");
  h4.textContent = "Tarjeta musical";
  
    const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = `Portada de ${title}`;
  img.width = 250;

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = description;
  ul.appendChild(li);

  const acciones = document.createElement("div");
  acciones.className = "acciones";

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.setAttribute("data-accion", "borrar");
  btn.textContent = "Borrar";
  acciones.appendChild(btn);

  tarjeta.appendChild(h3);
  tarjeta.appendChild(h4);
  tarjeta.appendChild(img);
  tarjeta.appendChild(ul);
  tarjeta.appendChild(acciones);

  return tarjeta;
}

// ==================== ACTIVIDAD 03 ====================
function renderAll() {
  if (!lista) return;
  lista.innerHTML = "";

  const actividades = repo.getAllMusicas();
  if (actividades.length === 0) {
    lista.innerHTML = "<p>No hay tarjetas todavia.</p>";
    return;
    }

  const nodos = actividades.map(musicaToElement);
  nodos.forEach(n => lista.appendChild(n));
}

renderAll();

// ==================== ACTIVIDAD 04 ====================
function onSubmitCrearActividad(e) {
  e.preventDefault();
  if (!formulario) return;

  const inputTitulo = formulario.querySelector('input[name="titulo"]');
  const inputDescripcion = formulario.querySelector('input[name="descripcion"]');
  const inputImagen = formulario.querySelector('input[name="imagen"]');

  const title = inputTitulo.value.trim();
  const description = inputDescripcion.value.trim();
  const imgUrl = inputImagen.value.trim();


  try {
    repo.createMusica({ title, description, imgUrl });
    renderAll();
    formulario.reset();
  } catch (err) {
    alert("Error al crear actividad");
  }
}

// ==================== ACTIVIDAD 05 ====================
if (formulario) {
  formulario.addEventListener("submit", onSubmitCrearActividad);
}

// EXTRA: deleteActivity
if (lista) {
  lista.addEventListener("click", function (e) {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const btn = target.closest('button[data-accion="borrar"]');
    if (!btn) return;

    const tarjeta = btn.closest('section[data-id]');
    const id = tarjeta ? tarjeta.getAttribute('data-id') : null;

    if (id && confirm("¿Borrar esta tarjeta?")) {
      repo.deleteMusica(Number(id));
      renderAll();
    }
  });
}
