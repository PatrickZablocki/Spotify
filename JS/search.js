async function searchMusic(query) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${proxyUrl}https://api.deezer.com/search?q=${query}`);
    const data = await response.json();
    return data.data || [];
}

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let audio = new Audio(); // HTMLAudioElement erstellen

    inputField.addEventListener('input', async (event) => {
        const query = event.target.value.trim();

        if (query.length >= 3) {
            const searchResult = await searchMusic(query);
            displayResults(searchResult, audio); // audio-Element übergeben
        } else {
            searchResults.innerHTML = '';
        }
    });

    // Klickereignis für das Audio-Element hinzufügen
    searchResults.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const trackUrl = event.target.dataset.trackUrl;
            if (trackUrl) {
                audio.src = trackUrl;
                audio.play();
            }
        }
    });
});

function displayResults(results, audio) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('search-item');

        const artistName = document.createElement('p');
        artistName.textContent = result.artist.name;

        const artistImage = document.createElement('img');
        artistImage.src = result.artist.picture_medium;
        artistImage.setAttribute('data-track-url', result.preview); // Track-URL setzen

        const musicTitle = document.createElement('p');
        musicTitle.textContent = result.title;

        resultDiv.appendChild(artistImage);
        resultDiv.appendChild(artistName);
        resultDiv.appendChild(musicTitle);

        searchResults.appendChild(resultDiv);
    });
}