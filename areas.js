let base = 2
let altura = 4

function triangulo(base, altura){
	return base * altura / 2
}

console.log(`El área de un triangulo de base ${base} 
	y altura ${altura} es: ${triangulo(base, altura)}`)

let radio = 2
let pi = 3.14

const circuloArea = (radio, pi) => pi * radio 

console.log(`Área de circulo de radio = ${radio} es: 
	${2*circuloArea(radio, pi)}`)