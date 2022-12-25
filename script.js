var heartsList = []; // An array to store the heart objects
var colors = ['#FF0000', '#FFB6C1', '#FF7F50', '#FFC0CB', '#E6E6FA', '#663399', '#800000'];
// const colorPalette = [
// "#FF0000", // Red
// "#00FF00", // Green
// "#FFD700", // Gold
// "#C0C0C0", // Silver
// "#800020", // Burgundy
// "#008080", // Teal
// "#663399" // Purple
// ];

// const colorPalette = ["#FF66CC", "#FF69B4", "#FF00FF", "#FF1493", "#C71585", "#FFB6C1", "#DB7093", "#F08080", "#FF7F50", "#FA8072", "#FFA07A", "#FF6347", "#FF0000", "#8B0000", "#800000", "#E6E6FA", "#D8BFD8", "#DDA0DD", "#DA70D6", "#EE82EE"];
const colorPalette = ["#FF0000", "#FFB6C1", "#FF00FF", "#FF1493", "#C71585", "#FF66CC", "#FF69B4", "#FFB6C1", "#DB7093", "#F08080", "#FF7F50", "#FF6347", "#8B0000", "#E6E6FA", "#D8BFD8", "#DDA0DD", "#DA70D6", "#EE82EE"];

var colors = colorPalette;

var canvas = document.getElementById('myCanvas1');

var mouseX;
var mouseY;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, color) {
    // Get the canvas element and its context
    var ctx = canvas.getContext('2d');

    // Enable high-quality antialiasing
    ctx.imageSmoothingEnabled = true;

    // Set the fill style and globalAlpha based on the heart's y position
    var alpha = (y / (canvas.height / 2));
    var colorRGBA = hexToRgba(color, alpha);
    ctx.fillStyle = colorRGBA;

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

function generateHeart(x, y) {
    // Generate a random speed
    var speed = Math.random() * 1.5 + 0.75;

    // Create a new heart object and add it to the array
    var heart = new Heart(x, y, speed);
    heartsList.push(heart);
}

setInterval(function () {
    var border = 25;
    if ((mouseX>border && mouseX<(canvas.width-border))
        &&(mouseY>border && mouseY<(canvas.height-border))) {
        generateHeart(mouseX-50,mouseY-50);
        // console.log("On Screen!");
    }
}, 500);

// Add a new heart every half second
setInterval(function () {
    // Generate random x and y coordinates
    var x = Math.random() * canvas.width;
    var y = canvas.height;

    // Generate a random speed
    var speed = Math.random() * 1.5 + 0.75;

    // Create a new heart object and add it to the array
    var heart = new Heart(x, y, speed);
    heartsList.push(heart);
}, 500);

function drawSantaHat(x, y) {
    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas1');
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

function drawSnowflake(x, y) {
    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas1');
    var ctx = canvas.getContext('2d');

    // Set the stroke style to blue
    ctx.strokeStyle = '#0000FF';

    // Set the line width
    ctx.lineWidth = 2;

    // Draw the snowflake
    ctx.beginPath();
    ctx.moveTo(x, y - 10);
    ctx.lineTo(x - 10, y + 10);
    ctx.lineTo(x + 10, y + 10);
    ctx.closePath();

    ctx.moveTo(x - 10, y);
    ctx.lineTo(x + 10, y);

    ctx.moveTo(x, y + 10);
    ctx.lineTo(x - 10, y - 10);
    ctx.lineTo(x + 10, y - 10);
    ctx.closePath();

    // Stroke the snowflake
    ctx.stroke();
}

function drawCross(x, y) {
    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas1');
    var ctx = canvas.getContext('2d');

    // Set the stroke style to black
    ctx.strokeStyle = '#000000';

    // Set the line width
    ctx.lineWidth = 2;

    // Draw the cross
    ctx.beginPath();
    ctx.moveTo(x - 10, y - 10);
    ctx.lineTo(x + 10, y + 10);
    ctx.moveTo(x + 10, y - 10);
    ctx.lineTo(x - 10, y + 10);
    ctx.stroke();
}

function hexToRgba(hex, alpha) {
    // Remove the # symbol
    var hexWithoutHash = hex.slice(1);

    // Convert 3-digit hex to 6-digit hex
    if (hexWithoutHash.length === 3) {
        hexWithoutHash = hexWithoutHash.split('').map(function (c) {
            return c + c;
        }).join('');
    }

    // Split the hex into its red, green, and blue components
    var red = parseInt(hexWithoutHash.slice(0, 2), 16);
    var green = parseInt(hexWithoutHash.slice(2, 4), 16);
    var blue = parseInt(hexWithoutHash.slice(4, 6), 16);

    // Construct the RGBA value
    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
}


// Update function
function update() {
    // Clear the canvas
    var canvas = document.getElementById('myCanvas1');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Testing mouse drawing
    // generateHeart(mouseX, mouseY);

    // Update and draw the hearts
    for (var i = 0; i < heartsList.length; i++) {
        var heart = heartsList[i];
        heart.move();
        // Set the globalAlpha based on the heart's y position
        if (heart.y < (canvas.height / 2)) {
            // ctx.globalAlpha = ((heart.y + 250)/ (canvas.height/2));
            // console.log(heart.y)
            // console.log(canvas.height)
        }
        heart.draw();

        // Remove the heart if it is off screen
        if (heart.y + 120 < 0) {
            heartsList.splice(i, 1);
        }
    }

    // Request another animation frame
    requestAnimationFrame(update, 1000, 30);
}

// Start the animation
update();
drawSnowflake(window.innerWidth / 2, 250);
drawCross(50, 50);






// Add an event listener for the mousemove event
canvas.addEventListener('mousemove', function (event) {

    // Get the mouse positions for events and store them in global variables
    mouseX = event.clientX;
    mouseY = event.clientY;
});


// dynamic text output to elements
const element = document.querySelector('#line1');

let text = '';
let index = 0;
let animating = false;
const message1 = 'Greetings, my dearest Princess Catherine,';
const message2 = 'hekkiGreetings, my dearest Princess Catherine,';

function animateText(message) {
    animating = true;
    const intervalId = setInterval(() => {
      text += message[index];
      if ((message[index] == '<') && (message[index+2] == '>')) {
        text = text + message[index+1] + message[index+2];
        index += 2;
        element.innerHTML = text;
      }
      else if ((message[index] == '<') && (message[index+3] == '>')){
        text = text + message[index+1] + message[index+2] + message[index+3];
        index += 3;
        element.innerHTML = text;
      }
      else{
          element.textContent = text;
      }
      index++;
      if (index === message.length) {
        clearInterval(intervalId);
        animating = false;
        // console.log("HERE")
        // index = 0;
        // animateText(message2);
      }
    }, 200);
}
  
animateText(message1);
console.log("animating");
// while (animating) {}
setTimeout(() => {
    console.log("Now HERE"); 
    if (!animating) {
        text = '';
        index = 0;
        animateText(message2);
        console.log("HERE")
    }
}, 2000);