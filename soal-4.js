function groupNumber(s) {
    var text = s.split('-').join('')
    var parts = []
    for (i = 0; i < text.length; i += 3) {
        if (text.length % 3 === 0) {
            parts.push(text.substr(i, 3));
        } else {
            parts.push(text.substr(i, 3));
        }
    }
    return parts.join('-');
}

console.log(groupNumber('9999-22-12-11'));
