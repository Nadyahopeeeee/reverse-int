
module.exports = function reverse (n) {
  return Number(Math.abs(n).toString().split('').reverse().join(''));
}

 //n = Math.abs(n)
 //n = String(n)
 //n = n.split('').reverse().join('')
 //n = Number(n);
 //return n
