function showMenu() {
    document.getElementById("menu").style.width = "150px"
}

function closeMenu() {
    document.getElementById("menu").style.width = "0px"
}

function changeSize() {
    if (window.innerWidth >= 768) {
        document.getElementById("menu").style.width = "150px"
    } else {
        document.getElementById("menu").style.width = "0px"
    }
}