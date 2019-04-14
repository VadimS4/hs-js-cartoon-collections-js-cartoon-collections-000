//#1 Turn a normal list of names into a numbered list of names
var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  
  var numDwarves = [];
  for (var i = dwarves.length / 2; i < dwarves.length; i++){
    numDwarves.push(`${i+1}. ${dwarves[i]}`);
    
    //numDwarves.push(i + 1 + ". " + dwarves[i]);
  }
  return numDwarves.join(" ");
}


// #2 Make all items in the array in Caps
function summonCaptainPlanet(planeteerCalls){
  
  return planeteerCalls.map(a=>a.toUpperCase() + "!");
  }

//#3 Create a function that returns words from an array only if they are longer than 4 letters
function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }
  }
  return false;
}

var words = ["wind", "fire"];
longPlaneteerCalls(words);


//#4 Function that returns items from an array that are only cheeses.
function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i < foods.length; i++){
    for ( var m = 0; m < cheese.length; m++){
      if (foods[i] == cheese[m]){
        return foods[i];
      }
    }
  return "no cheese!";
}

var words = ["Jessica", "John", "Bam"];
function wordsWithB(words){
  
  var namesWithB = [];
  for (var i = 0; i < words.length; i++){
    if (words[i].charAt(0).toLower() == "b"){
      namesWithB.push(words[i]);
    }
  }
  return namesWithB;
}

