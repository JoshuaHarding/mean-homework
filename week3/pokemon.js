// JQuery Listeners
var poke_name;
var timerNum = 15;
var fail_count = 0;
var win_count = 0;
var name_array = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'pikachu', 'raichu', 'squirtle', 'charizard', 'wartortle',
 'butterfree', 'sandshrew', 'jigglypuff', 'vulpix', 'gloom', 'kadabra', 'poliwrath', 'graveler', 'rapidash', 'cloyster',];
var success_array = [];


$(function(){
	start();
	poke_decide();
	$('#make-guess').click(makeGuess);
});

function makeGuess(){
	var guess = $('#guess-input').val();
		
	if (guess === poke_name) {
		youWin(poke_name);
	} else {
		youLost();
	}

	timerNum = 10;
	poke_decide();
}

function youLost(){
	alert('Wrong!');
	fail_count++;
	$('#sad' + fail_count).show();
}

function youWin(poke_name){
	alert('Right!');
	win_count++;
	$('#color' + win_count).attr("src", "./assets/img/pokeball.png");
	var index = name_array.indexOf(poke_name);
	success_array.push(name_array[index]);
}

function start(){
	makeGray();
	makeInvisible();
	poke_decide();
}

var timer = setInterval(function(){
	guessTimer();
}, 1000);

function guessTimer() {
	if(timerNum < 0){
		timerNum = 15;
		youLost();
	}
	$("#timer").html(timerNum);
	timerNum--;
}

function makeGray(){
	$('.gray').attr("src", "./assets/img/pokeball-grey.png");
}

function makeInvisible(){
	$('.sad').hide();
}

var pokemon = function(name){
	this.name = name;
	this.path = "assets/img/" + (name_array.indexOf(name) + 1) + '.png';
};

function poke_decide() {
	poke_name = name_array[Math.floor(Math.random() * (name_array.length))];
	var poke = new pokemon(poke_name);

	if(success_array.indexOf(poke_name) != -1){
		poke_decide();
	} else {
		$("#pokemon_image").attr('src', poke.path);
	}

}


