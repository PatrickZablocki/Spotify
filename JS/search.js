document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchInput').addEventListener('input', search);
  
    async function search() {
      const searchTerm = document.getElementById('searchInput').value.trim();
      const resultsContainer = document.querySelector('.results-container'); // Änderung der Auswahl des Ergebniscontainers
  
      if (!searchTerm) {
        clearResults(resultsContainer); // Verwendung des korrekten Containers für das Leeren der Ergebnisse
        return;
      }
  
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(searchTerm)}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bca6cd3f65msh35f92ef123f252dp1ce099jsnc199ab711f52',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayResults(data, resultsContainer); // Übergebe den Ergebniscontainer an die Anzeigefunktion
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    }
  
    function displayResults(data, resultsContainer) {
      resultsContainer.innerHTML = '';
  
      if (data && data.data && data.data.length > 0) {
        data.data.forEach(track => {
          const resultDiv = document.createElement('div');
          resultDiv.classList.add('result');
  
          const img = document.createElement('img');
          img.src = track.artist.picture;
          img.alt = 'Artist Image';
          resultDiv.appendChild(img);
  
          const info = document.createElement('div');
          const name = document.createElement('h3');
          name.textContent = track.artist.name;
          info.appendChild(name);
  
          const title = document.createElement('p');
          title.textContent = track.title;
          info.appendChild(title);
  
          resultDiv.appendChild(info);
          resultsContainer.appendChild(resultDiv);
        });
      } else {
        const noResults = document.createElement('p');
        noResults.textContent = 'Keine Ergebnisse gefunden.';
        resultsContainer.appendChild(noResults);
      }
    }
  
    function clearResults(resultsContainer) {
      resultsContainer.innerHTML = '';
    }
  });
