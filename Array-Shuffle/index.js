// Fisher-Yates algorithm

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards);
// Create a function called shuffle that takes in an array as a parameter
function shuffle(array) {
  for (let i = array.lenght - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1)); // Get a random index from 0 to i
    [array[i], array[random]] = [array[random], array[1]]; // Swap array[i] with the element at random index//
  }
}
