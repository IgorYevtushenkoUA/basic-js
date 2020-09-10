const CustomError = require("../extensions/custom-error");

/*
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < text[i].length; j++) {
                let wordChar = text[i].charCodeAt(j)
                let modKey = i % key.length
                let keyChar = key.charCodeAt(modKey)
                let alphabet = 26
                let asciiCode = 65
                cipher += String.fromCharCode((wordChar + keyChar) % alphabet + asciiCode)
            }
            cipher += ' '
        }
*/
class VigenereCipheringMachine {
    encrypt(message, key) {
        if ((message | key) === undefined) throw new Error
        let cipher = ''
        message = message.toUpperCase()
        key = key.toUpperCase()
        let letter = 0
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                let wordChar = message.charCodeAt(i)
                let modKey = letter % key.length
                let keyChar = key.charCodeAt(modKey)
                let alphabet = 26
                let asciiCode = 65
                // cipher += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(i % key.length))% 26 + 65)
                cipher += String.fromCharCode((wordChar + keyChar) % alphabet + asciiCode)
                letter++
            } else cipher += message.charAt(i)

        }
        console.log(cipher)
        return cipher
    }

    decrypt(message, key) {
        console.log(`message = ${message}`)
        console.log(`key = ${key}`)
        if (message === undefined || key === undefined) throw new Error
        let cipher = ''
        message = message.toUpperCase()
        key = key.toUpperCase()
        let letter = 0
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                let wordChar = message.charCodeAt(i) - 65
                let modKey = letter % key.length
                let keyChar = key.charCodeAt(modKey) - 65
                let alphabet = 26
                let asciiCode = 65
                let letterCode = (wordChar + (alphabet - keyChar)) % alphabet + asciiCode
                cipher += String.fromCharCode(letterCode)
                letter++
            } else cipher += message.charAt(i)
        }
        console.log(cipher)
        return cipher
    }
}

module.exports = VigenereCipheringMachine;
