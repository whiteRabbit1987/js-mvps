const eventBox = document.getElementById('eventBox');

const move = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            eventBox.style.top = `${y -= move}px`;
            break;
        case 'ArrowDown':
            eventBox.style.top = `${y += move}px`;
            break;
        case 'ArrowLeft':
            eventBox.style.left = `${x -= move}px`;
            break;
        case 'ArrowRight':
            eventBox.style.left = `${x += move}px`;
            break;
    }
});

document.addEventListener('keydown', event => {
    eventBox.style.backgroundColor = 'red';
    eventBox.textContent = "Too fast 😖";
});

document.addEventListener('keyup', event => {
    eventBox.style.backgroundColor = 'blue';
    eventBox.textContent = "Click me! 😁";
});

eventBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = "Don't! 😥";
});

eventBox.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'blue';
    event.target.textContent = "Click me! 😁";
});

eventBox.addEventListener('click', event => {
    event.target.style.backgroundColor = 'red';
    event.target.textContent = 'OUCH! 😵‍💫';
});

