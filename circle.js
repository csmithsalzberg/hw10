//Caleb Smith-Salzberg, Naotaka Kinoshita
//Team callMeNao 
//SoftDev2 pd7
//K9 -- Ask Circles [Change || Die]
//2018-03-06
var pic = document.getElementById("vimage");
var btn = document.getElementById("clear");

var initDotRad = 20;

var clearRect = function() {
    var rect = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"rect"
    );
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
};

var draw = function(e) {
    makeDot(e.offsetX, e.offsetY).display();
};


var change = function() {
    if (this.getcolor() == "red") {
	console.log("green");
	this.setcolor("green");
	this.stopPropagation();
    }
    else if (this.getAttribute("fill") == "green") {
	this.remove();
	stopPropagation();
	drawCircle(Math.floor(Math.random() * pic.getAttribute("width")), Math.floor(Math.random() * pic.getAttribute("height")));
    }
};

pic.addEventListener("click", draw);
btn.addEventListener("click", clearRect);


var makeDot = function(x,y){
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("cx",x);
    dot.setAttribute("cy",y);
    dot.setAttribute("r",initDotRad);
    dot.setAttribute("fill","red");

    dot.display = function() {
	pic.appendChild(makeDot(x,y));    
    };

    dot.setx = function(x) {
	return dot.setAttribute("cx",x);
    };

    dot.sety = function(y) {
	return dot.setAttribute("cy",y);
    };

    dot.setcolor = function(color) {
	return dot.setAttribute("fill",color);
    };

    dot.getcolor = function() {
	return dot.getAttribute("fill");
    };

    dot.addEventListener("click",change);

    return dot;
};

