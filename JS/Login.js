//  Hier Rufe ich die Function ab in der wir im Projekt den Benutzername Speichern können 

function toggleSwitch() {
    const switchElement = document.getElementById('switch');
    const circleElement = document.getElementById('circle');

    // Hier Ändere ich die Position des Kreises
    circleElement.style.transform = circleElement.style.transform === 'translateX(15px)' ? 'translateX(0)' : 'translateX(15px)';

    // Hier Ändere ich die Hintergrundfarbe des Schalters
    switchElement.style.backgroundColor = switchElement.style.backgroundColor === 'green' ? '#6c6a6a' : 'green';
    switchElement.classList.toggle('active');
}
// 