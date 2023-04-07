const enviar = document.querySelector("#enviar");
let tarefa = document.querySelector("#itarefas");
const lista = document.querySelector("#lista");
const div = document.querySelector("#myDiv");
enviar.addEventListener("click", function event() {
  if (tarefa.value.length == 0) {
    alert("[Erro] Digite alguma tarefa");
  } else {
    //Criação li
    const newFazeres = document.createElement("li");
    const textNode = document.createTextNode(tarefa.value);
    newFazeres.appendChild(textNode);
    lista.appendChild(newFazeres);

    //Criação checkBox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newFazeres.appendChild(checkBox);
    tarefa.value = "";

    //Criação button delete
    const deletar = document.createElement("input");
    deletar.type = "button";
    deletar.value = "x";
    newFazeres.appendChild(deletar);
    deletar.addEventListener("click", () => lista.removeChild(newFazeres));
  }
});