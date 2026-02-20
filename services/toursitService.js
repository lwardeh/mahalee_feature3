// touristService.js
// Custom service for fetching tourist spot data using axios

// Fetch all tourist spots from the JSON file
export function getAllSpots() {
  return axios.get("./data/touristSpots.json").then(function (response) {
    return response.data;
  });
}

// Fetch spots filtered by category
export function getSpotsByCategory(category) {
  return getAllSpots().then(function (spots) {
    return spots.filter(function (spot) {
      return spot.category === category;
    });
  });
}

// Fetch a single spot by id
export function getSpotById(id) {
  return getAllSpots().then(function (spots) {
    return spots.find(function (spot) {
      return spot.id === id;
    });
  });
}
