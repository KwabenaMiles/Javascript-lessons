// NodeList = Static collection of HTML element by (id, class or element)
//    Can be created by using querySelectorAll()
//    Similar to Array, but no (map, filterm reduce)
//    NodeList won't update to auto reflect changes.

let buttons = document.querySelectorAll(".myButton");

// ADD HTML/CSS PRROPERTIES

buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "🤣";
});

// CLICK EVENT LISTENER
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});

// MOUSEOVER + MOUSEOUT event Listener

//MOUSEOVER
buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightgreen";
  });
});

// MOUSEOUT

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(205, 100% 60%)";
  });
});

// ADD ELEMENT TO A NODELIST

const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButton";
document.body.appendChild(newButton);

// REMOVE AN ELEMENT

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
  });
});
