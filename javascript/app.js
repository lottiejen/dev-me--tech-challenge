// The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

((document) => {

    // console.log(document);
    console.log("Hello!");

    // setting variables 
    let plusButton = document.getElementById("plusbutton") // adding player
    let input = document.getElementById("player") // input field for player to be added 
    // let inputError = document.getElementById("input-error")
    let ul = document.getElementById("list") // list where 'input' AKA players will display 
    let makeButton = document.getElementById("makebutton") // button for making a team
    let team = document.getElementById("random-list") // this is the final list where teams are displayed 
    
  
    // ADDING PLAYER NAME 

    const list = []; 

    plusButton.addEventListener ("click", () => {
      
        let name = input.value; // value user has entered 


        // if user enters nothing in input then alert pops up
        if (name.length == "" ) {   // setting to stop user entering an empty string 
            alert("please enter a player name")


        }  

        else {
            
            let li = document.createElement("li"); // creating new list item when you click 'Add' 
            li.textContent = input.value; // what user has typed
            li.classList.add("list-group"); // add to list
            // ul.prepend(li);
            ul.append(li); // append 
    
            
    
            // pushes list item created
            list.push(input.value)
            input.value = ""; 
    
            console.log(list);
    
            // return list;
        }

         
    });

    // MAKE PAIR 

    makeButton.addEventListener ("click", () => { // adding EL 

        // variables 

       let names = list;  // names = list
       let partners = []; // feed into empty array

       
    //    names.sort(() => 0.5 - Math.random()); // randomize names
    // Fisher-Yates Array randomizer 

     names.sort(() => Math.random() - Math.random()); // this seems to do  

    //    names.sort(() => Math.floor(Math.random() * Math.floor(input.length)); 
       

        // this logic = names added need to be more than or equal to 4"
       while (names.length >= 2) {
           let partner = `${names.pop()} ${".VS."} ${names.pop()}` // interpolate + concat?
          

           
        //    console.log(names.length);

            // pushes partners created
            partners.push(partner); 
            
            console.log(partner);

           let lastlist = document.createElement('p')
           lastlist.textContent = partner; 
           lastlist.classList.add("list-group")
        //    ul.prepend(lastlist)
        //    team.prepend(lastlist);
            team.append(lastlist);
       }

    });
   
})(document);