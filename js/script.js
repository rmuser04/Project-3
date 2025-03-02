// JavaScript for the Google Maps page
let map;

// Initialize the map
function initMap() {
  // Create a map centered on a location
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    zoom: 10,
  });

  // Feature 1: Add a marker
  const marker = new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    map: map,
    title: "San Francisco",
  });

  // Feature 2: Set a custom map style
  const styledMapType = new google.maps.StyledMapType(
    [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#212121",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#212121",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#3e3e3e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#212121",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
    { name: "Styled Map" }
  );
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  // Feature 3: Add zoom control
  map.setOptions({
    zoomControl: true,
    scaleControl: true,
  });
}

// JavaScript for the image slider on the index page
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slides");
  
  // Loop through the slides and hide them
  slides.forEach(slide => {
    slide.classList.remove("active");
  });
  
  // If the index is out of bounds, wrap it around
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  }
  
  // Show the current slide
  slides[currentSlide].classList.add("active");
}

// Change slide when the user clicks next or prev
function changeSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);
}

// Automatically change slide every 3 seconds
setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 3000); // 3 seconds interval

// Show the first slide initially
showSlide(currentSlide);