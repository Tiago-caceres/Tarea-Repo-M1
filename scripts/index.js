class Activity {
  constructor({ id, title, description, imgUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this._nextId = 1;
  }
  getAllActivities() {
    return this.activities.slice();
  }
  createActivity({ title, description, imgUrl }) {

    const activity = new Activity({
      id: this._nextId++,
      title,
      description,
      imgUrl: imgUrl || ""
    });
    this.activities.push(activity);
    return activity;
  }
  // EXTRA: deleteActivity
  deleteActivity(id) {
    const i = this.activities.findIndex(a => a.id === Number(id));
    if (i === -1) return false;
    this.activities.splice(i, 1);
    return true;
  }
}

const repo = new Repository();

const formulario = document.getElementById("form-actividad");
const lista = document.getElementById("tarjetas");
if (lista) lista.classList.add("content");

// ==================== ACTIVIDAD 02 ====================
function activityToElement(activity) {
  const { id, title, description, imgUrl } = activity;

  const tarjeta = document.createElement("section");
  tarjeta.setAttribute("data-id", String(id));

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const h4 = document.createElement("h4");
  h4.textContent = "Tarjeta musical";

  const portada = (imgUrl && imgUrl.trim()) ?
    imgUrl :
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEBAQEBIPFg8QEA8TDxASEA8VEBcQFREYFhUYFhYYHSggGBoxHBUVIjEhJyorLi4uFx84OD8tNygtMCsBCgoKDg0OGxAQGi0lHyUrLy0yLS8tLSstLS0uLS0tLS0vLS0tLS0tKy0tLSstMC0rLS0tKy0tLy0tLS0tNy0uLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYDBwECBAj/xAA9EAACAQMABwQIBAQGAwAAAAAAAQIDBBEFBhIhMUFRByJhcRMyUmKBkaGxI0JywTOy0fAkgpKTosIUNHP/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADQRAQACAQIFAQQJAwUAAAAAAAABAgMEEQUSITFRQWFxkcETIjJCgaGx0fAGI+EUFjNDUv/aAAwDAQACEQMRAD8A3iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABB6ya2Wlivx6n4jWY0YLaqy/y8lue94RzyZa07pml0GfUz/bjp5ns15pPtfrNtW1vSjHO6VaUpya/TFxSfxZFtq5+7C9xf09SI/uXmfd0/XdGrtY0hn1bXy9FUx/Oaf6q/sSJ4DpfNvjH7JbR3bDNNK4tYNfmlRqOLXlGWc/6jeurn1hFy/09H/Xf4x84/ZdNBa+2F1iMayp1Hj8KtiEsvkm+7J+CbJFM9Leqo1HC9Tg62rvHmOv+fis52V4AAAAAAAAAAAAAAAAAAAAAAAAANf8AaD2gxtdq2tHGV3vU57nCl+0p+HBc+hGzZ+XpXuu+GcJnPtky9KePP+Pb8Gl7i4nUnKpUlKVSbzKcm3Jvq2+JXzMzO8vXUpWleWsbRDGYbODIBgDK0ara9Xlk4xUnVt1xoVG3FL3JcYfDdv4HXHntT3K3WcLwanrttbzHzj1/VunVbWm2v6e1RlicUvSUZbqkH4rmvFbvjuLDHlreOjyOr0WXS22vHT0n0lOHREAAAAAAAAAAAAAAAAAAAAAANSdpPabs7dno+fe3xrXUXw6xpPr73Ll1UbLl9KrrRcP7ZMse6P3/AG+PhqKlcNccvx5kS1d3ocWea9J7PWmctk+JiY3gMAZAAAMD1aN0hVt6sa1CcoVYPMZR+qa5rqnuZtW01neGmbDTNSaXjeJb91G1shpChndG4p4VeknuzylH3X9OHi7PDljJHteH4hoLaTJt3rPaf56rMdUAAAAAAAAAAAAAAAAAAAACM1k0ZO5ta1vTrToyqwcVVhjK8H4Pg8YeGa2jeNnTDkjHeLTG+z5n1h0BcWNZ0LmGzLjGS305x9qEua+q54ZBtWaztL1OHPTNXmpKMNXZ3pVXHy6GJru64ss09z2wmmso5TGywreLRvDyXd3jux4830OtMe/WUHVazknkp38vH6WWc7Us+bOvLCt+mvM77y9ltdPhL5nK+PwsdPq5meW/xew4LEDKU1a01OzuadzTz3HipHO6dJ+tF/D5NJ8jfHeaW3hG1mmrqcU47fh7J9H0naXMatOFWm8wqQjOEusZLKfyZbRO8bw+f3pNLTW3eGYy1AAAAAAAAAAAAAAAAAAAAitY9X7e+ouhcw2ovfGS3VIS5ShLk/o+eUa2rFo2l1w5r4rc1JfPeu2plxo6pifft5tqlcRXdfuyX5Z+HPlneQ745rL0el1dM8eJ8K0aJTZnZ/2Y1a+zcXynTt3hwo741ai6vnCP1fhuZ2pg5utlbqeKfRb1wz18p7WTsYtpxlKxqTpVUt1OpJzoyfTL78fPL8jtbFHorseuvE/X6/q0tpLR1W3q1KFeDhVpS2ZwfFP91jDTW5po4T06StabXrFq9mGmjSXfHHVK03uXkiLPde0+zDnJhsBlvfshv3V0bGDbbt6tSlv9ndOP0nj4Flprb0eK41iimqmY+9ET8vkuxIVIAAAAAAAAAAAAAAAAAAAADz39lTr050a0IzpVFicJLKa/vnyMTG/dtW01nes9VP1c7MLK0uJ3D2qrU9q3hVScaS5frknnEnw3c1l864qxO6Zm1+XJSK9vPtXg6oIBpjt90fBVbO4SXpKkK1Ob5tQcXH+eX0I2fpMSueFTNotX3NZ6J0bUuKsKNKOZ1JKMV4+fJYy2+iI8zMztHddVrWlZyX6Vju3dq5qJZ20U60Y16+O9Kos0l4Rpvc14yy/LgScenrXv1lRavjGfNO1J5a+zv+MrZCUIrEYQUeihFL5I77Qq5taesyiNNauWV1GSqUaam1urU4xhVT5PaXHyeUaXxUt3hK0/ENRgnetp28T1j+e5h7L9D1LSneUKjzs3Xckk0pR9FBqS+DXk01yNMFJpExPlJ4rqqam1Mlf/AD8J3noux3VQAAAAAAAAAAAAAAAAAAAAAAAAdZzUU5SaUUm228JJcW3yQIjfpDQPahrFG+u4qk821tGUKcvblJpzkvDdFL9OeZXZ83NPR7DhXDpw498nefRm7LaUf/Jq1N2adHEfBzksv5Jr4m2lje0y58fvy4K0jtM/pDZvpSe8m7qYHO2BLaDnmM10kvqgJMAAAAAAAAAAAAAAAAAAAAAAAAh9ZNZbaxp7dxPvNP0dKOHVm17Mf3eEaXyVpG8pWl0eXU25ccfj6Q0nrfrxc3zcG/R22e7Qg3v6OpL878OHhzK/Lntf3PX6HheLS/W728/t4/VVjisll1BvVTu9lvdWpyh4bSakvs18SRprbX28qbjmGb6bmj7s7/h2bJd1gsXjWWleLqBm/wDJXUCe1c305S5Sm8eSWPvkCWAAAAAAAAAAAAAAAAAAAAAAAU7X3XiFjH0VJRndyWVBvuwi+Ep4+kefgcM2eKdI7rXhvDLaqea3Skevn2Q0dpLSFW4qSrV5ynVl60pfZLgl4LcV1rTad5eyxYceGnJjjaHkMOgGHNObjJSi8Si04tcU08pmYnZrasWiaz2letF6xKuox4V3u2En3pe518uJY4s8X6T3eL1/C8mnmbVjennx70zoe+Uqit61LMassKeMTjLHtcVwO6rWqnoi2UdnE8+26knP+n0As2j9j0cY090YrZS6YA9IAAAAAAAAAAAAAAAAAAAAAETrVpuNlaVbiWG4rFOL/NUluivLPHwTNMl+Su6To9NOpzVxx6/lHq+cLy7nVqTq1ZOVSpJynJ8W3/fAqZmZneX0HHjrjpFKRtEMBhlwZYALBqhqnX0hUcafcowa9LXksxj4Jfml4fPB1xYpySga7iGPS169bT2j+ejc2hdWbWwiqdvH8WUfxK8t9aXL1vyrdwWEWFMdaR0eO1Wtzam2+Senj0h5Y6J/x8av5IQlJ+NR7l/NJ/A6Irm4cHcz9LOoqUYx7kFHfzeXxXwAs2jYUlTXocejeWsZ4vjlvfnzA9QAAAAAAAAAAAAAAAAAAAAAGoO2vS+1WoWkXupRdWovfnugn4qKb/zkHV36xV6r+n9PtS2afXpHz/nsayIb0UuDLUAy2dtKrUp0qazUqzhCC96Ukl9WZiN52hpkyRjpN7dojd9L6v6Hp2lvSt6S7tOO+WN8pv1pPxbLalYrG0Pn2oz2z5JyW7ywaejKGKy9WKUZros7n9fsbOKKqafhHDxl8Mp8gPGpqrObfCSw14YwwM+r2kHRnKjLek8fDk/kBcITTSa4MDsAAAAAAAAAAAAAAAAAAAAD5o1y0mq19d121syrTUH1hDuQ/wCMUVWSZveZh77SVrp9LStunT856yr0r3fw3fUz9E0nXdekdGWFzF88eZrNJh3pqsdvXb3spo7rt2Q6P9LpKM2u7b0qlTw2niEf52/gSNNXe+/hUcby8mm5Y+9O3zb4LF4149MQzQqrrFga/q6Fltbqnd6bP23gTFnbQhFLLWPzc/iBijpa1UspRlPg5PDeEBZNX7pVIScViCkkscM434+gEqAAAAAAAAAAAAAAAAAAAHWpHKay1lNZXFZ6Aae0/wBi0t87K5z0pXK3/wC5BfTZ+JHnBt9lb14ra075Y/nua507qjf2eXcW1WMFn8WK26WP1xyl8cM5zS0d0zHqceT7MoM1d0loPRV1c1PRWlKpUnzUV3UuspPuxXi2hyc3oTqfoY3m2388N+9meptXR9OrO4nTlXr+jzGmnswjHa3bT9Z97fuXDmSMWLk3U3ENfOqmsbdIXY7K549LP8Gp4pL5tAUC6u68Xsxgn453AZbajWqfxGlF8Yx/dgeyeiaTxmEXstPDSw8PgBdrenGMIxhGMYJLZjFJJLwSAyAAAAAAAAAAAAAAAAAAAAAqWs/aBZ2bcMutXW50qTTw/fnwj5b34HHJnrTp3lZ6ThWfUfW25a+Z+Uev6e1TZdsNXP8A6lLZ6OtJvHns/sR/9XPha/7ept/yT8P8sujq2gtLVIxr2sbe7k1jZk6cakm96U4YUm/eSe/cdKZMeSdpjaUPU6LV6SvNW3NX9PwbP0Zoyjb01St6VOnTjwjCKSz1fV+L3kmIiOylte1p3tO71mWoBHabn3FH2n9F/aAr0qKA5TSA7qqBaLN/h0/0R+wGYAAAAAAAAAAAAAAAAAAdak1FOUmlGKbbfBJb22GYiZnaGjtde0KvdTnStpyp2iyls5jUqLrJ8Un7Kxue/JW5dRa87V7PZ8P4RiwVi+WN7/lH88/BRcnBbTIAA3v2WazyvLaVKs83FtsxlJ8Z02u5Jvm9zT8k+ZY6fJz12nvDxfF9FGny81Ps2/KfWF2JCpAIPS9TNXHsxX13gR9VgR1etgDpTrgXmx/hU/8A5w/lQGcAAAAAAAAAAAAAAAAAAVTtQvJUtF3Ljuc/R08+7OaUv+OV8TjnnbHKx4TSLaum/p1+EdPzfPe2Vuz2/P1djDYAAXvsZrOOkXFcJ29VSXLdKMk/p9STpZ+upOO1idNE+LR828iweQAILTMcVU+sF88tf0Aj5gQWnq2wopetOaivuwMlpT3JgbCtliEF0jH7AZAAAAAAAAAAAAAAAAAABX9fdEyutHXNGCbqOCnTS4udOSmorz2cfE55a81ZhK0WaMOet57fv0fM0plfs9lN3opVMrx5mkxsk48kXhkNXUDDafYnoSW1WvpJqGy6NHP5m2nUa8FiKz4voTNLTvZ5vj2piYrgj3z8m2ia80AQunfXh+l/cCNYFU1mlm5t49I1JP4uKX2YEzaR7qAvsVuSA5AAAAAAAAAAAAAAAAAAADUvaR2Yzqznd6PSc5tyrW2VHMnxlTb3ZfFxfjjoR8mHfrC20fEeSOTJ29JadvKNWhNwqwqU6i4wqQlCa+EkcJp6StaaiPtVlKaA0ZeXktm2t6lXfhzisU1+qcu6vma/QTPZ2nitccfXbR1c7I/Vnf1U+boUW8eUqjSfmkl5namlj70q/UcetMbYa7e2ev5NpWttCnCNOnGMacEowhFYikuSRKiNukKC1ptM2tO8yymWoBC6efeh+l/cCL2gKhpmW1er3YQj9XL9wLJo5Z2F1lFfNgXkAAAAAAAAAAAAAAAAAAcOQHV1V1DOzo7qC5g2Yat1Re6Tg/NJ/cBG/orcpRS6LGAO6v6ftIMOyu4dQzs7KvEMO3pUBW9J3W1Jv5eQETVusAVja268p9ZfTggLboRZq0l78X8t/wCwF3AAAAAAAAAAAAAAAAAAADjAHGyui+QD0a6L5IB6NdF8kA2F0XyA52V0QDAHj0tX2abXOW74c/78QKhe1gGg7N1HUry/h0IzcejqKOV8uPyArFgsy+IF01Wp5rp+xCT/AOv/AGAt4AAAAAAAAAAAAAAAAAAAAAAAAAAAIDSdXbm0uEdy/cCvX1lUlOMIrfOSinyWXjLAttxaxo2dWnD1YUKvm3sNtvxbywNbaNp7wLxqlT31X4QXzb/oBZAAAAAAAAAAAAAAAAAAAAAAAAAAA4YFcrUZ0X+Ilst4jUXqvz9l/wB7wM3pobm0srg+YHn0vpT/AA1ePHMMJ88Skov6SAqmipJMCy2d7KPqNLPHCX7gSlvpN8ZPK57kvsBMAAAAAAAAAAAAAAAAAAAAAAAAADpOnnnJeTAjrzRDqJr09eKe5pODWPJoCMp6qTjuV1Va5bVODfzWAM1PVdb1UqymmsOLhFLiBzHU+147Ms+E6i+zA9FPVuhHh6T/AHJv7sDOtC0ff/1yA98Y43b/AJgdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==";
  const img = document.createElement("img");
  img.src = portada;
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

  const actividades = repo.getAllActivities();
  if (actividades.length === 0) {
    lista.innerHTML = "<p>No hay tarjetas todavia.</p>";
    return;
    }

  const nodos = actividades.map(activityToElement);
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
    repo.createActivity({ title, description, imgUrl });
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
      repo.deleteActivity(Number(id));
      renderAll();
    }
  });
}
