const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[A-Za-z0-9.]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'true'
    }
    else {
        gmailResult.innerHTML = 'false'
    }
}

const parent = document.querySelector('.parent_block')
const child = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxWidth = parent.offsetWidth - child.offsetWidth
const maxHeight = parent.offsetHeight - child.offsetHeight

const moveBlock = () => {
    if (positionX < maxWidth && positionY === 0) {
        positionX++
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX >= maxWidth && positionY < maxHeight) {
        positionY++
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    } else if (positionY >= maxHeight && positionX > 0) {
        positionX--
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionY > 0 && positionX === 0) {
        positionY--
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()


const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let timer = 0
let interval = null

function counter (){
    document.getElementById("seconds").textContent= timer
}
function startCounter (){
    clearInterval(interval)
    interval= setInterval(()=> {
        timer++
        counter()
    }, 1000)
}

function stopCounter (){
    clearInterval(interval)
}
function resetCounter (){
    clearInterval(interval)
    timer = 0
    counter()
}
start.addEventListener("click", startCounter);
stop.addEventListener("click", stopCounter);
reset.addEventListener("click", resetCounter);










