const calculadora = require('./calcu');

const x = 4;
const y = 'x';
let t;
t = calculadora.suma(x, y, (err, value) => {
  if (err) {
    console.error('Error en suma: ', err);
  }

  return value;
});
console.log('Suma: ',t);

const u = calculadora.resta(x, y);
console.log('Resta: ',u);

const v = calculadora.multiplicacion(x, y);
console.log('Multiplicación: ',v);

const w = calculadora.division(x, y);
console.log('División: ',w)
