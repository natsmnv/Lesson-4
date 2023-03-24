let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('if. ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('if. Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log('if.  number is Ba_NaN')
} else {
console.log('if. OK!')
}

switch(numOrStr) {
    case null:
        console.log('switch. You canceled');
        break;
    case '':
        console.log('switch. Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('switch. number is Ba_NaN');
        break;
    default:
        console.log('switch. OK!');
        break;
}