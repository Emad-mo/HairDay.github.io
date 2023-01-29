let navbar = document.getElementById("navbar")
let sidebar = document.getElementById("sidebar")
let arrow = document.getElementById("arrobtn")
let mobilenav = document.getElementById("navv")
let bluree = document.getElementById("bluree")
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
    bluree.classList.toggle("is-activ")

}
bluree.onclick = function () {
    if (bluree.classList.contains("is-activ")) {
        mobilenav.classList.remove("is-activ")
        bluree.classList.remove("is-activ")
        sidebar.classList.toggle("is-activ")
    }
}