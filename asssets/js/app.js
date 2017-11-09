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
    var textCard = document.createTextNode("Añadir tarea")
    /*agregando nodo texto contenido de textarea, 
    p contenedor del nodo texto y div contenedor de p*/
    nameContainer.appendChild(listName);
    lists.appendChild(nameContainer);
    newList.appendChild(lists);
    //agregando texto a la etiqueta 'a'
    link.appendChild(textCard);
    //agregando etiqueta 'a' a su contenedor(mismo 'div' de p)
    lists.appendChild(link);
    //estilos de los elementos agregados
   	document.getElementById("newBoard").style.display ="inline-block";
   	document.getElementById("newList").style.display ="inline-block";
    
   	lists.style.display ="inline-block";
	lists.style.margin ="35px 10px 20px 10px";
    lists.setAttribute("id", "divForm");
	//agregando id a etiqueta 'a'
	link.setAttribute("id","addCard");
	//evento a etiqueta "a"
	var addCard = document.getElementById("addCard");
	addCard.addEventListener("click", addCards);
}

//función para agregar tarjetas al tableros
function addCards(){
	addCard.style.display = "none";//ocultando 'a'
	var container = document.getElementById("newList");
    //variable contenedora del formulario
    var div = document.getElementById("divForm");
	//creando elementos que "reemplazan" a la etiqueta a (un formulario con textarea y button)
	var form = document.createElement("form");
	var textarea = document.createElement("textarea");
	var cardButton = document.createElement("button");
    //agregando elementos
    cardButton.innerHTML = "Agregar";
	form.appendChild(textarea);
	form.appendChild(cardButton);
	divForm.appendChild(form);

    //estilos al botón
    cardButton.style.display ="block";
    cardButton.style.border ="none";
    cardButton.style.padding = "10px";
    cardButton.style.borderRadius = "5px";
    cardButton.style.fontWeight = "600";
    cardButton.style.fontSize = "1em";
    cardButton.style.marginLeft = "10px";
    cardButton.style.backgroundColor ="#3AD053";
    cardButton.style.color ="#FFF";
    //estilos textarea
    textarea.style.marginLeft ="10px";
    textarea.style.width = "250px";
    textarea.style.height = "80px";
    textarea.style.float = "left";
}


