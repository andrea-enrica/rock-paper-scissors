//Radom coputer selection

function computerPlay () {
    var array = ["Rock", "Paper", "Scissors"];
    var result = "";
    result = (Math.floor(Math.random()*(2-0+1)));
    return array[result];
}


