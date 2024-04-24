// Get the canvas element and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Initialize score and click count
let score = 0;
let clickCount = 0;

// Update the score display
function updateScore() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
    ctx.fillText(`Clicks: ${clickCount}`, 10, 60);
}

// Increment score and click count on button click
document.getElementById('clickButton').addEventListener('click', () => {
    score++;
    clickCount++;
    updateScore();
});

// Initial score display
updateScore();
