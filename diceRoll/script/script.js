function rollDice() {
    const numDice = document.getElementById('numDice').value;
    const result = document.getElementById('result');
    const imgDice = document.getElementById('imgDice');
    const values = [];
    const images = [];

    for(let i = 0; i < numDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/white${value}.png" alt="Dice${value}">`);
    }
    result.textContent = `dice: ${values.join(', ')}`;
    imgDice.innerHTML = images.join('');
}
