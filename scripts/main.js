const myImg = document.querySelector("img");

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "images/Pacman.png"){
        myImg.setAttribute("src", "images/pacman2.png");
    }else{
        myImg.setAttribute("src", "images/Pacman.png");
    }
}

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name. ");
    if(!myName){
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to our website, ${storedName}`;
}