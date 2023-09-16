var daysem = document.querySelector(".days h1");
var hoursem = document.querySelector(".hours h1");
var minutsem = document.querySelector(".minuts h1");
var secondsem = document.querySelector(".seconds h1");

setInterval(function()
{
    var today = new Date();

    var future = new Date(2024, 0, 1, 0, 0, 0, 0);
    
    
    
    var diff = future - today;
    var seconds = Math.floor((diff / 1000));
    var minuts = Math.floor((diff /( 1000 * 60)));
    var hours = Math.floor((diff / (1000 * 60 * 60)));
    var day = Math.floor((diff / (1000 * 60 * 60 * 24)));
    
    hours = hours % 24;
    seconds = seconds % 60;
    minuts = minuts % 60;
    
    daysem.textContent = day;
    hoursem.textContent = hours;
    minutsem.textContent = minuts;
    secondsem.textContent = seconds;
},1000)

