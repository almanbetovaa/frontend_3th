window.onload = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        renderCards(data)
    } catch (error) {
        console.log(error)
    }
}
const renderCards =(data) => {
    const cardContainer= document.getElementById('cardContainer')
    data.forEach(cardData => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
                    <img src="https://itproger.com/img/courses/1476977754.jpg" alt="JS image">
                    <h2>${cardData.title}</h2>
                    <p>${cardData.body}</p>
                `
        cardContainer.appendChild(card)
    })
}