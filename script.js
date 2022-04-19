canvas = document.getElementsById("confetti");
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
conx = context.canvas.width/2;
cony = context.canvas.height/2;

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


