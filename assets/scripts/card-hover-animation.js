function handleMouseEnter() {
    this.classList.add('card--hovered')
}

function handleMouseRemove() {
    this.classList.remove('card--hovered')
}

function addEventListenersToCard() {
    const cardElements = document.getElementsByClassName('card');
   

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseRemove);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false)

