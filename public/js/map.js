var map = L.map('map').setView([50.80670, 2.04895], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([50.80670, 2.04895]).addTo(map)
  .bindPopup("O'coffee")
  .openPopup();