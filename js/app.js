

// 1. Traer elementos de HTML a JS

var submitButton = document.getElementById('submit-message');
var messageArray = []; // Enviar todos los elementos almacenados a un array vacío 

// 2. Crear elementos que voy a necesitar 


// 3. Darle atributos a los elementos que creé 

// 4. Agregar eventos si son necesarios 
submitButton.onclick = submitClicked;

// 5. Indicar donde se van a crear 
// Creamos función dónde se va a añadir el contenido del array
function addText() {
	var message = document.getElementById("message-input").value;
	messageArray.push(message);
}

function printText() {
	var messages = "";
	for (var i = 0; i < messageArray.length; i++) {
		messages += messageArray[i] + "<br>";
	}

	document.getElementById("messages").innerHTML = messages;
}


function submitClicked() {
	addText();
	printText();
	clearText();
}

function clearText(){
	document.getElementById("message-input").value = "";

} 


