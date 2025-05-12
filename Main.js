function loadStates() {
  const country = document.getElementById("country").value;
  // Fetch states for selected country via API or local data
}

function loadTalukas() {
  const state = document.getElementById("state").value;
  // Fetch talukas based on selected state
}

function loadCities() {
  const taluka = document.getElementById("taluka").value;
  // Fetch cities for selected taluka
}

function showCityInfo() {
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const taluka = document.getElementById("taluka").value;
  const city = document.getElementById("city").value;
  const fullAddress = `${city}, ${taluka}, ${state}, ${country}`;

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("city-info").innerHTML = `
        <p><strong>Coordinates:</strong> ${data[0]?.lat}, ${data[0]?.lon}</p>
        <p><strong>Display Name:</strong> ${data[0]?.display_name}</p>
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${data[0]?.lon},${data[0]?.lat},${data[0]?.lon},${data[0]?.lat}&layer=mapnik" style="width:100%;height:300px;"></iframe>
      `;
    });
}
