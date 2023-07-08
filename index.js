const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var passwords = [];
var passwordOneBox = document.getElementById("password-one");
var passwordTwoBox = document.getElementById("password-two");

function createPassword() {
    var password = "";
    
    for (var i = 0; i < 16; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return password;
}

function generatePassword() {
    passwords = [];
    for (var i = 0; i < 2; i++) {
        passwords.push(createPassword());
    }
    displayPasswords();
}

function displayPasswords() {
    for (var i = 0; i < passwords.length; i++) {
        if (i === 0) {
            passwordOneBox.textContent = passwords[i];
        }
        else {
            passwordTwoBox.textContent = passwords[i];
        }
    }
}



