//funcion para desplegar el formulario
var board = document.getElementById("board");
board.addEventListener("click", dropDown);

function dropDown(){
	document.getElementById("list").style.display = "none";
	var newBoard = document.getElementById("newBoard");
	newBoard.style.display = "block";

}
