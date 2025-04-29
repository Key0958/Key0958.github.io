// This script adds interactivity: alerts when a place is clicked

document.addEventListener("DOMContentLoaded", () => {
  const places = document.querySelectorAll(".place");

  places.forEach(place => {
    place.addEventListener("click", () => {
      const placeName = place.querySelector("h2")?.textContent || "Unknown Place";
      alert(`You clicked on: ${placeName}`);
    });
  });
});
