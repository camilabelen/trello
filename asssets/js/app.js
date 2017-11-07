//funcion para desplegar el formulario
function dropDown(){
	/*var padre = document.getElementById("addBoard");
	var hijo = document.getElementById("list");
	padre.removeChild(hijo);*/






	var addBoard = document.getElementById("newBoard");

	if(addBoard.style.display == 'block'){
        addBoard.style.display = 'none';
        board.style.display = 'none';
    }else{
       	addBoard.style.display = 'block';
      	board.style.display = 'none';
	}
	
}
