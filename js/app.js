// Obtener los elementos del formulario
let nombreInput = document.getElementById('nombre');
let apellidoInput = document.getElementById('apellido');
let emailInput = document.getElementById('email');
let cantidadInput = document.getElementById('cantidad');
let categoriaSelect = document.getElementById('categoria');
const totalPagar = document.querySelector('.datos-precio p');
const resumenBtn = document.querySelector('.btn-form-buy[value="Resumen"]');
const comprarBtn = document.querySelector('.btn-form-def[value="Comprar"]');
const borrarBtn = document.querySelector('.btn-form-buy[value="Borrar"]');

// Asociar eventos a los botones
resumenBtn.addEventListener('click', mostrarResumen);
comprarBtn.addEventListener('click', confirmarCompra);
borrarBtn.addEventListener('click', borrarDatos);

// Calcular el total a pagar al cambiar la cantidad o la categoría
cantidadInput.addEventListener('change', calcularTotal);
categoriaSelect.addEventListener('change', calcularTotal);

function calcularTotal() {
  const cantidad = cantidadInput.value;
  const categoria = categoriaSelect.value;
  let descuento = 0;

  switch (categoria) {
    case 'estudiante':
      descuento = 80; // Porcentaje de descuento para estudiantes
      break;
    case 'trainee':
      descuento = 50; // Porcentaje de descuento para trainees
      break;
    case 'junior':
      descuento = 15; // Porcentaje de descuento para juniors
      break;
    default:
      descuento = 0; // Sin descuento para público general
      break;
  }

  const total = cantidad * 200 * (100 - descuento) / 100;
  totalPagar.textContent = `Total a Pagar: $(${total})`;
}

function mostrarResumen() {
    let nombre = nombreInput.value;
    let apellido = apellidoInput.value;
    let email = emailInput.value;
    let cantidad = cantidadInput.value;
    let categoria = categoriaSelect.value;
    let descuento = 0;
  
    // Calcula el descuento según la categoría seleccionada
    switch (categoria) {
      case 'estudiante':
        descuento = 80; // Porcentaje de descuento para estudiantes
        break;
      case 'trainee':
        descuento = 50; // Porcentaje de descuento para trainees
        break;
      case 'junior':
        descuento = 15; // Porcentaje de descuento para juniors
        break;
      default:
        descuento = 0; // Sin descuento para público general
        break;
    }
  
    const total = cantidad * 200 * (100 - descuento) / 100;
  
    const resumenCompra = `<strong>Resumen de la Compra:</strong><br><br>
      Nombre: <strong>${nombre}</strong><br>
      Apellido: <strong>${apellido}</strong><br>
      Email: <strong>${email}</strong><br><br>
      Cantidad de tickets: <strong>${cantidad}</strong><br><br>
      Valor de la compra: <strong>$${total}</strong>`;

    const resumenCompraElement = document.getElementById('resumen-compra');
    resumenCompraElement.innerHTML = resumenCompra;

  const datosCompraDefinitiva = document.querySelector('.datos-compra-definitiva');
  datosCompraDefinitiva.style.display = 'block';
}

function confirmarCompra() {
  // Codigo para procesar la compra (No es Necesario)
}

function borrarDatos() {
    nombreInput.value = '';
    apellidoInput.value = '';
    emailInput.value = '';
    cantidadInput.value = '';
    categoriaSelect.value = '';
    categoriaSelect.selectedIndex = 0;

    
    const datosCompraDefinitiva = document.querySelector('.datos-compra-definitiva');
    datosCompraDefinitiva.style.display = 'none';

    const resumenCompraElement = document.getElementById('resumen-compra');
    resumenCompraElement.innerHTML = '';

    totalPagar.textContent = 'Total a Pagar: $';
}

// POR HACER //
/* Hay que agregar un bloqueador con un mensaje que indique si se pulsa el 
boton de resumen y no hay nada ingresado, para que no muestre la sección de resumen-compra */
