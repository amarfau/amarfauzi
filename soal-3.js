function arkademy(num) {
    var text = []
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 7 === 0) { // untuk number habis dibagi 3 dan 7 mengembalikan nilai arkademy
            text.push('Arkademy')
        } else if (i % 7 === 0) { // untuk number habis dibagi 7 mengembalikan nilai demy
            text.push('Demy')
        } else if (i % 3 === 0) {// untuk number habis dibagi 3 mengembalikan nilai arka
            text.push('Arka')
        } else { // untuk number tidak habis dibagi 3 & 7 mengembalikan nilai number
            text.push(i)
        }
    }
    return text.toString();
}
console.log(arkademy(42));
