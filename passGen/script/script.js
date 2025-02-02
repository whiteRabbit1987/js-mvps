// Random password generator

function genPass(length, lowCase, uppCase, num, sym){
    const lowChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numChars = '0123456789';
    const symChars = "!@#$%^&*()_+-=";

    let validChars = '';
    let password = '';

    validChars += lowCase ? lowChars : '';
    validChars += uppCase ? uppChars : '';
    validChars += num ? numChars : '';
    validChars += sym ? symChars : '';

    if(length <= 0){
        return `(password length must be at least ${length})`;
    }
    if(validChars.length === 0){
        return `(At least 1 set of of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    return password;
}

const passLen = 16;
const lowerCase = true;
const upperCase = true;
const numbers= true;
const symbols = true;

const password = genPass(passLen, 
                        lowerCase, 
                        upperCase, 
                        numbers, 
                        symbols);

console.log(`Generated password is ${password}`);