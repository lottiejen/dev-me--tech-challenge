# Ping Pong Party 1.0

# What Is It?
Ping Pong Party 1.0 is a simple website in which users can add players and in turn, those players are randomised to create pairs. 

## Setup
1. Use 'git clone' or download repo as zip file. 
2. Open index.html and you should be able to access locally. 
3. Alternatively, view the site here: https://lottiejen.github.io/dev-me--tech-challenge/

# Technology 
Vanilla Javascript, HMTL, CSS, Git, Google DevTools + manual testing. I eventually chose this way to write the project, because I wanted to gain more practice/experience with Vanilla Javascript. 

# Approach / Thoughts 
1. Firstly, I took some time to think about the project as a whole and tried to narrow it down. E.g. What do I want to do and what functionality do I need to create the project?
   <p>  This involved note-taking, scamping etc...Eventually, I decided that I wanted to keep my approach minimal.<p>
   
2. I wanted to create something functional, and I wanted to collect users names, add them to an array and randomise them. 

3. Concluded that I would need to be able to GetElementbyID, CreateElement and we would need to have as a basis: 
    -  User input (player name)
    -  Get that information into an array (list item)
    -  Shuffling the information
    -  Splitting into partners
    -  Finally, outputting that  back to the user (In basic wording!) - I also knew that I would need some validation for the site. For example, the user not being able to enter an empty string, no odd numbers etc..

## Design 
- I have an interest in UX design and wanted the site to be useable, as well as having a welcoming look and feel. I explored different palettes using Adobe Color Wheel.
-  One of my main inspirations for the design was the Danish fashion house Ganni. Ganni is a brand known for bold shapes and impactful colour palettes. 

## Reflections / Improvements 
1. <p> In hindsight, if I were starting the project from scratch, I think I would have built the project in React, mostly because of the reusability of components and being able to import code easily.

2. <p> I think I focused too much on the website being used on a desktop as opposed to being mobile-first. Hence, my media queries not quite where I want them to be.  

3. <p> Thinking about the layout in more depth, I would perhaps have made the layout and composition more interesting using grid. However, I think it would have taken me longer, because I lack confidence with it. 

4. <p> Digging into the code a little more and adding the functionality to have seperate alerts for when a user enters an odd number of players, as opposed to having a x1 alert for both of those things. 
   
5. <p> If I had more time I would have liked to have added a 'delete player' button and added the functionality to 'create a game'. 

6. I found the mathRandom() aspect tricky. I had a few incarnations of how to write it and had to spend a while researching it, of which I was not 100%. Spending a bit more time understading it will be useful. 

7. I think my code could be more eloquent and simplified within the eventListeners, using array iteration instead for example. 

8. My main form of testing was console.log() testing however, if I had extra time I would liked to have put the code through some validation. 

9. <p> Furthermore to testing, I would like to have done more testing with to root any issues/bugs I have missed using TDD. 

*Side Note: Please see 'Misc Notes' section to read notes I made along the way to keep track of my thoughts/ideas.*

## Misc Notes

### 31/03 - array, randomize + output!
getelementbyID & CreateElement - re-read Week 4 notes
<p>need to set some variables 
<p>need to 'add players' button 
<p>need to 'create pairs' button
<p>and a way to output the pairs, 
minimal approach...
<p>Kind of want to do a cascade of info.
eg. header, add player, see 'who's playing?', pair up and see list of pairs at the end.<p>

--

### 02/04 - thinking about the best way to display
<p>players after 'creating pair' ??
<p>may poss try using interpolation, might be good practice? 
<p>also..array method within that..
also reminding myself about, 'push', 'pop' etc..

--

### 07/04
Still not 100% with mathRandom() examples I've seen online not that helpful. I know about the Fisher-Yates shuffle, looking incorporate, long code though. Will read into/look at more and see how I can add it to the JS.


## Other
- Reference for Fisher-Yates algorithm: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript