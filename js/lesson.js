const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneResult.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else{
        phoneResult.innerHTML= 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// Tab slider
const tabContentBlocks = document.querySelectorAll('.tab_content_block')

const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let currentIndex = 0;
let intervalId

const hideTabContent = () => {
    tabContentBlocks.forEach( (item) => {
        item.style.display = 'none'
    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    } )
}
const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}
const startSlider = () => {
    intervalId = setInterval(() => {
        hideTabContent()
        currentIndex = (currentIndex + 1) % tabContentItems.length
        showTabContent(currentIndex)
    }, 3000)
};

const stopSlider = () => {
    clearInterval(intervalId);
}
hideTabContent()
showTabContent()
startSlider()

tabParent.onclick = (event)=> {
    if (event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((item, index) => {
            if (event.target === item){
                currentIndex = index
                hideTabContent()
                showTabContent(index)
                stopSlider()
                startSlider()
            }
        })
    }
}
