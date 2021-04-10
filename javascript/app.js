((document) => {


    // setting variables 
    let input = document.getElementById("player") // input field for player to be added
    let plusButton = document.getElementById("plusbutton") // adding player
    let ul = document.getElementById("list") // list where 'input' AKA players will display 
    let makeButton = document.getElementById("makebutton") // button for making a team
    let pairs = document.getElementById("random-list") // this is the final list 
    let list = [];  // setting empty array for adding players 

    // ADDING PLAYER NAME

    console.log("Hello!")

    plusButton.addEventListener ("click", () => {
      
        let name = input.value; // value user has entered 

        // if user enters nothing in input then alert pops up
        if (name.length == "" ) {   // setting to stop user entering an empty string 
            alert("Error: Please enter a player name")

        }  

        else {
            
            let li = document.createElement("li"); // creating new list item 
            li.textContent = input.value; // what user has typed (AKA NAME)
            li.classList.add("list-group"); // add to list
            ul.append(li); // append      
    
            // pushes the name into the end of the array 
            list.push(input.value)

            // here we set input back to empty, so user doesn't need to delete prior info
            input.value = ""; 
    
            console.log(list);
    
        }
         
    });

    // MAKE PAIR 

    makeButton.addEventListener ("click", () => { 

        // variables 
       let players = list;  // players = 'list of players' 
       let partners = []; // feed into empty array
       let length = input.length; 
    
       // Checks if the no of players is divisible by 2 & is more than 0
       if (players.length % 2 === 0 && players.length > 0 && players.length !== 2 ) {
       
        const arr = players; 
        var i,
            j,
            temp;                               // Using Fisher-Yates shuffle for randomising  
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }       

        //  if players more than x1 
        while (players.length > 1) { 

            const partner = `${players.pop()} ${".VS."} ${players.pop()}` // interpolate 

            partners.push(partner); // pushes the name into the end of the array 
            
                console.log(partner);
 
            
            let lastlist = document.createElement('li') // create li item for names to bed added to
            lastlist.textContent = partner; // specify our partner variable
            lastlist.classList.add("list-group")
            pairs.append(lastlist);
        }
    }

        else {
            alert("Error: Please be sure to enter an even number and a minimum of x4 players")
        }  
       

    
    });
   
})(document);