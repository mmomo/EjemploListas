var Nodo = function (val) {
    this.valor = val;
    this.ant = null;
    this.sig = null;
}

/* Lista Enlazada... ok*/
var Lista = function () {
    this.head = null;
    this.tail = null;
    this.n = 0;
}

Lista.prototype.push = function (val) {
    var nodo = new Nodo (val);
    
    // Si la lista esta vacia
    if (!this.head) {
	this.head = nodo;
	this.tail = nodo;
	
    } else {
	nodo.ant = this.tail;
	this.tail.sig = nodo;
	this.tail = nodo;
    }
    this.n++;
    return nodo;
}


Lista.prototype.pop = function () {
    if (!this.head) {
	alert("Lista Vacia");
    } else {
	var actual = this.head;
	this.head = actual.sig;
	this.n--;
	
	return actual;
    }
}

Lista.prototype.popBack = function () {
    var actual = this.tail;
    if (!this.head) {
	alert("Lista Vacia");
    } else if (this.head == actual) {
	this.tail = null;
	this.head = null;
	this.n--;
	return actual;

    }else {
	this.tail = actual.ant;
	this.tail.sig = null;
	this.n--;
	return actual;
    } 
}


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

    document.getElementById('board').innerHTML = "\
                                                 <button class='w3-button w3-black w3-display-left' onclick='atras()'>&#10094;</button>\
                                                 <button class='w3-button w3-black w3-display-right' onclick='adelante()'>&#10095;</button>";

    var card = document.createElement('div');
    card.className = "mySlides w3-container w3-xlarge w3-card-4 w3-indigo";
    card.innerHTML = "<center><h1>" + nodo.valor + "</h1></center><b>Anterior: </b>" + ant + " <b>Siguiente: </b>" + sig;

    document.getElementById('board').appendChild(card);	     
}


Lista.prototype.print = function () {
    var s = '';
    var actual = this.head;

    while (actual) {
	s += actual.valor + ' ';
	actual = actual.sig;
    }
    console.log(s.trim());
}
