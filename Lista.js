/*
 * Constructor de un Nodo
 */
var Nodo = function (val) {
    this.valor = val;
    this.ant = null;
    this.sig = null;
}

/* Lista Enlazada doble... ok*/
var Lista = function () {
    this.head = null;
    this.tail = null;
    this.n = 0;
}

/*
 * Agrega un elemento al final de la lista
 */
Lista.prototype.push = function (val) {
    /**
     * Aqui va la implementacion de push()
     */
}

/*
 * Borra el primer elemento de la lista
 */
Lista.prototype.pop = function () {
    /**
     * Aqui va la implementacion de pop
     */
}

/*
 * Borra el ultimo elemento de la lista
 */
Lista.prototype.popBack = function () {
    /**
     * Aqui va la implementacion de popBack()
     */
}


/*
 * Esta funcion genera el 'card' donde se visualiza cada nodo en le slider
 */
var Card = function (nodo) {
    var sig, ant;
    if (!nodo.sig) {
	sig = nodo.sig;
    } else {
	sig = nodo.sig.valor;
    }
    if (!nodo.ant) {
	ant = nodo.ant;
    } else {
	ant = nodo.ant.valor;
    }

    // plantilla para cada 'card', aqui se agregan los botones
    document.getElementById('board').innerHTML = "\
                                                 <button class='w3-button w3-black w3-display-left' onclick='atras()'>&#10094;</button>\
                                                 <button class='w3-button w3-black w3-display-right' onclick='adelante()'>&#10095;</button>";

    // se crea un elemento div con la informacion del nodo en formato HTML
    var card = document.createElement('div');
    card.className = "mySlides w3-container w3-xlarge w3-card-4 w3-indigo";
    card.innerHTML = "<center><h1>" + nodo.valor + "</h1></center><b>Anterior: </b>" + ant + " <b>Siguiente: </b>" + sig;

    // se agrega el nuevo div a nuestra pagina HTML
    document.getElementById('board').appendChild(card);	     
}

/*
 * Devuelve un string con los elementos de la lista
 */
Lista.prototype.print = function () {
    var s = '';
    var actual = this.head;

    while (actual) {
	s += actual.valor + ' ';
	actual = actual.sig;
    }
    return s;
}
