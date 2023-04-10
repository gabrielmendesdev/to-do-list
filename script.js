const enviar = document.querySelector("#enviar");
let tarefa = document.querySelector("#itarefas");
const lista = document.querySelector("#lista");
const div = document.querySelector("#myDiv");
function funcaoPrincipal() {
  if (tarefa.value.length == 0) {
    alert("[Erro] Digite alguma tarefa");
  } else {
    //Criação li
    const newFazeres = document.createElement("li");
    newFazeres.classList.add("itens");
    const span = document.createElement("span");
    span.textContent = tarefa.value
    newFazeres.appendChild(span);
    lista.appendChild(newFazeres);
    
    //Criação checkBox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check");
    newFazeres.appendChild(checkBox);
    tarefa.value = "";
    checkBox.addEventListener("click", () => {
      if(checkBox.checked) {
        span.style.color = "lightgray";
        span.style.textDecoration = "line-through"        
      } else {
        span.style.color = "black";
        span.style.textDecoration = "none"
      }
    })

    //Criação button delete
    const deletar = document.createElement("input");
    deletar.type = "button";
    deletar.value = "Remover";
    deletar.classList.add("delete");
    newFazeres.appendChild(deletar);
    deletar.addEventListener("click", () => lista.removeChild(newFazeres));
  }
}
enviar.addEventListener("click", funcaoPrincipal);
tarefa.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    funcaoPrincipal();
  }
})
