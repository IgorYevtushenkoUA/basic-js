const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    console.log('BEFORE : sampleActivity = ' + sampleActivity)
    if (typeof sampleActivity !== 'string')
        return false

    sampleActivity = parseFloat(sampleActivity)

    if (sampleActivity == '' ||
        sampleActivity == undefined ||
        sampleActivity <= 0 ||
        sampleActivity > MODERN_ACTIVITY ||
        isNaN(sampleActivity)) {
        return false
    }
    console.log('AFTER : sampleActivity = ' + sampleActivity)

    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD))
};


