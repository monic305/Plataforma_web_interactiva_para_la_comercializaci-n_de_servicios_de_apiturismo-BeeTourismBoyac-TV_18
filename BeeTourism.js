var PHONE = "573203065276";

function buscar(selector) {
    return document.querySelector(selector);
}

function formatearPrecio(numero) {
    return "$" + numero.toLocaleString("es-CO");
}

var PRODUCTOS = [
    {
        id: 1,
        nombre: "Miel multifloral pura",
        categoria: "Miel",
        imagen: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
        descripcion: "Miel cremosa de floración andina en frasco de 500 g. Notas florales suaves y aroma silvestre.",
        precio: 28000,
        estado: "ok"
    },
    {
        id: 2,
        nombre: "Miel unifloral de eucalipto",
        categoria: "Miel",
        imagen: "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?auto=format&fit=crop&w=800&q=80",
        descripcion: "Color ámbar oscuro con aroma mentolado y balsámico. Ideal para infusiones. Frasco de 500 g.",
        precio: 32000,
        estado: "low"
    },
    {
        id: 3,
        nombre: "Polen fresco deshidratado",
        categoria: "Polen",
        imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
        descripcion: "Gránulos multicolores ricos en proteínas, aminoácidos y vitaminas. Frasco de 250 g.",
        precio: 30000,
        estado: "ok"
    },
    {
        id: 4,
        nombre: "Tintura de propóleo al 20%",
        categoria: "Propoleo",
        imagen: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
        descripcion: "Extracto hidroalcohólico concentrado con propiedades antibacterianas. Gotero de 30 ml.",
        precio: 25000,
        estado: "ok"
    },
    {
        id: 5,
        nombre: "Hidromiel dulce artesanal",
        categoria: "Hidromiel",
        imagen: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=800&q=80",
        descripcion: "Bebida fermentada tradicional a base de miel pura y agua de manantial. Botella de 750 ml.",
        precio: 45000,
        estado: "low"
    },
    {
        id: 6,
        nombre: "Bálsamo labial de cera de abejas",
        categoria: "Biocosmeticos",
        imagen: "https://images.unsplash.com/photo-1608248597359-009804c7a52f?auto=format&fit=crop&w=800&q=80",
        descripcion: "Elaborado con cera virgen y miel. Hidratación profunda y protección natural, barra de 15 g.",
        precio: 12000,
        estado: "ok"
    },
    {
        id: 7,
        nombre: "Crema nutritiva con propóleo",
        categoria: "Biocosmeticos",
        imagen: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        descripcion: "Crema facial y corporal regeneradora para piel sensible con extracto de propóleo. Pote de 60 g.",
        precio: 26000,
        estado: "ok"
    },
    {
        id: 8,
        nombre: "Barniz ecológico de cera",
        categoria: "Barnices",
        imagen: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
        descripcion: "Nutre y protege superficies de madera de forma natural sin químicos tóxicos. Lata de 250 ml.",
        precio: 38000,
        estado: "out"
    }
];

var EXPERIENCIAS = [
    {
        emoji: "S",
        titulo: "Senderismo apícola",
        descripcion: "Recorrido guiado por el apiario y los senderos cercanos. Observamos las colmenas desde distancia segura y aprendemos sobre el comportamiento de las abejas.",
        duracion: "2 a 3 horas",
        publico: "Todo público",
        incluye: "Traje apícola incluido"
    },
    {
        emoji: "D",
        titulo: "Degustación de mieles",
        descripcion: "Compara color, aroma y sabor de mieles uniflorales de distintas flores con un guía experto. Una experiencia sensorial única para toda la familia.",
        duracion: "1 hora",
        publico: "Desde 8 años",
        incluye: "Hasta 6 variedades"
    },
    {
        emoji: "T",
        titulo: "Talleres de bioconstrucción",
        descripcion: "Aprende a construir con tierra, guadua y materiales locales. Descubre cómo se integran las construcciones ecológicas al entorno del apiario boyacense.",
        duracion: "4 horas",
        publico: "Cupos limitados",
        incluye: "Materiales incluidos"
    }
];

var GUIA = [
    {
        titulo: "Nuestra historia",
        contenido: [
            "Black and Yellow Apicultura comenzó con unas pocas colmenas en las afueras de Tibasosa, Boyacá. El fundador, apasionado por la naturaleza desde niño, decidió criar abejas como forma de conectarse con el territorio boyacense.",
            "Con el tiempo, el proyecto creció gracias al interés de visitantes que querían conocer de cerca el mundo de las abejas. Hoy el apiario es un espacio de aprendizaje, turismo responsable y producción artesanal.",
            "Actualmente contamos con más de 20 colmenas activas, 3 tipos de actividades turísticas y una línea de productos artesanales que llevamos directamente a hogares de todo Colombia."
        ]
    },
    {
        titulo: "Las abejas importan",
        contenido: [
            "Las abejas son responsables de polinizar aproximadamente el 75% de los cultivos de alimentos en el mundo. Sin su trabajo, frutas, verduras y flores simplemente no existirían como las conocemos.",
            "En Colombia, las abejas nativas y las abejas domésticas conviven con una gran variedad de flora. Proteger sus hábitats es una tarea urgente frente al cambio climático y el uso de pesticidas.",
            "En BeeTourism promovemos prácticas apícolas respetuosas: no usamos productos químicos, respetamos los ciclos naturales de la colmena y cosechamos solo el excedente que las abejas no necesitan."
        ]
    },
    {
        titulo: "Biología y cuidado",
        contenido: [
            "Una colmena funciona como un solo organismo vivo: una reina que puede poner hasta 2.000 huevos por día, cientos de zánganos en temporada de reproducción, y hasta 60.000 obreras que realizan todas las funciones de la colmena.",
            "Las abejas obreras cumplen diferentes roles según su edad: primero son nodrizas que cuidan a las larvas, luego constructoras de panal, después guardianas de la entrada, y finalmente pecoreadoras que buscan néctar y polen.",
            "El apicultor cuida la salud de la colmena, revisa que haya suficiente espacio, controla enfermedades naturalmente y cosecha miel, propóleo, cera y otros productos de forma ética y sostenible."
        ]
    },
    {
        titulo: "Boyacá y el apiturismo",
        contenido: [
            "Tibasosa, conocido como el municipio de los frutos del tiempo, ofrece un paisaje andino privilegiado para la apicultura. Sus frutales nativos, flores silvestres y clima templado crean condiciones ideales para las abejas.",
            "El apiturismo o turismo apícola es una tendencia mundial que une la experiencia rural, la educación ambiental y el consumo responsable. En Boyacá, esta actividad complementa la economía campesina y valoriza el territorio.",
            "Visitar un apiario no solo es una experiencia única, también contribuyes directamente a la conservación de las abejas y al sustento de familias campesinas que cuidan el ecosistema boyacense."
        ]
    },
    {
        titulo: "Preguntas frecuentes",
        contenido: [
            "Pregunta: ¿Me dan miedo las abejas, puedo ir? Respuesta: Sí. Todas las actividades se hacen con equipo de protección completo. Nuestros guías están entrenados para mantener la calma de las abejas y de los visitantes.",
            "Pregunta: ¿Cuánto cuesta la visita? Respuesta: Los precios varían según la actividad. Escríbenos por WhatsApp para cotizar según el número de personas y el tipo de experiencia que buscas.",
            "Pregunta: ¿Puedo ir con niños pequeños? Respuesta: Sí, los niños mayores de 5 años pueden participar en el senderismo y la degustación. Los menores de 5 años pueden venir como acompañantes en las áreas seguras del apiario."
        ]
    }
];

var carrito = {};

try {
    carrito = JSON.parse(localStorage.getItem("beetourism-carrito") || "{}");
} catch (e) {
    carrito = {};
}

function guardarCarrito() {
    try {
        localStorage.setItem("beetourism-carrito", JSON.stringify(carrito));
    } catch (e) {}
}

function etiquetaDisponibilidad(estado) {
    if (estado === "ok") {
        return '<span class="tag">Disponible</span>';
    } else if (estado === "low") {
        return '<span class="tag low">Pocas unidades</span>';
    } else {
        return '<span class="tag out">Agotado</span>';
    }
}

function crearTarjetaProducto(producto) {
    var cantActual = carrito[producto.id] || 0;
    var boton = '';

    if (producto.estado === "out") {
        boton = '<button class="add" disabled>No disponible</button>';
    } else {
        boton = '<div class="add-row">' +
            '<div class="qty-control">' +
            '<button data-qty-menos="' + producto.id + '" aria-label="Menos">&minus;</button>' +
            '<span class="qty-num" id="qty-' + producto.id + '">' + cantActual + '</span>' +
            '<button data-qty-mas="' + producto.id + '" aria-label="Más">+</button>' +
            '</div>' +
            '<button class="add" data-add="' + producto.id + '"><i class="fa-solid fa-cart-plus"></i> Agregar</button>' +
            '</div>';
    }

    return '<article class="slide">' +
        '<div class="ph">' +
        '<img class="product-image" src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
        '</div>' +
        '<h3>' + producto.nombre + '</h3>' +
        '<p>' + producto.descripcion + '</p>' +
        '<div class="row">' +
        '<span class="price">' + formatearPrecio(producto.precio) + '</span>' +
        etiquetaDisponibilidad(producto.estado) +
        '</div>' +
        boton +
        '</article>';
}

var track = buscar("#track");
var autoplay = null;

if (track) {
    var productosCarrusel = PRODUCTOS.filter(function (p) { return p.estado !== "out"; });
    track.innerHTML = productosCarrusel.map(crearTarjetaProducto).join("");

    var dotContainer = buscar("#carousel-dots");
    if (dotContainer) {
        productosCarrusel.forEach(function (_, indice) {
            var dot = document.createElement("button");
            dot.className = "dot" + (indice === 0 ? " active" : "");
            dot.setAttribute("aria-label", "Ir al producto " + (indice + 1));
            dot.setAttribute("data-indice", indice);
            dotContainer.appendChild(dot);
        });

        function actualizarPuntos() {
            var ancho = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 0;
            var indiceActual = Math.round(track.scrollLeft / ancho);
            document.querySelectorAll(".dot").forEach(function (dot, i) {
                dot.classList.toggle("active", i === indiceActual);
            });
        }

        track.addEventListener("scroll", actualizarPuntos);

        dotContainer.addEventListener("click", function (evento) {
            var dot = evento.target.closest("[data-indice]");
            if (!dot) return;
            var indice = parseInt(dot.getAttribute("data-indice"));
            var ancho = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 0;
            track.scrollTo({ left: ancho * indice, behavior: "smooth" });
        });

        dotContainer.addEventListener("mouseenter", function () { clearInterval(autoplay); });
        dotContainer.addEventListener("mouseleave", function () { autoplay = iniciarAutoplay(); });
    }

    var nextBtn = buscar("#next");
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            var ancho = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 0;
            track.scrollBy({ left: ancho, behavior: "smooth" });
        });
    }

    var prevBtn = buscar("#prev");
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            var ancho = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 0;
            track.scrollBy({ left: -ancho, behavior: "smooth" });
        });
    }

    function iniciarAutoplay() {
        return setInterval(function () {
            var ancho = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 0;
            var maximo = track.scrollWidth - track.clientWidth;
            if (track.scrollLeft >= maximo - 10) {
                track.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                track.scrollBy({ left: ancho, behavior: "smooth" });
            }
        }, 4000);
    }

    autoplay = iniciarAutoplay();
    track.addEventListener("mouseenter", function () { clearInterval(autoplay); });
    track.addEventListener("mouseleave", function () { autoplay = iniciarAutoplay(); });
}

var chipsContainer = buscar("#chips");
var cgridContainer = buscar("#cgrid");

if (chipsContainer && cgridContainer) {
    var categorias = ["Todos"];
    PRODUCTOS.forEach(function (p) {
        if (!categorias.includes(p.categoria)) {
            categorias.push(p.categoria);
        }
    });

    chipsContainer.innerHTML = categorias.map(function (cat, indice) {
        var activo = indice === 0 ? " on" : "";
        return '<button class="chip' + activo + '" data-cat="' + cat + '">' + cat + '</button>';
    }).join("");

    function mostrarCategoria(categoria) {
        var productosFiltrados = PRODUCTOS.filter(function (p) {
            return categoria === "Todos" || p.categoria === categoria;
        });
        cgridContainer.innerHTML = productosFiltrados.map(crearTarjetaProducto).join("");
    }

    mostrarCategoria("Todos");

    chipsContainer.addEventListener("click", function (evento) {
        var boton = evento.target.closest("[data-cat]");
        if (!boton) return;

        document.querySelectorAll(".chip").forEach(function (chip) {
            chip.classList.toggle("on", chip === boton);
        });

        mostrarCategoria(boton.getAttribute("data-cat"));
    });
}

var contenedorExps = buscar("#exps");
if (contenedorExps) {
    var coloresExp = { "S": "#DDE9D3", "D": "#F4DFB3", "T": "#D3E0EC" };
    contenedorExps.innerHTML = EXPERIENCIAS.map(function (exp) {
        var colorExp = coloresExp[exp.emoji] || "#EADFC8";
        return '<div class="card rv">' +
            '<div class="hex" style="background: ' + colorExp + '; color: #35302A;">' +
            exp.emoji +
            '</div>' +
            '<h3>' + exp.titulo + '</h3>' +
            '<p>' + exp.descripcion + '</p>' +
            '<div class="meta">' +
            '<span>' + exp.duracion + '</span>' +
            '<span>' + exp.publico + '</span>' +
            '<span>' + exp.incluye + '</span>' +
            '</div>' +
            '</div>';
    }).join("");
}

var contenedorTabs = buscar("#tabs");
var contenedorPanes = buscar("#panes");

if (contenedorTabs && contenedorPanes) {
    contenedorTabs.innerHTML = GUIA.map(function (g, indice) {
        var activo = indice === 0 ? " on" : "";
        return '<button class="chip' + activo + '" data-tab="' + indice + '">' + g.titulo + '</button>';
    }).join("");

    contenedorPanes.innerHTML = GUIA.map(function (g, indice) {
        var activo = indice === 0 ? " on" : "";
        var parrafos = g.contenido.map(function (texto) {
            return '<p>' + texto + '</p>';
        }).join("");

        return '<div class="pane' + activo + '">' +
            '<h3>' + g.titulo + '</h3>' +
            parrafos +
            '</div>';
    }).join("");

    contenedorTabs.addEventListener("click", function (evento) {
        var boton = evento.target.closest("[data-tab]");
        if (!boton) return;

        var indice = parseInt(boton.getAttribute("data-tab"));

        document.querySelectorAll("#tabs .chip").forEach(function (chip) {
            chip.classList.toggle("on", chip === boton);
        });

        document.querySelectorAll(".pane").forEach(function (panel, i) {
            panel.classList.toggle("on", i === indice);
        });
    });
}

function renderizarCarrito() {
    var ids = Object.keys(carrito);
    var cantidad = ids.reduce(function (total, id) { return total + carrito[id]; }, 0);

    var contadorCarrito = buscar("#cn");
    if (contadorCarrito) {
        contadorCarrito.textContent = cantidad || "";
        contadorCarrito.setAttribute("data-n", cantidad);
    }

    var contenedorItems = buscar("#items");
    if (contenedorItems) {
        if (ids.length === 0) {
            contenedorItems.innerHTML = '<div style="text-align:center; padding:40px 0;">' +
                '<i class="fa-solid fa-basket-shopping" style="font-size:48px; color:var(--line); margin-bottom:16px;"></i>' +
                '<p style="color:var(--soft); font-size:15px;">Aún no has agregado productos.</p>' +
                '</div>';
        } else {
            contenedorItems.innerHTML = ids.map(function (id) {
                var producto = PRODUCTOS.find(function (p) { return p.id == id; });
                if (!producto) return '';
                return '<div class="ci">' +
                    '<img class="ci-img" src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
                    '<div style="flex:1; min-width:0;">' +
                    '<h4 style="font-size:14px; font-weight:700; margin-bottom:2px;">' + producto.nombre + '</h4>' +
                    '<small style="color:var(--soft); font-size:12px;">' + formatearPrecio(producto.precio) + ' c/u</small>' +
                    '<div class="q">' +
                    '<button data-menos="' + id + '" aria-label="Menos">&minus;</button>' +
                    '<b>' + carrito[id] + '</b>' +
                    '<button data-mas="' + id + '" aria-label="Más">+</button>' +
                    '</div>' +
                    '</div>' +
                    '<div style="text-align:right;">' +
                    '<span class="ci-subtotal">' + formatearPrecio(producto.precio * carrito[id]) + '</span>' +
                    '<button class="ci-delete" data-delete="' + id + '" aria-label="Eliminar" style="margin-top:6px;">' +
                    '<i class="fa-solid fa-trash-can" style="font-size:13px;"></i>' +
                    '</button>' +
                    '</div>' +
                    '</div>';
            }).join("");
        }
    }

    var total = ids.reduce(function (suma, id) {
        var producto = PRODUCTOS.find(function (p) { return p.id == id; });
        return producto ? suma + (producto.precio * carrito[id]) : suma;
    }, 0);

    var pie = buscar("#foot");
    if (pie) {
        pie.classList.toggle("hide", ids.length === 0);
    }

    var elTot = buscar("#tot");
    if (elTot) {
        elTot.textContent = formatearPrecio(total);
    }

    var mensaje = "Hola! Quiero hacer un pedido en BeeTourism Boyacá:\n";
    ids.forEach(function (id) {
        var producto = PRODUCTOS.find(function (p) { return p.id == id; });
        if (producto) {
            mensaje += "- " + carrito[id] + " x " + producto.nombre + " (" + formatearPrecio(producto.precio * carrito[id]) + ")\n";
        }
    });
    mensaje += "Total: " + formatearPrecio(total) + "\n";
    mensaje += "¿Cómo coordinamos el pago y el despacho?";

    window.enlaceWhatsApp = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(mensaje);
    guardarCarrito();
}

var wa2 = buscar("#wa2");
if (wa2) {
    wa2.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent("Hola! Quiero información sobre apiturismo en BeeTourism Boyacá.");
}

var alertaWa = buscar("#wa-alerta");

function mostrarAlerta() {
    if (alertaWa) alertaWa.classList.remove("hide");
}

function ocultarAlerta() {
    if (alertaWa) alertaWa.classList.add("hide");
}

var waAlertaIr = buscar("#wa-alerta-ir");
if (waAlertaIr) {
    waAlertaIr.addEventListener("click", function () {
        window.open(window.enlaceWhatsApp, "_blank");
        ocultarAlerta();
    });
}

var waAlertaCerrar = buscar("#wa-alerta-cerrar");
if (waAlertaCerrar) {
    waAlertaCerrar.addEventListener("click", function () {
        ocultarAlerta();
    });
}

var waBtn = buscar("#wa-btn");
if (waBtn) {
    waBtn.addEventListener("click", function () {
        mostrarAlerta();
    });
}

document.addEventListener("click", function (evento) {
    var botonAgregar = evento.target.closest("[data-add]");
    if (botonAgregar) {
        var id = botonAgregar.getAttribute("data-add");
        var qtyEl = document.getElementById("qty-" + id);
        var cantAgregar = qtyEl ? Math.max(parseInt(qtyEl.textContent) || 1, 1) : 1;
        carrito[id] = (carrito[id] || 0) + cantAgregar;
        renderizarCarrito();
        actualizarQtyEnProductos();

        var textoOriginal = botonAgregar.innerHTML;
        botonAgregar.innerHTML = '<i class="fa-solid fa-check"></i> Agregado!';
        botonAgregar.style.background = "#B87D0A";
        setTimeout(function () {
            botonAgregar.innerHTML = textoOriginal;
            botonAgregar.style.background = "";
        }, 1200);
        return;
    }

    var botonQtyMas = evento.target.closest("[data-qty-mas]");
    if (botonQtyMas) {
        var idMas = botonQtyMas.getAttribute("data-qty-mas");
        var elMas = document.getElementById("qty-" + idMas);
        if (elMas) {
            var valMas = parseInt(elMas.textContent) || 0;
            elMas.textContent = valMas + 1;
        }
        return;
    }

    var botonQtyMenos = evento.target.closest("[data-qty-menos]");
    if (botonQtyMenos) {
        var idMenos = botonQtyMenos.getAttribute("data-qty-menos");
        var elMenos = document.getElementById("qty-" + idMenos);
        if (elMenos) {
            var valMenos = parseInt(elMenos.textContent) || 0;
            if (valMenos > 0) {
                elMenos.textContent = valMenos - 1;
            }
        }
        return;
    }

    var botonMas = evento.target.closest("[data-mas]");
    if (botonMas) {
        var idCarMas = botonMas.getAttribute("data-mas");
        carrito[idCarMas] = (carrito[idCarMas] || 0) + 1;
        renderizarCarrito();
        return;
    }

    var botonMenos = evento.target.closest("[data-menos]");
    if (botonMenos) {
        var idCarMenos = botonMenos.getAttribute("data-menos");
        if (carrito[idCarMenos]) {
            carrito[idCarMenos]--;
            if (carrito[idCarMenos] <= 0) {
                delete carrito[idCarMenos];
            }
        }
        renderizarCarrito();
        return;
    }

    var botonDelete = evento.target.closest("[data-delete]");
    if (botonDelete) {
        var idDel = botonDelete.getAttribute("data-delete");
        delete carrito[idDel];
        renderizarCarrito();
        return;
    }

    var botonCerrar = evento.target.closest("[data-close]");
    if (botonCerrar || evento.target === buscar("#veil")) {
        cerrarTodo();
    }
});

function actualizarQtyEnProductos() {
    PRODUCTOS.forEach(function (p) {
        var els = document.querySelectorAll("#qty-" + p.id);
        els.forEach(function (el) {
            el.textContent = carrito[p.id] || 0;
        });
    });
}

function abrirPanel(id) {
    cerrarTodo();
    var panel = document.querySelector(id);
    if (panel) panel.classList.add("on");
    var veil = buscar("#veil");
    if (veil) veil.classList.add("on");
}

function cerrarTodo() {
    document.querySelectorAll("aside").forEach(function (panel) {
        panel.classList.remove("on");
    });
    var veil = buscar("#veil");
    if (veil) veil.classList.remove("on");
}

var btnOm = buscar("#om");
if (btnOm) {
    btnOm.addEventListener("click", function () { abrirPanel("#side"); });
}

var btnOc = buscar("#oc");
if (btnOc) {
    btnOc.addEventListener("click", function () { abrirPanel("#cart"); });
}

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarTodo();
        ocultarAlerta();
    }
});

document.querySelectorAll("[data-c]").forEach(function (elemento) {
    var objetivo = parseInt(elemento.getAttribute("data-c"));
    var actual = 0;
    var intervalo = setInterval(function () {
        actual += Math.ceil(objetivo / 30);
        if (actual >= objetivo) {
            actual = objetivo;
            clearInterval(intervalo);
        }
        elemento.textContent = actual;
    }, 35);
});

var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("in");
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".rv").forEach(function (el, indice) {
    el.style.transitionDelay = (indice % 3) * 0.1 + "s";
    observador.observe(el);
});

var yr = buscar("#yr");
if (yr) {
    yr.textContent = new Date().getFullYear();
}

renderizarCarrito();
