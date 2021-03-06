((document) => {


	// setting variables 
	let input = document.getElementById("player") // input field for player to be added
	let plusButton = document.getElementById("plusbutton") // adding player 
	let ul = document.getElementById("list") // list where 'input' AKA players will display 
	let makeButton = document.getElementById("makebutton") // button for making a team
	let pairs = document.getElementById("random-list") // this is the final list 
	let list = []; // setting empty array for adding players 

	// ADDING PLAYER NAME

	plusButton.addEventListener("click", () => {

		let name = input.value;

		if (name.length == "") { // setting to stop user entering an empty string 
			alert("Error: Please enter a player name")

		} else {

			let li = document.createElement("li"); // creating new list item 
			li.textContent = input.value; 
			li.classList.add("list-group");
			ul.append(li);

			// adds name to end of array
			list.push(input.value)

			input.value = "";

		}

	});

	// RANDOMISE +  MAKE PAIR 

	makeButton.addEventListener("click", () => {

		// variables 
		let players = list; // players = 'list of players' 
		let partners = []; // feed into empty array
		let length = input.length;

		if (players.length % 2 === 0 && players.length > 0 && players.length !== 2) {

			const arr = players;
			var i,
				j,
				temp; // Using Fisher-Yates shuffle for randomising  
			for (i = arr.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}

			//  if players are more than x1 
			while (players.length > 1) {

				const partner = `${players.pop()} ${".VS."} ${players.pop()}` // interpolate 

				let lastlist = document.createElement('li')
				lastlist.textContent = partner; // specify our partner variable
				lastlist.classList.add("list-group")
				pairs.append(lastlist);
			}

		} else {
			alert("Error: Please be sure to enter an even number and a minimum of x4 players")

		}


	});

})(document);