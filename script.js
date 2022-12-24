var heartsList = []; // An array to store the heart objects
var colors = ['#FF0000', '#FFB6C1', '#FF7F50', '#FFC0CB', '#E6E6FA', '#663399', '#800000'];
const colorPalette = [
"#FF0000", // Red
"#00FF00", // Green
"#FFD700", // Gold
"#C0C0C0", // Silver
"#800020", // Burgundy
"#008080", // Teal
"#663399" // Purple
];
// var colors = colorPalette;

var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, color) {
    // Get the canvas element and its context
    var ctx = canvas.getContext('2d');

    // Set the fill style to the hearts colour
    ctx.fillStyle = color;
    // Draw a heart shape on the canvas
    ctx.beginPath();
    ctx.moveTo(x + 52.5, y + 28);
    ctx.bezierCurveTo(x + 52.5, y + 26.1, x + 49, y + 18.75, x + 35, y + 18.75);
    ctx.bezierCurveTo(x + 14, y + 18.75, x + 14, y + 46.875, x + 14, y + 46.875);
    ctx.bezierCurveTo(x + 14, y + 56, x + 28, y + 71.4, x + 52.5, y + 84);
    ctx.bezierCurveTo(x + 77.5, y + 71.4, x + 91, y + 56, x + 91, y + 46.875);
    ctx.bezierCurveTo(x + 91, y + 46.875, x + 91, y + 18.75, x + 70, y + 18.75);
    ctx.bezierCurveTo(x + 57.5, y + 18.75, x + 52.5, y + 26.1, x + 52.5, y + 28);
    ctx.fill();
}

function Heart(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // Set the fill style to a random color
    this.color = colors[Math.floor(Math.random() * colors.length)];
}

Heart.prototype.move = function () {
    this.y -= this.speed; // Move the heart up by its speed
}

Heart.prototype.draw = function () {
    drawHeart(this.x, this.y, this.color); // Draw the heart at its current position
}

function update() {
    // Clear the canvas
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw the hearts
    for (var i = 0; i < heartsList.length; i++) {
        var heart = heartsList[i];
        heart.move();
        heart.draw();

        // Remove the heart if it is off screen
        if (heart.y + 120 < 0) {
            heartsList.splice(i, 1);
        }
    }

    // Request another animation frame
    requestAnimationFrame(update);
}

// Add a new heart every second
setInterval(function () {
    // Generate random x and y coordinates
    var x = Math.random() * canvas.width;
    var y = canvas.height;

    // Generate a random speed
    var speed = Math.random() * 2 + 1;

    // Create a new heart object and add it to the array
    var heart = new Heart(x, y, speed);
    heartsList.push(heart);
}, 1000);

function drawSantaHat(x, y) {
    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Set the fill style to red
    ctx.fillStyle = '#FF0000';

    // Draw the hat brim
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y);
    ctx.lineTo(x + 50, y - 50);
    ctx.closePath();
    ctx.fill();

    // Draw the hat top
    ctx.beginPath();
    ctx.moveTo(x + 50, y - 50);
    ctx.lineTo(x + 25, y - 100);
    ctx.lineTo(x + 75, y - 100);
    ctx.closePath();
    ctx.fill();
}


// Start the animation
update();

// drawSantaHat(250, 500);