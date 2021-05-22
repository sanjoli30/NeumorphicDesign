const triangles = document.querySelectorAll('.triangle')

let move = 0

window.addEventListener('click', moveTriangles)

function moveTriangles() {
    console.log(move)

    if(move === 0) {
        triangles[0].classList.remove('move')
        triangles[1].classList.remove('move')
        triangles[0].classList.add('move-up')
        triangles[1].classList.add('move-down')
        move++
    } else {
        triangles[0].classList.remove('move-up')
        triangles[1].classList.remove('move-down')
        triangles[0].classList.add('move')
        triangles[1].classList.add('move')
        move--
    }
}