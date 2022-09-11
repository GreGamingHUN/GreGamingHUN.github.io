circleDiv = null

window.onload = function() {
    const circleRed = document.getElementById('redCircle')
    const circleWhite = document.getElementById('whiteCircle')
    circleDiv = document.getElementById('circleDiv')
    circleRed.classList.add('circleRed')
    circleWhite.classList.add('circleWhite')
    setTimeout(remove, 2000)
}

function remove() {
    circleDiv.classList.add('hidden')
    setTimeout(deletenow, 400)
}

function deletenow() {
    circleDiv.remove()
    document.getElementById('navbar').classList.add('navbar')
    document.getElementById('demeter').classList.add('demeter')
    document.getElementById('mainMainDiv').classList.add('shown')
}