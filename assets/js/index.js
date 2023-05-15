/*Obtener referencias a los elementos de la tabla según su Id*/
var htmlRow = document.getElementById("html")
var cssRow = document.getElementById("css")
var jsRow = document.getElementById("javascript")

/*Declarando las notas html*/
var nota1 = parseFloat(prompt("Ingrese nota 1 para HTML"));
var nota2 = parseFloat(prompt("Ingrese nota 2 para HTML"));
var nota3 = parseFloat(prompt("Ingrese nota 3 para HTML"));
var promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

//Asignando las notas de html a la tabla con textContent
document.getElementById("nota1").textContent = nota1;
document.getElementById("nota2").textContent = nota2;
document.getElementById("nota3").textContent = nota3;
document.getElementById("promedio").textContent = promedio;

/*Declarar notas css*/
var nota1Css = parseFloat(prompt("Ingrese nota 1 para CSS"));
var nota2Css = parseFloat(prompt("Ingrese nota 2 para CSS"));
var nota3Css = parseFloat(prompt("Ingrese nota 3 para CSS"));
var promedioCss = ((nota1Css + nota2Css + nota3Css) / 3).toFixed(2);

//Asignando las notas de css a la tabla con textContent
document.getElementById("nota1Css").textContent = nota1Css
document.getElementById("nota2Css").textContent = nota2Css
document.getElementById("nota3Css").textContent = nota3Css
document.getElementById("promedioCss").textContent = promedioCss;

/*Declarar notas js*/
var nota1Js = parseFloat(prompt("Ingrese nota 1 para javascript"));
var nota2Js = parseFloat(prompt("Ingrese nota 2 para javascript"));
var nota3Js = parseFloat(prompt("Ingrese nota 3 para javascript"));
var promedioJs = ((nota1Js + nota2Js + nota3Js) / 3).toFixed(2);

//Asignando las notas de js a la tabla con textContent
document.getElementById("nota1Js").textContent = nota1Js
document.getElementById("nota2Js").textContent = nota2Js
document.getElementById("nota3Js").textContent = nota3Js
document.getElementById("promedioJs").textContent = promedioJs;
