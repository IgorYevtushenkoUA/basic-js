// const CustomError = require("../extensions/custom-error");
//
// class VigenereCipheringMachine {
//     encrypt(message, key) {
//         if ((message | key) === undefined) throw new Error
//         let cipher = ''
//         message = message.toUpperCase()
//         key = key.toUpperCase()
//         let letter = 0
//         for (let i = 0; i < message.length; i++) {
//             if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
//                 let wordChar = message.charCodeAt(i)
//                 let modKey = letter % key.length
//                 let keyChar = key.charCodeAt(modKey)
//                 let alphabet = 26
//                 let asciiCode = 65
//                 // cipher += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(i % key.length))% 26 + 65)
//                 cipher += String.fromCharCode((wordChar + keyChar) % alphabet + asciiCode)
//                 letter++
//             } else cipher += message.charAt(i)
//
//         }
//         console.log(cipher)
//         return cipher
//     }
//
//     decrypt(message, key) {
//         console.log(`message = ${message}`)
//         console.log(`key = ${key}`)
//         if (message === undefined || key === undefined) throw new Error
//         let cipher = ''
//         message = message.toUpperCase()
//         key = key.toUpperCase()
//         let letter = 0
//         for (let i = 0; i < message.length; i++) {
//             if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
//                 let wordChar = message.charCodeAt(i) - 65
//                 let modKey = letter % key.length
//                 let keyChar = key.charCodeAt(modKey) - 65
//                 let alphabet = 26
//                 let asciiCode = 65
//                 let letterCode = (wordChar + (alphabet - keyChar)) % alphabet + asciiCode
//                 cipher += String.fromCharCode(letterCode)
//                 letter++
//             } else cipher += message.charAt(i)
//         }
//         console.log(cipher)
//         return cipher
//     }
// }
//
// module.exports = VigenereCipheringMachine;
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(bool = true) {
        this.bool = bool;
    }

    encrypt(message, key) {
        // throw new CustomError('Not implemented');
        // remove line with error and write your code here
        if (!message || !key) {
            throw new Error();
        } else {
            let newMessage = message.toUpperCase(),
                newKey = key.toUpperCase(),
                arr = [],
                coded = 0,
                sym = 0,
                code = 0;

            for(let i = 0; i < newMessage.length; ++i) {
                if(newMessage[i] >= 'A' && newMessage[i] <= 'Z') {
                    sym = newKey[coded % newKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
                    code = newMessage[i].charCodeAt(0) - 'A'.charCodeAt(0);
                    arr.push(String.fromCharCode((code + sym) % 26 + 'A'.charCodeAt(0)));
                    coded++;
                } else {
                    arr.push(newMessage[i]);
                }
            }

            if(!this.bool) {
                arr.reverse();
            }
            return arr.join('');
        }
    }
    decrypt(message, key) {
        // throw new CustomError('Not implemented');
        // remove line with error and write your code here
        if (!message || !key) {
            throw new Error();
        } else {
            let newMessage = message.toUpperCase(),
                newKey = key.toUpperCase(),
                arr = [],
                coded = 0,
                sym = 0,
                code = 0;

            for(let i = 0; i < newMessage.length; ++i) {
                if(newMessage[i] >= 'A' && newMessage[i] <= 'Z') {
                    sym = newKey[coded % newKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
                    code = newMessage[i].charCodeAt(0) - 'A'.charCodeAt(0);
                    arr.push(String.fromCharCode((code + (26 - sym)) % 26 + 'A'.charCodeAt(0)));
                    coded++;
                } else {
                    arr.push(newMessage[i]);
                }
            }

            if(!this.bool) {
                arr.reverse();
            }
            return arr.join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
