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

// JavaScript for Image Slider (Lunar Eclipse Images Page)
const images = [
  "media/image1.JPG",
  "media/image2.JPG",
  "media/image3.JPG"
];

// Variable to track the current image index
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
  // Increment the current index
  currentIndex = (currentIndex + 1) % images.length; // Wraps around to 0 when we reach the end

  // Get the image element and update the source
  const imageElement = document.getElementById("currentImage");
  imageElement.src = images[currentIndex];
}

// Event listener for the button click
document.getElementById("nextButton").addEventListener("click", showNextImage);