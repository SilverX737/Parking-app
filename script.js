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

const totalSpots = 50;
const locations = ["location1", "location2", "location3"];

locations.forEach((location) => {
  const containerId = location + "-container"; // Generate container ID
  const container = document.getElementById(containerId); // Get container element
  const spotsContainer = document.getElementById(location); // Get spots container element

  if (container && spotsContainer) {
    // Check if both containers exist
    randomlyColorSpots(spotsContainer, totalSpots); // Randomly color spots in spots container
  }
});
