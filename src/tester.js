let team = require('./dream-team.js')

function deleteAllSpaces(str) {
    while (str.includes(' '))
        str = str.replace(' ', '')

    return str
}

console.log(deleteAllSpaces('            b     sdfsd '))


console.log(Number.isFinite(parseInt('1243.2342.234fgdgdfgd')))
console.log(Number.isFinite(parseInt(1243.2342)))
console.log(Number.isFinite(parseInt(1243)))
console.log(Number.isFinite(parseInt('1243')))
console.log(Number.isFinite(parseInt('name')))
console.log(Number.isFinite(parseInt('')))
console.log(Number.isFinite(parseFloat('1243.2342.234dfgdfgfdg')))
console.log(Number.isFinite(parseFloat(1243.2342)))
console.log(Number.isFinite(parseFloat(1243)))
console.log(Number.isFinite(parseFloat('1243')))
console.log(Number.isFinite(parseFloat('name')))
console.log(typeof ['Matt', 'Ann', 'Dmitry', 'Max'])

console.log(team(['Matt', 'Ann', ' ', 'Max']))
console.log(team(['Olivia', 1111, 'Lily', 'Oscar', true, null]))
console.log(team('sddfsd'))
