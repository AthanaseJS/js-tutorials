console.log('Hello, this is JS in node !') //global

function sayHello(name) {
  console.log('Hello, this is ' + name)
}
sayHello('Athanase')

function sayHi(phrase, who) {
  console.log(phrase + ', ' + who)
}
setTimeout(sayHi, 4000, 'Привет', 'Джон')

setInterval(sayHi, 1000, 'Hi', 'Jain')
