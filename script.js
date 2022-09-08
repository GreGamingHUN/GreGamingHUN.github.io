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
    document.getElementById('navbar').classList.add('navbar')
    circleDiv.remove()
}