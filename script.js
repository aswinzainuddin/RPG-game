document.addEventListener('DOMContentLoaded', () => {
    const randomNameBtn = document.getElementById("random-name-button");
    const playerName = document.getElementById("player-name");
    const submitName = document.getElementById("submit-name")
    const randomNames = ["Eldrin", "Thalor", "Seraphina", "Garrik", "Vexaria", "Drogan", "Liora", "Pasta Sempa"];

    randomNameBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * randomNames.length);
        playerName.value = randomNames[randomIndex];
    })
    
    submitName.addEventListener('submit', (e) => {
        e.preventDefault();
        confirm(`So you are ${playerName.value}, aren't you?`);
    })
})
