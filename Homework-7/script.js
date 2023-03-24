switch(numOrStr) {
    case null:
        console.log('You canceled');
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}