window.onload = function() {
    document.querySelector('img').classList.add('loadedUp');
    document.querySelector('#nome').classList.add('loadedDown');
    document.querySelector('aside').classList.add('loadedUp');
};

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