const locations = ["location1", "location2", "location3"];
const totalSpots = 100;

locations.forEach((location) => {
  const container = document.getElementById(location);
  for (let i = 1; i <= totalSpots; i++) {
    const spot = document.createElement("div");
    spot.classList.add("spot");
    // Add event listener to change background color to red when clicked
    spot.addEventListener("click", function () {
      this.style.backgroundColor = "red";
    });
    container.appendChild(spot);
  }
});
