const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = document.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container')

const handleChange = () =>{
    lenghtCounter.textContent = inputRange.value;
}
const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';


const useUppercase = document.querySelector('#uppercase').Checked;
const useLowercase = document.querySelector('#lowercase').Checked;
const useNumbers = document.querySelector('#numbers').Checked;
const useSymbols = document.querySelector('#symbols').Checked;

if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if(useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
if(useLowercase) characters += '0123456789';
if(useLowercase) characters += '!@#$%&*';

if(characters === ''){
    passwordHeading.textContent = 'Selecciona al menos una opción :)';
    return '';
}

for(let i =0; i <passwordLength; i++){
    result+= characters.charAt(Math.floor(Math.random() * characters.lenght));
}

return result;
console.log(result)
};

const Printpassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if(password){
        passwordHeading.textContent=password;
    }
};

inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', Printpassword);
