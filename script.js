// Demonstrating global scope
let isFlipped = false;

// Function demonstrating parameters and return value
function toggleFlip(cardElement, currentState) {
  // Local scope variable
  let newState = !currentState;

  // Return updated state
  return newState;
}

// Event listener to trigger the animation
document.getElementById('flipButton').addEventListener('click', function () {
  const card = document.getElementById('card');

  // Update the state using a function with parameters and return value
  isFlipped = toggleFlip(card, isFlipped);

  // Trigger CSS animation by toggling a class
  if (isFlipped) {
    card.classList.add('flipped');
  } else {
    card.classList.remove('flipped');
  }
});
