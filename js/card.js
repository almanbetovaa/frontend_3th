const cardContainer= document.getElementById('cardContainer')
const cards = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
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
    } catch (error) {
        console.log(error)
    }
}
cards()