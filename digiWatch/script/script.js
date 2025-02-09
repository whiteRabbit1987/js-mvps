// Digital Relax Clock
let activeTimer = null;

function startMilTime(){
    clearInterval(activeTimer);
    activeTimer = setInterval(milClock, 1000);
    milClock();
 }
 
 function startRegTime(){
     clearInterval(activeTimer);
     activeTimer = setInterval(regClock, 1000);
     regClock();
 }

function milClock(){
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

function regClock(){
    
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
    document.getElementById('clock').textContent = timeString;
}


