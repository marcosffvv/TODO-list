const manejadorSubmit = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('#nueva-tarea');
  const tarea = input.value;
  input.value = '';
  añadirTarea(tarea);
}
const formulario$$ = document.querySelector('#formulario');
formulario$$.addEventListener('submit', manejadorSubmit);

const añadirTarea = (tarea) => {
    const li = document.createElement('li');
    li.textContent = tarea;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    li.appendChild(botonEliminar);
    const lista = document.querySelector('#tareas');
    lista.appendChild(li);
}
const eliminarTarea = (evento) => {
    const boton = evento.target;
    const li = boton.parentNode;
    li.remove();
}
const lista = document.querySelector('#tareas');
lista.addEventListener('click', eliminarTarea);
  
