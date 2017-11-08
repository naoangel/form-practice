var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
	//Traducir el título.

	var title = document.querySelector('h1')
	; // querySelector devuelve 1a coincidencia 
	var newTitle = 'Por favor inicia sesión'
	;
    title.innerHTML = newTitle;  

    //traducir input
    var mail = document.querySelectorAll('input')[0].placeholder = 'Correo electrónico';
	var password = document.querySelectorAll('input')[1].placeholder = 'Contraseña';
	var check = document.getElementById('spn').innerHTML= 'Recuérdame';

	//traducir botones

	var btnSignIn = document.querySelectorAll('button')[0].innerHTML= 'INICIAR SECISIÓN';
	var btnTranslate = document.querySelectorAll('button')[1]; // lo mismo que arriba solo que arriba se le aplicó la acción dentro de la variable declarada
	    btnTranslate.innerHTML= 'TRADUCIR'; //primero  define variable, despues aplica acción a variable.



})