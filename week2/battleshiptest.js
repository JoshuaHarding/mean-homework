var ask = require('readline-sync');


var grid = [];
var rows = 10;
var columns = 10;
var ships_remaining = 3;

main();
function main(){
	makeGrid();
	var ships_to_win = 3 - ships_remaining;
	while(ships_to_win > 0){
		console.log(ships_to_win);
		printGrid();
		ships_to_win -= fire();
	}
	console.log('You are the winner!');
}

function makeGrid(){
	for( var x = 0; x < rows; x++){
		grid.push([]);
		for( var y = 0; y < 10; y++){
			var space = {
				hit: false,
				ship: determineShip(x, y)	
			};
			grid[x].push(space);

		}
	}
}

function determineShip(x, y){
  if (ships_remaining > 0){
	// This seems to always return true on the first 2 lines.  Check math logic.
	if((Math.floor(Math.random() * 20) == 10)){
    	ships_remaining--;
		console.log(x + ", " + y);
		return true;
    }
  }

  return false;
}


function printGrid(){
	for( var x = 0; x < rows; x++){
		var line = [];
		for( var y = 0; y < 10; y++){
			var space = grid[x][y];
			if (space['hit'] == true){ // shot here, is there a ship or not?
				if (space['ship'] == true){
					line.push('X');
				} else {
					line.push('O');
				}
			} else { // never shot at this spot before
				line.push('~');
			}
		}
		console.log(line);
	}
}

function fire(){
	var cordx = ask.question("X ? ");
	var cordy = ask.question("Y ? ");
	var shot_result = checkSpace(cordx, cordy);
	var ships_destroyed = 0;

	updateSpace(cordx, cordy, shot_result);

	if (shot_result == true){
		console.log('Hit!');
		ships_destroyed = 1;
	} else {
		console.log('Miss.');
	}

	return ships_destroyed;
}

function checkSpace(x, y){
	var shot_result = grid[x][y]['ship'];
	return shot_result;
}

function updateSpace(x, y){
	var space = grid[x][y];
	space['hit'] = true;
}