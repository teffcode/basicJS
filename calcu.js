module.exports = {
  suma: (x, y, callback) => {
    console.log('La variable x es un; ', typeof x);
    console.log('La variable y es un: ', y);

    if ( typeof x === 'string' || typeof y === 'string') {
      callback('X or Y must be an integer', null);
    }
    return callback(null, x + y);
  },
  resta: (x, y) => x - y,
  multiplicacion: (x, y) => x * y,
  division: (x, y) => x / y
}
