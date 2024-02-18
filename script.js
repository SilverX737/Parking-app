const spot = document.createElement("div");
spot.classList.add("spot");

function randomlyColorSpots(container, totalSpots) {
  const redSpotProbability = 0.2; // Adjust this value to control the probability of a spot being red

  for (let i = 1; i <= totalSpots; i++) {
    // Clone the spot element for each iteration
    const spotClone = spot.cloneNode();

    // Randomly determine if the spot should be red
    if (Math.random() < redSpotProbability) {
      spotClone.style.backgroundColor = "red";
    } else {
      spotClone.style.backgroundColor = "green";
      // Add event listener to allow changing color to blue
      spotClone.addEventListener("click", function () {
        if (spotClone.style.backgroundColor === "green") {
          spotClone.style.backgroundColor = "blue";
          // Remove the event listener after changing color to blue
          spotClone.removeEventListener("click", arguments.callee);
        }
      });
    }

    container.appendChild(spotClone);
  }
}

// Example usage:
const totalSpots = 100;
const locations = ["location1", "location2", "location3"];

locations.forEach((location) => {
  const container = document.getElementById(location);
  randomlyColorSpots(container, totalSpots);
});
