const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let boxFirst = document.getElementById("box-first")
let boxSecond = document.getElementById("box-second")

function genrateRandomIndex() {

    let randomIndex = Math.floor( Math.random() * characters.length ) 
    // console.log(randomIndex)
    return randomIndex
}

function generatePassword() {

    let password1 = "";
    let password2 = "";

    for( let i = 0; i<15; i++) {
        password1 += characters[genrateRandomIndex()];
        password2 += characters[genrateRandomIndex()];
    }

    // console.log(password1)
    // console.log(password2)
    boxFirst.textContent = password1
    boxSecond.textContent = password2
}

// generatePassword()
