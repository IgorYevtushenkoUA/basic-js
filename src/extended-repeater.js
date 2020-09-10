const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options === undefined)
        return ''
    let line = ''
    let separator = options.separator === undefined ? '+' : options.separator
    let addition = options.addition === undefined ? '' : options.addition
    let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator
    let repeatTimes = options.repeatTimes === undefined ? 0 : options.repeatTimes
    let additionRepeatTimes = options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes
    if (repeatTimes == 0 && additionRepeatTimes==0) return str+addition
    for (let i = 0; i < repeatTimes; i++) {
        line += str
        for (let j = 0; j < additionRepeatTimes - 1; j++) {
            line += addition
            line += additionSeparator
        }
        line += addition
        if (i < repeatTimes - 1)
            line += separator
    }
    return line
};
