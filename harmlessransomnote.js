/* 
  
Harmless Ransom Note Algorithm 
  
It's a note made from words cut out of a magazine. 
The function will take two parameters ' noteText' and 'magazineText' 
The purpose is to check if we have enough words in our magazine to create the note. 
if we do, the algorithm should return true, if not it will return false. 
  
*/ 
  
function harmlessRansomNote (noteText, magazineText) { 
        var noteArray = noteText.split(' '); 
        var magazineArray = magazineText.split(' '); 
                
        // Count the number of each word 
        var magazineObj = {}; 
        magazineArray.forEach(word => { // Arrow function 
                if(!magazineObj[word]) { 
                        magazineObj[word] = 0; 
                } 
        magazineObj[word]++; 
        }); 
          
        // Check if the words of note exists in magazine 
        var noteIsPossible = true; 
        noteArray.forEach(word => { 
                if (magazineObj[word]){ 
                        magazineObj[word]--; 
                        if (magazineObj[word] <0 ){ 
                                noteIsPossible = false; 
                }
        } 
                else 
                        noteIsPossible = false; 
        }); 
        console.log (noteIsPossible); 
} 
  
harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'); 