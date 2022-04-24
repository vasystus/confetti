canvas = document.getElementsById("confetti");
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
conx = context.canvas.width/2;
cony = context.canvas.height/2;
const button = document.getElementById("button");

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const velocity = 5;
const drag = 0.075;
const colors = [
    {front: 'red', back: 'darkred'},
    {front: 'orange', back: 'darkorange'},
    {front: 'yellow', back: 'darkyellow'},
    {front: 'green', back: 'darkgreen'},
    {front: 'turquoise', back: 'darkturqoise'},
    {front: 'blue', back: 'darkblue'},
    {front: 'purple', back: 'darkpurple'},
    {front: 'pink', back: 'darkpink'}
];

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti= () => {
    for(let i = 0; i < confettiCount; i++) {
        confetti.push({
            color:colors[Math.floor(randomRange(0, colors.length))],
            dimensions: {
                x: randomRange(10,20),
                y: randomRange(10,30)
            },
            position:{
                x: randomRange(0, canvas.width),
                y: canvas.height-1
            },
            rotation: randomRange(0, 2 * Math.PI),
            scale: {
                x: 1,
                y: 1
            },
            velocity: {
                x: randomRange(-25,25),
                y: randomRange(0,-50)
            }
        });
    } 
}; 

//add Event Listener on button
button.addEventListener('click', function () {
    initConfetti();
});