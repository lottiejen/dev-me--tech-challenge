// The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

// Some optional advanced features might include:

// ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs

// Functionality
 
// need to be able to add players to an list/array, randomize them and put them in pairs.
// record scores for each player, see who's won. (first to 21)
// the total number of players needs to be a power of 2 (i.e. 4, 8, 16, 32 ...)

((document) => {

    console.log(document);

    // setting variables 
    let button = document.getElementById("add")
    let buttonTournament = document.getElementById("tournament")
    let input = document.getElementById("player")
    let container = document.getElementById("container");
    // let button = document.getElementbyID("winners")
    let count = 0; 
    // let array = [];
    let pairing = [];
    let store = []; 
    
    // -- adding event listener -- adds player name 
    button.addEventListener ("click", () => {
    let input = document.getElementById("player")

        if (input.value.length == 0) {   // setting to stop user entering an empty string 
            alert("Please enter a player name");
       
        } else {
            
        // takes name and puts it into list 
            store.push(input.value);
            console.log(store);
            
            let listAdd = document.createElement("li");                 // Create a <li> node
            let textnode = document.createTextNode(input.value);         // Create a text node
            listAdd.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("player-list").append(listAdd);     // Append <li> to <ul> with id="myList"
            input.value = "";
            count++; 
            }
    
    });
            // generate random pairs tournament 
    //         button.addEventListener ("click", (e) => {
    //         let buttonTournament = document.getElementById("tournament")
    //         // let 
    
    // });
    
    
    
})(document);