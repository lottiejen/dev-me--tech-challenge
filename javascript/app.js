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
    let button = document.getElementById("add") // adding player
    let input = document.getElementById("player") // input field for player to be added 
    let ul = document.getElementById("list") // list where 'input' AKA players will display 
    let makeButton = document.getElementById("make-button") // button for making a team :) 
    let team = document.getElementById("random-list") // this is the final list where teams are displayed 
    
    // refactoting variables, as not specfic enough 
    // let buttonTournament = document.getElementById("tournament")
    // let random = document.getElementById("random");
    // let button = document.getElementbyID("winners")
    // let count = 0; 
    // let array = [];
    // let pairing = [];
    // let store = []; 
    
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

            // Generate pairs randomly
            random.addEventListener("click", (e) => {
            let x = 2;  // we need x2 people!
            let randomName = []; // names fed into array 
            let temp = store; 
            
            if (store.length % 2 == 1) { // if user submits odd number -- u get a pop up msg
                alert("The submitted players' number must be even");
                
            } else {

                for (let i = 0; i < store.length; i += 2) { 
    
                    // Choose 2 random players
                    randomItem = temp.sort(() => Math.random() - Math.random()).slice(0, n);
    
                    // Add 2 paired players to the finalPairing array
                    finalPairing.push(randomItem);
    
                    // Store the rest of players except the 2 previously paired players
                    temp = temp.filter(v => !randomItem.includes(v));
                }
    
            }
    
            // Put paired players into the list
            for (let j = 0; j < finalPairing.length; j++) {
    
                let item = d.createElement("li");
                item.append("Pairing: " + finalPairing[j][0] + " vs " + finalPairing[j][1]);
                d.getElementById("list-pairs").append(item);
            }
    
        });
    
        // Generate the winners randomly
        winner.addEventListener("click", () => {
    
            for (let i = 0; i < finalPairing.length; i++) {
    
                // Choose 1 random player from the finalPairing array
                winner = finalPairing[i][Math.floor(Math.random()*finalPairing[i].length)];
    
                let item = d.createElement("li");
                item.append(winner);
                d.getElementById("list-win").append(item)
            }
    
        });
    
})(document);