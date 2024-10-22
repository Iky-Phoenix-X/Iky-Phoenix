const nav = document.getElementById("navbar")
const menuLogo = document.getElementById("menuLogo")
const menu = document.getElementsByClassName("menu")

window.onscroll = () => {
    if (window.pageYOffset > 100) {
        nav.style.background = "white";
        nav.style.transition = ".5s ease-in-out";
        menuLogo.style.color = "black";
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.color = "black"
        }
    } else {
        nav.style.background = "none"
        menuLogo.style.color = "white";
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.color = "white"
        }
    }
}

