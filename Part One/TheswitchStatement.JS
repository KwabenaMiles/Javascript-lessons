// Use the switch statement to select one of many code blocks to be executed.

 const favAnimal = "cat"

switch (favAnimal){
  case "cat":
  case "bobcat": {
       console.log("cats ae great");
  }
  break
    
  case "dog" : {
    console.log("dogs are loud");
  }
  break
  case "shark" : {
    console.log("That's an interesting choice");
  }
  break
  default :
    onsole.log("I have never heard of that animal");
}

if (favAnimal === "cat"){
  console.log("cats ae great");
}
else if(favAnimal === "dog"){
  console.log("dogs are loudt");
}
else if(favAnimal === "shark"){
  console.log("That's an interesting choice");
}
else{
  console.log("I have never heard of that animal");
}


