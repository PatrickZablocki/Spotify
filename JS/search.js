document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  let resultsContainer = document.querySelector('.results-container');
  let audioPlayer; // Neues Audio-Element

  if (!resultsContainer) {
    resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');
    document.querySelector('.main-container').appendChild(resultsContainer);
  }

  searchInput.addEventListener('input', search);

  async function search() {
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) {
      clearResults(resultsContainer);
      stopPlayback(); // Stoppe die Wiedergabe, wenn die Suche leer ist
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
      displayResults(data, resultsContainer);
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

        resultDiv.addEventListener('click', function() {
          stopPlayback(); // Stoppe die Wiedergabe des aktuellen Tracks
          playPreview(track); // Spiele den neuen Track ab
        });
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

  function playPreview(track) {
    audioPlayer = new Audio(); // Erstelle ein neues Audio-Element
    const previewURL = track.preview; // Annahme: "preview" enthält die Vorschau-URL des Tracks von der API

    audioPlayer.src = previewURL; // Setze die Vorschau-URL als src des Audio-Elements
    audioPlayer.play(); // Starte die Wiedergabe des Tracks
  }

  function stopPlayback() {
    if (audioPlayer) {
      audioPlayer.pause(); // Pausiere die Wiedergabe
      audioPlayer.currentTime = 0; // Setze die Wiedergabezeit auf den Anfang des Tracks
    }
  }
});
