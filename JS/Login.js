function animateSwitch() {
    const switchElement = document.getElementById('switch');
    const circle = document.getElementById('circle');
    const username = prompt('Bitte Benutzernamen eingeben:', '');
    
    
    if (username) {
    console.log('Benutzername:', username);
    
    switchElement.style.backgroundColor = 'green';
    circle.style.transform = 'translateX(50%)';
    }
}