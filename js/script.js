window.onload = function() {
    document.querySelector('aside').classList.add('loadedUp');
    document.querySelector('img').classList.add('loadedUp');
    document.querySelector('article').classList.add('loadedDown');
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