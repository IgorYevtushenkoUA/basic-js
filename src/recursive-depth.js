const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let max = 1;
        for (let i = 0; i < arr.length; i++) {
            let deep = 1
            if (Array.isArray(arr[i])) {
                deep += this.calculateDepth(arr[i])
                if (max < deep)
                    max = deep
            }
        }
        return max
    }
};
