const prompt = require("prompt-sync")();

questionAndReply = [
    { 
        question: "1. Quelle est la capitale du Canada ?",
        options : ["A) Toronto",
                    "B) Vancouver",
                    "C) Ottawa",
                    "D) Montréal"],
        reply: "C"
    },
    { 
    question: "2. Quel est l’auteur du roman Les Misérables ?",
    options : ["A) Émile Zola",
                "B) Victor Hugo",
                "C) Gustave Flaubert",
                "D) Alexandre Dumas"],
    reply: "B"
    },
    { 
        question: "3. Quelle est la formule chimique de l’eau ?",
        options : ["A) CO₂",
                    "B) O₂",
                    "C) H₂O",
                    "D) NaCl"],
        reply: "C"
    },
    { 
        question: "4. En quelle année l’homme a-t-il marché sur la Lune pour la première fois ?",
        options : ["A) 1965",
                    "B) 1969",
                    "C) 1972",
                    "D) 1959"],
        reply: "B"
    },
    { 
        question: "5. Quelle langue est parlée au Brésil ?",
        options : ["A) Espagnol",
                    "B) Portugais",
                    "C) Italien",
                    "D) Français"],
        reply: "B"
    }
]

const acceptedReplies = ["A","B","C","D"];


function checkReply(question, options){
    let goodReply = false;
    let reply = "";

    while (!goodReply){
        console.log("");
        console.log(question);
        console.log("");
        console.log("Choisissez l'une des réponses suivantes : ")
        for (let i = 0; i < options.length; i++){
             console.log(options[i]);
        }
       
        console.log("");
        reply = prompt("Quelle est votre réponse ? ");
        console.log("");

        for (let j=0; j < acceptedReplies.length; j++){
            if (reply.toUpperCase() == acceptedReplies[j]){
                goodReply = true;
                
                break;
            }
             
        }

       if (!goodReply) {
            console.log("");
            console.log ("!!!  Ce n'est pas l'une des réponses acceptables  !!!");
            
        }

    }

    return reply.toUpperCase();
}

function askQuestion(){
   let score = 0;
   for (let i=0; i < questionAndReply.length; i++){
        
       if ( checkReply (questionAndReply[i].question,questionAndReply[i].options) == questionAndReply[i].reply){
            score++;
       }else{
       }
   }

   return score;
}

console.log("****  Vous avez obtenu " + askQuestion() + " bonnes réponses  ****");
console.log("");