const nuevaTarea = document.getElementById("nuevaTarea")
const agregarTarea = document.getElementById("btnAgregar")
const listaTareas = document.getElementById("tareas")
const totalTareas = document.getElementById("total");
const totalRealizadas = document.getElementById("realizados");



const tareas = [{id: 0, descripcion: "Salir a trotar", realizado: false},
                {id: 1, descripcion: "Estudiar", realizado: false},
                {id: 2, descripcion: "Ir de compras", realizado: false}
]

let contador = tareas.length;

function contar()
{
    totalTareas.innerHTML = tareas.length;
    totalRealizadas.innerHTML = tareas.filter(tarea => tarea.realizado).length;
}

function renderizarTareas() {
    let html = "";
    for (let tarea of tareas) {
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td style="color: ${tarea.realizado ? "green" : "black"}">${tarea.descripcion}</td>
                <td>
                    <input type="checkbox" name="seleccion" class="check" id="tarea${tarea.id}" 
                           ${tarea.realizado ? "checked" : ""} 
                           onchange="actualizarEstado(${tarea.id})">
                </td>
                <td><button class="imagen" onclick="borrar(${tarea.id})"></button></td>
            </tr>`;
    }
    listaTareas.innerHTML = html;
}


function inicial()
{
    renderizarTareas();
    contar();
}

agregarTarea.addEventListener("click", () => {

    const tarea = nuevaTarea.value
    if (tarea === "") {
        alert("La tarea no puede estar vacía.");
        return; 
    }
    
    tareas.push({id: contador, descripcion: tarea, realizado: false})
    contador++;
    nuevaTarea.value = ""
    
    renderizarTareas();
    contar();
})

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    
    renderizarTareas();
    contar();
    }

function actualizarEstado(id) {
    const tarea = tareas.find((ele) => ele.id === id);
    if (tarea) {
        tarea.realizado = !tarea.realizado; 
    }
    renderizarTareas(); 
    contar();
}

    document.addEventListener("DOMContentLoaded", () => {
        inicial();
    });
