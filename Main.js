function loadStates() {
  const country = document.getElementById("country").value;
  // Load States for selected Country from your data source
}

function loadTalukas() {
  const state = document.getElementById("state").value;
  // Load Talukas based on selected State
}

function loadCities() {
  const taluka = document.getElementById("taluka").value;
  // Load Cities based on selected Taluka
}

function fetchCityDataFromWeb() {
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const taluka = document.getElementById("taluka").value;
  const city = document.getElementById("city").value;
  const fullAddress = `${city}, ${taluka}, ${state}, ${country}`;

  // Fetch data from Nominatim (OpenStreetMap)
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`)
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const result = data[0];
        document.getElementById("city-data").innerHTML = `
          <h3>Address Info</h3>
          <p><strong>Full Address:</strong> ${result.display_name}</p>
          <p><strong>Latitude:</strong> ${result.lat}</p>
          <p><strong>Longitude:</strong> ${result.lon}</p>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=${result.lon},${result.lat},${result.lon},${result.lat}&layer=mapnik"
            style="width: 100%; height: 300px;"
          ></iframe>
        `;
      } else {
        document.getElementById("city-data").innerHTML = `<p>No data found for this location.</p>`;
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("city-data").innerHTML = `<p>Error fetching data.</p>`;
    });
}
