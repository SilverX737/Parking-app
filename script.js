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

const bridgeParking = document.querySelector(`#parking1`);
const bridgeLotA = document.querySelector(`#parking2`);
const alumEngineer = document.querySelector(`#parking3`);
const spotContainer1 = document.querySelector(`.spot-container1`);
const spotContainer2 = document.querySelector(`.spot-container2`);
const spotContainer3 = document.querySelector(`.spot-container3`);

// JavaScript to handle smooth scrolling when clicking on links
document.addEventListener("DOMContentLoaded", function () {
  bridgeParking.addEventListener("click", function (e) {
    e.preventDefault();
    spotContainer1.classList.remove(`hidden-1`);
    spotContainer2.classList.add(`hidden-2`);
    spotContainer3.classList.add(`hidden-3`);
    spotContainer1.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  bridgeLotA.addEventListener("click", function (e) {
    e.preventDefault();
    spotContainer1.classList.add(`hidden-1`);
    spotContainer2.classList.remove(`hidden-2`);
    spotContainer3.classList.add(`hidden-3`);
    spotContainer2.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  alumEngineer.addEventListener("click", function (e) {
    e.preventDefault();
    spotContainer1.classList.add(`hidden-1`);
    spotContainer2.classList.add(`hidden-2`);
    spotContainer3.classList.remove(`hidden-3`);
    spotContainer3.scrollIntoView({ behavior: "smooth" });
  });
});
