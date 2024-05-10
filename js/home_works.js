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

const moveBlock = () => {
    if (positionX < 449){
        positionX++
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()
