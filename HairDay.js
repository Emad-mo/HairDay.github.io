let navbar = document.getElementById("navbar")
let sidebar = document.getElementById("sidebar")
let arrow = document.getElementById("arrobtn")
let mobilenav = document.getElementById("navv")
const container = document.querySelector('body');
console.log(container)
// navbar.addEventListener("s")
window.onscroll = function () {
    {
        if (window.scrollY >= 600) {
            arrow.style.display = "block"
        }
        else {
            arrow.style.display = "none"
        }
    }
    {
        if (window.scrollY >= 600) {
            navbar.style.backgroundColor = `black`
        }
        else {
            navbar.style.backgroundColor = `transparent`
        }
    }

}
arrow.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })

}
sidebar.onclick = function () {
    sidebar.classList.toggle("is-activ")
    mobilenav.classList.toggle("is-activ")

}