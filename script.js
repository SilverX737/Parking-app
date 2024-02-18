const spot = document.createElement("div");
const totalSpots = 50;

const locations = ["location1", "location2", "location3"];
spot.classList.add("spot");

const bridgeParking = document.querySelector(`#parking1`);
const bridgeLotA = document.querySelector(`#parking2`);
const alumEngineer = document.querySelector(`#parking3`);
const spotContainer1 = document.querySelector(`.spot-container1`);
const spotContainer2 = document.querySelector(`.spot-container2`);
const spotContainer3 = document.querySelector(`.spot-container3`);

const spotsLeftParking1 = document.querySelector(`.spots--1`);
const spotsLeftParking2 = document.querySelector(`.spots--2`);
const spotsLeftParking3 = document.querySelector(`.spots--3`);

// Function to randomly color spots for parking lot 1
function randomlyColorSpotsForParkingLot1(container, totalSpots) {
  let totalSpotsCounter = 50;
  const redSpotProbability = 0.2; // Adjust this value to control the probability of a spot being red
  let nonRedSpotsCounter = 0; // Counter for non-red spots

  for (let i = 1; i <= totalSpots; i++) {
    // Clone the spot element for each iteration
    const spotClone = spot.cloneNode();

    // Randomly determine if the spot should be red
    if (Math.random() < redSpotProbability) {
      spotClone.style.backgroundColor = "red";
      totalSpotsCounter--;
    } else {
      spotClone.style.backgroundColor = "green";
      nonRedSpotsCounter++; // Increment the counter for non-red spots

      // Add event listener to allow changing color to blue
      spotClone.addEventListener("click", () => {
        if (spotClone.style.backgroundColor === "green") {
          spotClone.style.backgroundColor = "blue";

          // Remove the event listener after changing color to blue
          spotClone.removeEventListener("click", arguments.callee);
        }
      });
    }

    container.appendChild(spotClone);
  }

  // Update the number of non-red spots for parking lot 1
  spotsLeftParking1.style.fontSize = "30px";
  spotsLeftParking1.textContent = `Theres ${nonRedSpotsCounter} spots left here!`;
}

// Function to randomly color spots for parking lot 2
function randomlyColorSpotsForParkingLot2(container, totalSpots) {
  let totalSpotsCounter = 50;
  const redSpotProbability = 0.2; // Adjust this value to control the probability of a spot being red
  let nonRedSpotsCounter = 0; // Counter for non-red spots

  for (let i = 1; i <= totalSpots; i++) {
    // Clone the spot element for each iteration
    const spotClone = spot.cloneNode();

    // Randomly determine if the spot should be red
    if (Math.random() < redSpotProbability) {
      spotClone.style.backgroundColor = "red";
      totalSpotsCounter--;
    } else {
      spotClone.style.backgroundColor = "green";
      nonRedSpotsCounter++; // Increment the counter for non-red spots
      // Add event listener to allow changing color to blue
      spotClone.addEventListener("click", function () {
        if (spotClone.style.backgroundColor === "green") {
          spotClone.style.backgroundColor = "blue";
          totalSpotsCounter--;
          // Remove the event listener after changing color to blue
          spotClone.removeEventListener("click", arguments.callee);
        }
      });
    }

    container.appendChild(spotClone);
  }

  // Update the number of non-red spots for parking lot 2
  spotsLeftParking2.style.fontSize = "30px";
  spotsLeftParking2.textContent = `Theres ${nonRedSpotsCounter} spots left here!`;
}

// Function to randomly color spots for parking lot 3
function randomlyColorSpotsForParkingLot3(container, totalSpots) {
  let totalSpotsCounter = 50;
  const redSpotProbability = 0.2; // Adjust this value to control the probability of a spot being red
  let nonRedSpotsCounter = 0; // Counter for non-red spots

  for (let i = 1; i <= totalSpots; i++) {
    // Clone the spot element for each iteration
    const spotClone = spot.cloneNode();

    // Randomly determine if the spot should be red
    if (Math.random() < redSpotProbability) {
      spotClone.style.backgroundColor = "red";
      totalSpotsCounter--;
    } else {
      spotClone.style.backgroundColor = "green";
      nonRedSpotsCounter++; // Increment the counter for non-red spots
      // Add event listener to allow changing color to blue
      spotClone.addEventListener("click", function () {
        if (spotClone.style.backgroundColor === "green") {
          spotClone.style.backgroundColor = "blue";
          totalSpotsCounter--;
          // Remove the event listener after changing color to blue
          spotClone.removeEventListener("click", arguments.callee);
        }
      });
    }

    container.appendChild(spotClone);
  }

  // Update the number of non-red spots for parking lot 3
  spotsLeftParking3.style.fontSize = "30px";
  spotsLeftParking3.textContent = `Theres ${nonRedSpotsCounter} spots left here!`;
}

locations.forEach((location) => {
  const containerId = location + "-container";
  const container = document.getElementById(containerId); // Get container element
  const spotsContainer = document.getElementById(location); // Get spots container element

  if (container && spotsContainer) {
    // Check if both containers exist
    if (location === "location1") {
      randomlyColorSpotsForParkingLot1(spotsContainer, totalSpots);
    } else if (location === "location2") {
      randomlyColorSpotsForParkingLot2(spotsContainer, totalSpots);
    } else if (location === "location3") {
      randomlyColorSpotsForParkingLot3(spotsContainer, totalSpots);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  bridgeParking.addEventListener("click", function (e) {
    e.preventDefault();
    spotContainer1.classList.remove(`hidden-1`);
    spotContainer2.classList.add(`hidden-2`);
    spotContainer3.classList.add(`hidden-3`);
    spotContainer1.scrollIntoView({ behavior: "smooth" });
    spotsLeftParking1.textContent = `There's ${
      totalSpots - totalSpotsCounter
    } spots left here!`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  bridgeLotA.addEventListener("click", function (e) {
    e.preventDefault();
    spotContainer1.classList.add(`hidden-1`);
    spotContainer2.classList.remove(`hidden-2`);
    spotContainer3.classList.add(`hidden-3`);
    spotContainer2.scrollIntoView({ behavior: "smooth" });
    spotsLeftParking2.textContent = `There's ${
      totalSpots - totalSpotsCounter
    } spots left here!`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  alumEngineer.addEventListener("click", function (e) {
    e.preventDefault();
    spotContainer1.classList.add(`hidden-1`);
    spotContainer2.classList.add(`hidden-2`);
    spotContainer3.classList.remove(`hidden-3`);
    spotContainer3.scrollIntoView({ behavior: "smooth" });
    spotsLeftParking3.textContent = `There's ${
      totalSpots - totalSpotsCounter
    } spots left here!`;
  });
});
