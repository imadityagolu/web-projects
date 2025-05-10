const keyName = document.querySelector(".keyName");
const keyCode = document.querySelector(".keyCode");


document.addEventListener("keyup", (e) =>{

    keyName.innerText = "Key Pressed" + " : " + event.key; 
    keyCode.innerText = "Keyboard Code" + " : " + event.keyCode;
    
  });