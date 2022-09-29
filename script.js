circleDiv = null

window.onload = function() {
    const circleRed = document.getElementById('redCircle')
    const circleWhite = document.getElementById('whiteCircle')
    circleDiv = document.getElementById('circleDiv')
    circleRed.classList.add('circleRed')
    circleWhite.classList.add('circleWhite')
    const scrollButton = document.getElementById("scrollButton")
    setTimeout(remove, 2000)
}

function remove() {
    circleDiv.classList.add('hidden')
    setTimeout(deletenow, 400)
}

function deletenow() {
    circleDiv.remove()
    document.getElementById('navbar').classList.add('navbar')
    document.getElementById('navbar').classList.remove('hiddenNoTrans')
    document.getElementById('demeter').classList.add('demeter')
    document.getElementById('mainMainDiv').classList.add('shown')
}

function scrollToWorks() {
    window.scrollTo(0, 1000);
}

function scrollToLanding() {
    window.scrollTo(0, 0);
}

function scrollToContacts() {
    window.scrollTo(0, 2000)
}

let scrollCoord = 0;

window.addEventListener("scroll", function() {
    const scrollButton = document.getElementById('scrollButton')
    const navbar = document.querySelector('#navbar')
    const navbarDiv = document.getElementById('navbarDiv');
    if (scrollCoord < window.scrollY) {
        if (window.scrollY > 82) {
            navbar.classList.remove('navbarBackgroundChange')
            navbar.classList.remove('navbar')
            navbar.classList.remove('navbar2')
            navbar.classList.add('hiddenNavBar')
        }
    } else {
        navbar.classList.remove('hiddenNavBar')
        navbarDiv.style.position = 'fixed';
        navbar.classList.add('navbar2')
    }
    scrollCoord = window.scrollY;

    if (window.scrollY != 0) {
        scrollButton.classList.add('scrollButton')
    } else {
        navbar.classList.remove('navbar2')
        navbar.classList.add('navbarBackgroundChange')
        navbarDiv.style.position = 'absolute';
        scrollButton.classList.remove('scrollButton')
        
    }
})