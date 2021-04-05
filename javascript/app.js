// The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

// NOTES: Sections needed for --- 
// add player - Adding player to a list (input + buttons)
// make team - adding player to team (button needed)


((document) => {

    // console.log(document);
    // console.log("Hello!");

    // setting variables 
    let plusButton = document.getElementById("plusbutton") // adding player
    let input = document.getElementById("player") // input field for player to be added 
    let ul = document.getElementById("list") // list where 'input' AKA players will display 
    let makeButton = document.getElementById("makebutton") // button for making a team :) 
    let team = document.getElementById("random-list") // this is the final list where teams are displayed 
    
    // editing variables --- as not specfic enough below
    // let buttonTournament = document.getElementById("tournament")
    // let random = document.getElementById("random");
    // let button = document.getElementbyID("winners")
    // let count = 0; 
    // let array = [];
    // let pairing = [];
    // let store = []; 
    
    // ADDING PLAYER NAME 

    const list = []; 

    plusButton.addEventListener ("click", () => {

        if (input.value.length == 0) {   // setting to stop user = entering an empty string -- keep this?? 
            alert("Please enter a player name");
        }  

        let li = document.createElement("li"); // Adds input to list 
        li.textContent = input.value; // what user has typed

        // console.log(li.textContent);
        li.classList.add("list-group");// plus?
        ul.prepend(li);
        
        list.push (input.value)
        input.value = ""; 

        console.log(list);

        return list;
         
    });

//     // "MAKE TEAMS" -- need to Array() method sort here
//    // https://www.w3schools.com/jsref/jsref_sort.asp <-- for ref
//    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random <-- need this also somewhere 

//     makebutton.addEventListener ("click", () => { // adding EL 

//        let names = list;  // names = list
//        names.sort(() => 0.5 - Math.random()); // randomize names
//        let bracket = []; // put pairs go into empty array

//        // - can we use 'while' loop here? - poss if/else?
//        while (names.length >= 2) {
//            let bracket = `${names.pop}()} ${"VS."} ${names.pop()}`
          
//            bracket.push(bracket); // pushes bracker/pair created 

//            let lastlist = docment.createElement('p')
//            lastlist.text = bracket; 
//            lastlist.classList.add("list-group")
//            ul.prepend(lastlist)
//        }

//     });
   
})(document);