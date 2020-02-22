// format username huruf kecil 5-8 && _ && return true or false
function validasiUsername(str) {
    const regex = /^[a-z]{5,8}[_]$/
    if (regex.test(str)) {
        return true
    } else {
        return false        
    }
}

console.log('Username ===> ', validasiUsername('asdasda_'));
console.log('Username ===> ', validasiUsername('fuadssdasdaa'));

// format password length 9 A-Z a-z 0-9 !
function validasiPassword(pass) {
    const regex = /^[a-zA-Z0-9!]{9}$/
    if (regex.test(pass)) {
        return true
    } else {
        return false
    }
}
console.log('Password ===> ', validasiPassword('Asa12AsA!'));
console.log('Password ===> ', validasiPassword('Asa12AsA@AD'));
