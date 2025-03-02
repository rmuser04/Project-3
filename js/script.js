// JavaScript for Google Maps Page
let map;

// Initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    zoom: 10,
  });

  // Add a marker to the map
  const marker = new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    map: map,
    title: "San Francisco",
  });

  // Custom map style
  const styledMapType = new google.maps.StyledMapType(
    [
      {
        elementType: "geometry",
        stylers: [{ color: "#212121" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#212121" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#3e3e3e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212121" }],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ],
    { name: "Styled Map" }
  );
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  // Enable zoom and scale control
  map.setOptions({
    zoomControl: true,
    scaleControl: true,
  });
}

// JavaScript for Image Slider
let currentSlide = 0; // Track the current slide index

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slides'); // Get all slides
  if (index >= slides.length) {
    currentSlide = 0; // Reset to the first slide if at the end
  }
  if (index < 0) {
    currentSlide = slides.length - 1; // Go to the last slide if at the beginning
  }
  
  // Hide all slides and remove the 'active' class
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Show the current slide by adding the 'active' class
  slides[currentSlide].classList.add('active');
}

// Function to change slide (prev or next)
function changeSlide(direction) {
  currentSlide += direction; // Increment or decrement the slide index
  showSlide(currentSlide); // Update the slide display
}

// Automatically change slide every 3 seconds
setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 3000); // Change every 3 seconds

// Initialize the slider on page load
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide); // Start with the first slide
});