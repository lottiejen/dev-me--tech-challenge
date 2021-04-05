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
    let makeButton = document.getElementById("makebutton") // button for making a team
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

        let li = document.createElement("li"); // creating a new list item when you click 'Add' 
        li.textContent = input.value; // what user has typed
        li.classList.add("list-group"); // add to list
        ul.prepend(li);
        
        list.push (input.value)
        input.value = ""; 

        console.log(list);

        return list;
         
    });

//     // "MAKE TEAMS" -- need to Array() method sort here
//    // https://www.w3schools.com/jsref/jsref_sort.asp <-- for ref
//    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random <-- need this also somewhere 

    // MAKE TEAM 

    makeButton.addEventListener ("click", () => { // adding EL 

        // variables 

       let names = list;  // names = list
       let partners = []; // feed into empty array

       names.sort(() => 0.5 - Math.random()); // randomize names

       // - tried if/else. Use 'while' maybe? 
       while (names.length >= 2) {
           let partner = `${names.pop()} ${"VS."} ${names.pop()}` // interpolate + concat?
          
           // this *should* push the partners who've been created 

          partners.push(partner); // pushes partners cretaed 
           console.log(partner);

           let lastlist = document.createElement('p')
           lastlist.textContent = partner; 
           lastlist.classList.add("list-group")
        //    ul.prepend(lastlist)
           team.prepend(lastlist);
       }

    });
   
})(document);