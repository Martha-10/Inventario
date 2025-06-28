
// defined the object and three products inside

let productos = {
    1: { id: 1, nombre: "laptop", precio: 25000 },
    2: { id: 2, nombre: "teclado", precio: 35000 },
    3: { id: 3, nombre: "pantalla", precio: 45000 },
};

// verify not two diferents objets with the same name

let nombresUnicos = new Set();

for (let clave in productos) {
    nombresUnicos.add(productos[clave].nombre.toLowerCase()); // we changed to lower 
}

function agregarProducto() {
    // 1. Obtener los valores del formulario
    let id = parseInt(document.getElementById("IdDelProducto").value);
    let nombre = document.getElementById("nombreDelProducto").value.trim().toLowerCase();
    let precio = parseFloat(document.getElementById("precioDelProducto").value);

    // 2. Validar datos
    if (!id || !nombre || !precio || precio <= 0) {
        alert("Por favor completa los datos correctamente.");
        return;
    }

    // 3. Verificar si el producto ya existe en el Set
    if (nombresUnicos.has(nombre)) {
        alert("El producto ya existe. No se puede duplicar.");
        return;
    }

    // 4. Si no existe, buscar nueva clave (número más alto + 1)
    let claves = Object.keys(productos).map(k => parseInt(k));
    let nuevaClave = Math.max(...claves) + 1;

    // 5. Agregar al objeto productos
    productos[nuevaClave] = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    // 6. Agregar el nombre al Set
    nombresUnicos.add(nombre);

    // 7. Mostrar los nombres únicos usando for...of
    let texto = "Nombres únicos en inventario:\n";
    for (let nombre of nombresUnicos) {
        texto += `• ${nombre}\n`;
    }

    document.getElementById("salida").textContent = texto;

}

function getCategoria(nombre) {
    // Ejemplo simple para asignar categorías según el nombre del producto
    if (nombre.includes("laptop") || nombre.includes("pantalla")) {
        return "Electrónica";
    } else if (nombre.includes("teclado") || nombre.includes("mouse")) {
        return "Accesorios";
    }
    return "Otros";
}

function mostrarCategorias() {
    const mapaCategorias = new Map();

    // Recorremos el Set nombresUnicos para llenar el mapa
    nombresUnicos.forEach(nombre => {
        const cat = getCategoria(nombre);
        if (!mapaCategorias.has(cat)) {
            mapaCategorias.set(cat, []);
        }
        mapaCategorias.get(cat).push(nombre);
    });

    let texto = "Productos por Categoría:\n\n";

    // Recorremos el Map con forEach
    mapaCategorias.forEach((nombres, categoria) => {
        texto += `Categoría: ${categoria}\n`;
        nombres.forEach(nom => {
            texto += `  • ${nom}\n`;
        });
        texto += "\n";
    });

    document.getElementById("salida").textContent = texto;
}


function mostrarProductos() {
    let salida = "Inventario actual:\n\n";
    for (let clave in productos) {  // for...in para recorrer las claves del objeto
        let producto = productos[clave];
        salida += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}\n`;
    }
    document.getElementById("salida").textContent = salida;
}

function valorTotal() {
    let total = 0;
    for (let clave in productos) {
        total += productos[clave].precio;
    }
    alert(`Valor total del inventario: $${total.toFixed(2)}`);
}

function buscarProducto() {
    let nombreBuscar = document.getElementById("buscarNombre").value.trim().toLowerCase();

    if (!nombreBuscar) {
        alert("Por favor ingresa un nombre para buscar.");
        return;
    }

    let encontrado = null;
    for (let clave in productos) {
        if (productos[clave].nombre.toLowerCase() === nombreBuscar) {
            encontrado = productos[clave];
            break;
        }
    }

    if (encontrado) {
        alert(`Producto encontrado:\nID: ${encontrado.id}\nNombre: ${encontrado.nombre}\nPrecio: $${encontrado.precio}`);
    } else {
        alert("Producto no encontrado.");
    }
}

function cambiarPrecio() {
    let nombreProducto = document.getElementById("nombreCambioPrecio").value.trim().toLowerCase();
    let nuevoPrecio = parseFloat(document.getElementById("nuevoPrecio").value);

    if (!nombreProducto || isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
        alert("Por favor, completa los datos correctamente. El precio debe ser un número mayor que 0.");
        return;
    }

    let encontrado = false;
    for (let clave in productos) {
        if (productos[clave].nombre.toLowerCase() === nombreProducto) {
            productos[clave].precio = nuevoPrecio;
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("Precio actualizado correctamente.");
        mostrarProductos();  // Actualiza la lista visible
    } else {
        alert("Producto no encontrado.");
    }
}

function eliminarProducto() {
    let nombreEliminar = document.getElementById("nombreEliminar").value.trim().toLowerCase();

    if (!nombreEliminar) {
        alert("Por favor, ingresa el nombre del producto a eliminar.");
        return;
    }

    let claveEliminar = null;
    for (let clave in productos) {
        if (productos[clave].nombre.toLowerCase() === nombreEliminar) {
            claveEliminar = clave;
            break;
        }
    }

    if (claveEliminar) {
        delete productos[claveEliminar];
        alert(`Producto "${nombreEliminar}" eliminado correctamente.`);
        mostrarProductos(); // Actualizar listado
    } else {
        alert("Producto no encontrado.");
    }
}







