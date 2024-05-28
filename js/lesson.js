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

//converter

const usd = document.querySelector('#usd')
const som = document.querySelector('#som')
const eur= document.querySelector('#eur')
const converter = (element, targetElement, targetElement2) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()

            if (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = (element.value * (data.usd / data.eur)).toFixed(2)
            }
            if (element.id === 'eur') {
                targetElement.value = (element.value * data.eur).toFixed(2)
                targetElement2.value = (element.value * (data.eur / data.usd)).toFixed(2)
            }
            element.value === '' && (targetElement.value = targetElement2.value = '')
        }catch (error){
            console.log(error)
        }
    }
}


converter(som, usd, eur)
converter(usd, som, eur)
converter(eur, som, usd)



//DRY - do not repeat yourself
//KISS - keep it simple stupid


//card switcher

const card = document.querySelector('.card')
const next = document.querySelector('#btn-next')
const prev = document.querySelector('#btn-prev')
let cardId = 1
const loadCardData = async(id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ?'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    } catch (error) {
        console.error(error)
    }
}
const setCardId = (id) => id< 1? 200 : id >200 ? 1 :id

window.onload = async ()=>{
    await loadCardData(cardId)
}
next.onclick = async () => {
    cardId = setCardId(++cardId)
    await loadCardData(cardId)
}
prev.onclick = async () => {
    cardId = setCardId(--cardId)
    await loadCardData(cardId)
}


//WEATHER
const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather`
const APP_ID = 'e417df62e04d3b1b111abeab19cea714'
const citySearch = () => {
    citySearchInput.oninput = async (event) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${APP_ID}`)
            const data = await response.json()
            cityName.innerHTML = data.name || 'City is not defined'
            cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
        }catch (error){
            console.log(error)

        }
    }
}
citySearch()

//optional chaining - ?.


