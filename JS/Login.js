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
// Ab hier muss ich die Regestrierung funktion schreiben.
function register(username, password) {
    
    const fs = require('fs');
    const jsonDateipfad = 'benutzerdaten.json';
    let benutzerdaten = [];

    try {
        const daten = fs.readFileSync(jsonDateipfad, 'utf-8');
        benutzerdaten = JSON.parse(daten);
    } catch (error) {
        console.error('Fehler beim Lesen der Benutzerdaten:', error);
    }

    
    const vorhandenerBenutzer = benutzerdaten.find(benutzer => benutzer.username === username);
    if (vorhandenerBenutzer) {
        console.log('Benutzer existiert bereits.');
        return;
    }

    // Hier können wir neue Nutzer Hinzufügen
    benutzerdaten.push({ username, password });
    const username1 = 'Patrick';
    const username2 = 'Durmus';
    const username3 = 'Timo';
    const username4 = 'Andreas';
    
    try {
        fs.writeFileSync(jsonDateipfad, JSON.stringify(benutzerdaten));
        console.log('Benutzer erfolgreich registriert.');
    } catch (error) {
        console.error('Fehler beim Schreiben der Benutzerdaten:', error);
    }
}

//  Hier ist die Funktion mit der Anmeldung

function login(username, password) {
    // Hier wird auf die Benutzerdaten zugegriffen
    const fs = require('fs');
    const jsonDateipfad = '.json';
    let benutzerdaten = [];

    try {
        const daten = fs.readFileSync(jsonDateipfad, 'utf-8');
        benutzerdaten = JSON.parse(daten);
    } catch (error) {
        console.error('Fehler beim Lesen der Benutzerdaten:', error);
    }

    // Hier Überprüfen wir Benutzername und passwort zur korrektheit
    const angemeldeterBenutzer = benutzerdaten.find(benutzer => benutzer.username === username && benutzer.password === password);

    if (angemeldeterBenutzer) {
        console.log('Anmeldung erfolgreich. Willkommen, ' + username + '!');
        
    } else {
        console.log('Falscher Benutzername oder falsches Passwort.');
    }
}

//  Abspeichern der Daten

const fs = require('fs');

// Beispiel-der Benutzerdaten
const benutzerdaten = [
    { "username": "Patrick", "password": "Passwort123" },
    { "username": "Benutzer2", "password": "GeheimesPasswort" }
];


const jsonDateipfad = 'benutzerdaten.json';

// Hier speichern wir die Benutzerdaten in die JSON-Datei ein.
fs.writeFileSync(jsonDateipfad, JSON.stringify(benutzerdaten));

console.log(`Benutzerdaten wurden in ${jsonDateipfad} gespeichert.`);