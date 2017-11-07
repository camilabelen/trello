//funcion para desplegar el formulario
var board = document.getElementById("board");
board.addEventListener("click", dropDown);

function dropDown(){
	/*ocultando boton 'añadir una lista...'*/
	document.getElementById("list").style.display = "none";
	var newBoard = document.getElementById("newBoard");
	/*mostrando input para agregar tableros*/
	newBoard.style.display = "block";
}

//funcion para crear una nueva lista
var save= document.getElementById("save")
save.addEventListener("click", saveList);

function saveList(){
	var input = document.getElementById("inputList");
    var addList = document.getElementById("inputList").value;
    //borrar contenido del input
    document.getElementById("inputList").value = "";
    //contenedor de div de los nuevos comentarios
    var container = document.getElementById("newList");
    //elemento donde se guardara el nuevo comentario
    var lists = document.createElement("div");
    //nodo texto comentario
    var listName = document.createTextNode(addList);
    var nameContainer = document.createElement("p");
    var link = document.createElement("a");
    var addCard = document.createTextNode("Añadir tarea")
    /*agregando nodo texto contenido de textarea, 
    p contenedor del nodo texto y div contenedor de p*/
    nameContainer.appendChild(listName);
    lists.appendChild(nameContainer);
    newList.appendChild(lists);
    /*agregando texto a la etiqueta 'a'*/
    link.appendChild(addCard);
    /*agregando etiqueta 'a' a su contenedor(mismo 'div' de p)*/
    lists.appendChild(link);
    /*estilos de los elementos agregados*/
   	document.getElementById("newBoard").style.display ="inline-block";
   	document.getElementById("newList").style.display ="inline-block"
   	lists.style.display ="inline-block"
	lists.style.margin ="35px 10px 20px 10px"
}