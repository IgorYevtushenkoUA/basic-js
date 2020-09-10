const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chainDate: [],
    deleteChain() {
        this.chainDate = []
    },
    getLength() {
        return this.chainDate.length
    },
    addLink(value) {
        if (value === undefined)
            this.chainDate.push('( )')
        else
            this.chainDate.push(`( ${value} )`)
        return this
    },
    removeLink(position) {
        if (!(Number.isInteger(position) &&
            Number.parseInt(position) < this.chainDate.length)) {
            this.deleteChain()
            throw new Error
        }
        this.chainDate.splice(position-1,1)
        return this
    },
    reverseChain() {
        let temp = []
        for (let i = (this.chainDate.length) -1 ; i >=0 ; i--)
            temp.push(this.chainDate[i])
        this.chainDate = temp
        return this
    },
    finishChain() {
        console.log(this.chainDate)
        console.log(this.chainDate.length)
        let temp = this.chainDate.join('~~')
        this.deleteChain()
        return temp
    }

}

module.exports = chainMaker;
