const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword(){
    let resultPassword = "";
    for(let i = 0; i < 15; i++){
        let randomChar = Math.floor(Math.random() * characters.length);
        resultPassword += characters[randomChar];
    }
    
    return resultPassword;
}

function changeOutput(){
    document.getElementById("output1").textContent = generatePassword();
    document.getElementById("output2").textContent = generatePassword();
}

document.getElementById("generate").addEventListener("click", changeOutput)