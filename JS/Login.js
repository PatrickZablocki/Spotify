document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            console.log('Benutzerdaten aus JSON:', data);

            const user = data.users.find(user => user.email === email && user.password === password);
            if (user) {
                console.log('Erfolgreich eingeloggt.');
                
                window.location.href = 'index.html';
            } else {
                console.log('Ungültige Anmeldeinformationen.');
            }
        })
        .catch(error => console.error('Fehler beim Laden der Benutzerdaten:', error));
});