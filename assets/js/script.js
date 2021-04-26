var win = 0;
var lose = 0;
var your_number = 0;

var random_chooser = function(a, b) {
    return Math.floor(Math.random() * (a - b)) + b;
}

var comp_number = random_chooser(20, 100);

$('#target-score').html(`${comp_number}`);

var values = {
    'blue': random_chooser(1, 10),
    'red': random_chooser(1, 10),
    'green': random_chooser(1, 10),
    'yellow': random_chooser(1, 10)
}
console.log('Blue:', values.blue, '\nGreen:', values.green, '\nRed:', values.red, '\nYellow:', values.yellow);

var game = function(value) {
    your_number += value;
    $('#your-score').html(your_number);
    if (comp_number == your_number) {
        win++;
        playAgain();
    } else if (your_number > comp_number) {
        lose++;
        playAgain();
    }
}

$('#blue').on('click', function() {
    game(values.blue);
});
$('#green').on('click', function() {
    game(values.green);
});
$('#red').on('click', function() {
    game(values.red);
});
$('#yellow').on('click', function() {
    game(values.yellow);
});

var playAgain = function() {
    comp_number = random_chooser(20, 100);
    your_number = 0;
    $('#target-score').html(comp_number);
    $('#your-score').html(your_number);
    $('#win_count').html(win);
    $('#lose_count').html(lose);
    values.blue = random_chooser(1, 10);
    values.red = random_chooser(1, 10);
    values.green = random_chooser(1, 10);
    values.yellow = random_chooser(1, 10);
    console.log('Blue:', values.blue, '\nGreen:', values.green, '\nRed:', values.red, '\nYellow:', values.yellow);
}