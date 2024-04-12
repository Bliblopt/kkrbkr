document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const gameContainer = document.getElementById('game-container');
    const containerRect = gameContainer.getBoundingClientRect(); // Get the boundaries of the game container

    // Beweging van de bal
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const ballStyle = getComputedStyle(ball);
        let ballLeft = parseInt(ballStyle.left);
        let ballTop = parseInt(ballStyle.top);

        switch (key) {
            case 'ArrowUp':
                ballTop = Math.max(ballTop - 10, containerRect.top); // Ensure the ball stays within the top boundary
                ball.style.top = ballTop + 'px';
                break;
            case 'ArrowDown':
                ballTop = Math.min(ballTop + 10, containerRect.bottom - ball.offsetHeight); // Ensure the ball stays within the bottom boundary
                ball.style.top = ballTop + 'px';
                break;
            case 'ArrowLeft':
                ballLeft = Math.max(ballLeft - 10, containerRect.left); // Ensure the ball stays within the left boundary
                ball.style.left = ballLeft + 'px';
                break;
            case 'ArrowRight':
                ballLeft = Math.min(ballLeft + 10, containerRect.right - ball.offsetWidth); // Ensure the ball stays within the right boundary
                ball.style.left = ballLeft + 'px';
                break;
        }
        // Controleer winvoorwaarde
        if (checkCollision(ball, goal)) {
            alert('boeken gooien is heel erg leuk');
        }
    });

    // Controleer of de bal het doel bereikt
    function checkCollision(ball, goal) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < goalRect.left || 
                 ballRect.left > goalRect.right || 
                 ballRect.bottom < goalRect.top || 
                 ballRect.top > goalRect.bottom);
    }
});
