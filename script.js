const navlist = document.querySelector(".navlist")
const menu = document.querySelector(".fa-bars")

menu.addEventListener("click",()=>{
    navlist.classList.toggle("active");
})