let yearOfBirth = Number(prompt('Enter your year of birth'));
let city = prompt('Where do you live?');
let sport = prompt('What is your favorite type of sport?');
const yearNow = 2023;
let age = yearNow - yearOfBirth;

alert(`${yearOfBirth === 0 
    ? 'Why don`t you enter your year of birth?' 
    : `You are ${yearNow - yearOfBirth} years old.`}
    ${city === null 
    ? 'Why don`t you enter your city?' 
    : city === 'Kyiv' 
    ? `You live in the capital ${city}.`
    : city === 'Washington' 
    ? `You live in the capital ${city}.` 
    : city === 'London' 
    ? `You live in the capital ${city}.`
    : `You live in city ${city}.`}
    ${sport === null 
    ? 'Why don`t enter your favorite type of sport?' 
    : sport === 'boxing' 
    ? 'Cool! Do you want to be an Oleksandr Usyk?'
    : sport === 'swimming' 
    ? 'Cool! Do you want to be an Yana Klochkova?' 
    : sport === 'gymnastics'
    ? 'Cool! Do you want to be a Lilia Podkopayeva?' 
    : `Your favorite type of sport is ${sport}.`}`);