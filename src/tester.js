let weather = require('./what-season.js')


const date1 = new Date('December 17, 1995 03:24:00');
const date = new Date(98, 1);
console.log(weather(new Date('Thu Sep 10 2020 11:23:49 GMT+0300 (GMT+03:00)')))
console.log(weather(date1))
console.log(weather(date))
console.log(weather(date1))
console.log(weather('foo'));;
console.log(weather({John: 'Smith'}));;
console.log(weather(20192701));;
console.log(weather([2019, '27', 0 + '1']));;
console.log(weather(() => new Date()));;


