function handleMouseEnter() {
    this.classList.add('card--hovered')
    document.body.id = `${this.id}-hovered`;
}

function handleMouseRemove() {
    this.classList.remove('card--hovered')
    document.body.id = '';
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

