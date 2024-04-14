document.addEventListener("DOMContentLoaded", function() {

    const ball = document.getElementById('ball');
    const goal1 = document.getElementById('goal1');
    const goal2 = document.getElementById('goal2');
    const gameContainer = document.getElementById('game-container');
    const gameContainerRect = gameContainer.getBoundingClientRect();

    let ballLeft = 0;
    let ballTop = 0;
    let goal1Left = Math.random() * (gameContainerRect.width - goal1.offsetWidth);
    let goal1Top = Math.random() * (gameContainerRect.height - goal1.offsetHeight);
    let goal2Left = Math.random() * (gameContainerRect.width - goal2.offsetWidth);
    let goal2Top = Math.random() * (gameContainerRect.height - goal2.offsetHeight);

    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';

    goal1.style.left = goal1Left + 'px';
    goal1.style.top = goal1Top + 'px';

    goal2.style.left = goal2Left + 'px';
    goal2.style.top = goal2Top + 'px';

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
