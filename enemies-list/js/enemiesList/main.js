// Put your code here

console.log("My Enemies List!")
console.log("----------------")

const enemies = 
    [
        {
    FirstName: "Joshua",
    LastName: "Flowers",
        offenses:["Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"],
        IsReallyHated: true
    },
    {
        FirstName: "Darth",
        LastName: "Vader",
        offenses:["Cut off Luke's hand",
        "Murdered all those kids",
        "Unkind management practices"],
        IsReallyHated: false
    },

    {
        FirstName: "Betty",
        LastName: "Rudelady",
        offenses:[ "Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"],
        IsReallyHated: true
    },
    {
        FirstName: "Leon",
        LastName: "Peck",
        offenses:[ "Keeps giving me a hotplate"],
        IsReallyHated: false  
    }

    ]

    for (let enemy of enemies) {
        // console.log(enemy.FirstName);

        if(enemy.IsReallyHated === true){
            console.log(enemy.FirstName, enemy.LastName, "is really really disliked")
        
      } else {
       console.log(enemy.FirstName, enemy.LastName)   
      }}