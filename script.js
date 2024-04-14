document.addEventListener("DOMContentLoaded", function() {

    const ball = document.getElementById('ball');
    const goal1 = document.getElementById('goal');
    const goal2 = document.createElement('goal');
    goal2.src = 'gaym pics (3)/dikt.jpg';
    goal2.style.position = 'absolute';
    goal2.style.width = '50px'; 
    goal2.style.height = '50px'; 
    goal2.style.left = '100px'; 
    goal2.style.top = '100px'; 
    gameContainer.appendChild(goal2); 

    const gameContainer = document.getElementById('game-container');
    const gameContainerRect = gameContainer.getBoundingClientRect();

    let ballLeft = 0;
    let ballTop = 0;
    let goal1Left = Math.random() * (gameContainerRect.width - goal1.offsetWidth);
    let goal1Top = Math.random() * (gameContainerRect.height - goal1.offsetHeight);

    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';

    goal1.style.left = goal1Left + 'px';
    goal1.style.top = goal1Top + 'px';

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const step = 10;
        switch (key) {
            case 'ArrowUp':
                if (ballTop - step >= 0) {
                    ballTop -= step;
                }
                break;
            case 'ArrowDown':
                if (ballTop + step <= gameContainerRect.height - ball.offsetHeight) {
                    ballTop += step;
                }
                break;
            case 'ArrowLeft':
                if (ballLeft - step >= 0) {
                    ballLeft -= step;
                }
                break;
            case 'ArrowRight':
                if (ballLeft + step <= gameContainerRect.width - ball.offsetWidth) {
                    ballLeft += step;
                }
                break;
        }
        ball.style.left = ballLeft + 'px';
        ball.style.top = ballTop + 'px';
        if (checkCollision(ball, goal1) || checkCollision(ball, goal2)) {
            alert('je hebt bakker geraakt, ga je maar melden');
        }
    });

    function checkCollision(ball, goal) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < goalRect.left ||
            ballRect.left > goalRect.right ||
            ballRect.bottom < goalRect.top ||
            ballRect.top > goalRect.bottom);
    }

});
