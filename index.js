const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let a = 12 


function getRandomCharacter(includeSpecialCharacters) {
    let validCharacters;

    if (includeSpecialCharacters) {
        validCharacters = characters;
    } else {

        validCharacters = characters.filter(char => !(/[~`!@#$%^&*()_+\-=\{\[\}\],\|:;<>\.?/]/.test(char)));
    }

    let randomCharacterGenerator = Math.floor(Math.random() * validCharacters.length);
    return validCharacters[randomCharacterGenerator];
}

function generateUniquePassword(includeSpecialCharacters) {
    
   let passwordOne = document.getElementById("passwordResult1")
   let passwordTwo = document.getElementById("passwordResult2")
   
   let uniquePasswords = new Set();
   while (uniquePasswords.size < 2) {
   let randomPassword = "";
   for (let i = 0; i < a; i++) {
    randomPassword += getRandomCharacter(includeSpecialCharacters);
   } 
      uniquePasswords.add(randomPassword);
} 
let [password1, password2] = Array.from(uniquePasswords);

    passwordOne.textContent = password1;
    passwordTwo.textContent = password2;
}



