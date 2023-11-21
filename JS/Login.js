function moveBall() {
    const button = document.getElementById('saveButton');
    const ball = document.createElement('div');
    ball.id = 'ball';
    button.appendChild(ball);
    // Ändere den Hintergrund auf Grün
    button.style.backgroundColor = '#00FF00';
    // Bewege die Kugel nach rechts
    ball.style.transform = 'translateX(calc(100% - 20px))';
}