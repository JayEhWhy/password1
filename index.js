const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","@","#","$","%","&","*","_","-"];

 
let firstPass = document.getElementById("pass1")
let secondPass= document.getElementById("pass2")





passbutton.addEventListener("click",function(){
    let password1 = characters[Math.floor(Math.random()*characters.length)]
    let password2 = characters[Math.floor(Math.random()*characters.length)]
    let password3 = characters[Math.floor(Math.random()*characters.length)]
    let password4 = characters[Math.floor(Math.random()*characters.length)]
    let password5 = characters[Math.floor(Math.random()*characters.length)]
    let password6 = characters[Math.floor(Math.random()*characters.length)]
    let password7 = characters[Math.floor(Math.random()*characters.length)]
    let password8 = characters[Math.floor(Math.random()*characters.length)]
    let password9 = characters[Math.floor(Math.random()*characters.length)]
    let password10 = characters[Math.floor(Math.random()*characters.length)]
    let password11 = characters[Math.floor(Math.random()*characters.length)]
    let password12 = characters[Math.floor(Math.random()*characters.length)]
    let password13 = characters[Math.floor(Math.random()*characters.length)]
    let password14 = characters[Math.floor(Math.random()*characters.length)]
    let password15 = characters[Math.floor(Math.random()*characters.length)]
    firstPass.textContent = password1 + password3 + password5 + password7 + password9 + password2 + password4 + password6 + password8 + password10 + password12 + password14+ password13 + password15 + password11
    
    secondPass.textContent = password15 + password14 + password13 + password12 + password11 + password10 + password9 + password8 + password7 + password6 + password5 + password4+ password3 + password2 + password1
})



