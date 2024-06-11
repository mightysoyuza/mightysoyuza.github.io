const myBtn = document.getElementById("myBtn");
const navbar = document.getElementById("navbar");
const clickable = document.getElementById("clickable");
const contactSection = document.getElementById("contact");
const closeable = document.getElementById("closeable");
document.addEventListener('keydown', function(e){
    if(e.key === "s" || e.key === "S"){
        contactSection.style.display = "block";
        clickable.style.display = 'none';
        closeable.style.display = 'block';
    }else if(e.key === "x" || e.key === "X"){
        window.location.reload();
    }
})

myBtn.onclick = () => {
    navbar.style.display = "block";
    myBtn.textContent = "x";
    myBtn.onclick = () => {
        navbar.style.display = "none";
        window.location.reload();
    }
}