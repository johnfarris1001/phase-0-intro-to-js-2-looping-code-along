function writeCards(names, event) {
    const newCards = [];
    for (let i = 0; i < names.length; i++) {
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newCards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}