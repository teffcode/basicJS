// creación de Idioma

function platzom(str){
	let translation = str

	// si la palabra termina en ar se le quitan los 2 caracteres
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}

	// Si la palabra inicia con Z, se le añade pe
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}

	// si la palabra traducida tiene 10 o más letras
	// se tiene que partir a la mitad y unir con un -
	if(translation.length >= 10){
		const firstHalf = translation.slice(0, Math.round(translation.length / 2))
		const secondHalf = translation.slice(Math.round(translation.length / 2))
		translation = `${firstHalf} - ${secondHalf}`
	}

	// si la palabra es palíndromo, 
	// la primera letra la pone en mayúscula, la segunda en minúsula y así sucesivamente

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		
		const length = str.length
		let translation = ''
		let capitalize = true

		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	return translation
}

console.log(platzom("Programar")) // program
console.log(platzom("Zorro")) // zorrope
console.log(platzom("Zarpar")) // zarppe
console.log(platzom("Abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS

// ¿ cuántos km recorre una persona en la semana ?

const nombre = 'Tefa' 

const dias = [
	'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo' ]

function correr (){
	const min = 5
	const max = 15
	return Math.floor(Math.random() * (max-min) + min)
}

let totalKm = 0
for (let i = 0; i < dias.length; i++){
	const kms = correr()
	totalKm += kms
	console.log(`El día ${i} ${nombre} corrió: ${kms} kms`)
}









