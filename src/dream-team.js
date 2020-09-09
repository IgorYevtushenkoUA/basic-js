const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members))
        return false
    let firstLetterLogo = []
    for (let member of members) {
        // console.log('member = ' + member)
        if ((typeof member === 'string') && !(Number.isFinite(parseInt(member)))){
            firstLetterLogo.push(member.trim().charAt(0).toUpperCase() )
        }
    }
    // console.log('firstLetterLogo = ' + firstLetterLogo);
    return firstLetterLogo.sort().join('');
};

