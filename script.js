function addTask() {
    // Obtener el valor del input
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    // Validar que no este vacio
    if (taskText === ""){
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear un nuevo elemento de lista
    const li = document.createElement("li");

    // Agregar evento para marcar como hecha
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", function(){
        span.classList.toggle("completed");
    });

    // anadir boton de eliminar 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Anadir el <li> al <ul>
    document.getElementById("taskList").appendChild(li);

    // Limpiar el input 
    input.value = "";
}   