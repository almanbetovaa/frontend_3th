// modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
let ModalShown = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}


const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => {
    openModal()
}
 modalCloseButton.onclick = () =>{
    closeModal()
 }
 modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
 }
const handleScroll =() => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
    if (scrolledToBottom && !ModalShown) {
        openModal()
        window.removeEventListener('scroll', handleScroll)
    }
}

window.addEventListener('scroll', handleScroll)

setTimeout(() =>{
    if (!ModalShown) {
        openModal()
        window.removeEventListener('scroll', handleScroll)
    }
}, 10000)
