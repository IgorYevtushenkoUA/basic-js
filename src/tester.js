let chainMaker = require('./simple-chain.js')
let a = [1,2,3]
a.reverse()
console.log(a)
console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain())

