"use strict";

let {dataArea, grabArea} = require('./fire');

    console.log("hello from map.js");

// INSTRUCTIONS

//var myImage = new Image();
//myImage.src = 'images/map_PiratesCove.jpg';
//document.body.appendChild(myImage);

let instructions = document.getElementById("instructions");
let mapAreas = document.getElementsByClassName("map_class");
let emptyCells = document.getElementById("empty");
let defaultInstructionText = "<h3>Welcome to the Pirate's Cove Interactive Map!</h3><br><h4>Instructions on how to use this map:</h4><br><ul><li>Click on a section of the map with a number to see that area of Pirate's Cove</li><li>View and read about all of the attractions and areas to visit in that area of the park.</li><li>To view another area of the park, click on another number on the Pirate's Cove Map</li><li>Have fun!</li>";
let printFire = document.getElementById("areaList");


//AREA DISPLAYS
function displayArea(e) {
        console.log("Hello", e.target.id);  
        grabArea(e.target.id)
.then(function(response){
    // console.log("response: ", response);
    let keys = Object.keys(response);
    // console.log("keys", keys);
    keys.forEach(function(item){
        // console.log("attraction names: ", response[item].name, "description: ", response[item].description);
        printFire.innerHTML += `<p><a href="#">${response[item].name}</a></p>`;   
    });
// let block = `<section id="card--${}" class="card-wrapper" style="border: 2px solid black">
// <h3><a href="#">${response[item].name}</a>  (${response[item].type_id})</h3>
// </section>`;
// return block;
});
} 

function setdefaultInstructionsText() {
        // if area 9 is selected (empty), then print defaultInstructionText
        // create a button that says "see instructions" which will print defaultInstructionText
    }


    for (let i = 0; i < mapAreas.length; i++){
        mapAreas[i].addEventListener("click", displayArea);
    }

// for loop for the empty cells to add event listener to change content to default instructions

    console.log("mapAreas", mapAreas);

module.exports = {displayArea};


// use an overlay with a grid, each cell would have its own class name or id
// string manipulation: each cell that links to something (attractions), will have a class name
// add event listener to those classes, to call the function

// first part of function will be to know which cell was clicked
// second - ask firebase for the information, which is where the promise comes from
// third - return what firebase information was called, and display

// add separate class name to any cells that are empty, which would call to the default instructions id

// create an empty div


// TO TEST - create one id for the entire map image, then break it out to the different cells
// for all of these cells, find the differences

