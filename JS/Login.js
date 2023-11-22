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
// Ab hier muss ich die Anmeldungen Speicher etc.

function registerUser(username, password) {
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        console.log('Benutzer existiert bereits.');
        return false;
    }

    const newUser = { username, password };
    users.push(newUser);

    
    localStorage.setItem('users', JSON.stringify(users));

    console.log('Benutzer erfolgreich registriert.');
    return true;
}
function loginUser(username, password) {
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const authenticatedUser = users.find(user => user.username === username && user.password === password);
    if (authenticatedUser) {
        console.log('Anmeldung erfolgreich.');
        return true;
    } else {
        console.log('Falscher Benutzername oder Passwort.');
        return false;
    }
}
registerUser('Benutzer1', 'Passwort123');
loginUser('Benutzer1', 'Passwort123');