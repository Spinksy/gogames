var countdown = 10;
var fish = ['fish-yellow.png',
    'fish-blue.png',
    'fish-purple.png'];

var score = 0;


score++;
$('#score').text(score);

if (score >= 10) {
    gameOver();
}

function addStitch() {
    score++;
    score++;
    score++;

    $('#score').text(score);

    if (score >= 10)
        gameOver();
}

$('#fish').click(addScore);
$('#stitch').click(addStitch);

function moveFish() {
    var newCSS = {
        'top': Math.random() * 500 + 'px',
        'left': Math.random() * 1300 + 'px'
    };

    $('#fish').css(newCSS);

    var randomNum = Math.floor(Math.random() * fish.length);
    var newFish = fish[randomNum];

    $('#fish').attr('src', newFish);
}

function moveStitch() {
    var newCSS = {
        'top': Math.random() * 500 + 'px',
        'left': Math.random() * 1300 + 'px'
    };

    $('#stitch').css(newCSS);
}

setInterval(moveFish, 1000);

setInterval(moveStitch, 1000);

function gameOver() {
    $('#gameOver').show();
    $('#fish').hide();
    $('#stitch').hide();
}
