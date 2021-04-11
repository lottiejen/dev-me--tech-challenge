// The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

// Some optional advanced features might include:

// ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs


// Basic 
get user to add players and randomize them into teams. 

// Stuff to try and practice/add
- Interpolation 
- Concat 
- Remember to `console.log`




"MAKE TEAMS" -- need to Array() method sort here
https://www.w3schools.com/jsref/jsref_sort.asp <-- for ref
/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random <-- need this also somewhere 



---- 

*Useful Links*

https://fonts.google.com/specimen/Roboto

https://www.shillingtoneducation.com/blog/free-google-fonts-alternatives/

https://designmodo.com/font-face/

https://www.designwizard.com/blog/design-trends/colour-combination

https://color.adobe.com/mythemes

https://loading.io/background/m-particles/


const handleStart = (state) => {
  let players = state.players;
  let playerProp = state.playerProp;
  if (players.length >= 4 && Number.isInteger(Math.log2(players.length))) {
      playerProp(players);
  } else {
    return {
      ...state,
          playersError: true,
      };
  }
}

// Notes / Scribbles 

- Need to stop string adding to array
- Need to change logic for x4 players 

  const powerOfTwo = (x) => {
        return x >= 4 && Math.log2(x) % 1 === 0; ???
    }

    let partners = []
    let newPairs = partners.map (partner => )