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

//render
render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((confetta, index)=> {
     let width = confetta.dimensions.x * confetta.scale.x;
     let height = confetta.dimensions.y * confetta.scale.y;

//move canvas to the position and rotate
     context.translate(confetta.position.x, confetta.position.y);
     context.rotate(confetta.rotation);
//control the velocity
     confetta.velocity.x += confetta.velocity.x;
     confetta.velocity.y = Math.min(confetta.velocity.y + gravity, terminalVelocity);
     confetta.velocity.y += Math.random() > 0.5 ? Math.random() : -Math.random();

//set position
     confetta.position.x += confetta.velocity.x;
     confetta.position.y += confetta.velocity.y; 

//delete confetti when out of frame
     if(confetta.position.y >= canvas.height) confetti.splice(index,1);

//loop confetta x position
     if(confetta.position.x > canvas.width) confetta.position.x = 0;
     if(confetta.position.x < 0) confetta.position.x = canvas.width;

//spin confetta by scaling y 
    })
}