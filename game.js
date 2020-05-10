class Game {
    constructor() {
        this.containerMap = this.showMap();
        this.player = new Player('mihaela', this.containerMap.getBoundingClientRect(), 100);
        this.setUpPlayerMovement();
        //  this.player.showScore();
        this.obstacle1 = new Obstacle(this.containerMap);
        this.obstacle1.showObstacle();
        this.obstacle2 = new Obstacle(this.containerMap);
        this.obstacle2.showObstacle();
        this.obstacle3 = new Obstacle(this.containerMap);
        this.obstacle3.showObstacle();
    }

    //logica de miscare
    setUpPlayerMovement() {
        document.addEventListener('keyup', (event) => {

            if (event.keyCode === 40) { //key down 
                if (this.player.canMoveDown()) {
                    this.player.moveDown();
                }

            } else if (event.keyCode === 38) { //key up
                if (this.player.canMoveUp()) {
                    this.player.moveUp();
                }

            } else if (event.keyCode === 37) { // key left
                if (this.player.canMoveLeft()) {
                    this.player.moveLeft();
                }

            } else if (event.keyCode === 39) { //key right
                if (this.player.canMoveRight()) {
                    this.player.moveRight();
                }
            }
            if (this.playerHitsObstacle()) {
                // reset onstacles
            }

        })
    }

    showMap() {
        const div = document.createElement('div')
        const { style } = div;
        style.width = "400px";
        style.height = "400px";
        style.backgroundColor = "pink";
        document.body.appendChild(div);

        return div;
    }

    // playerHitsObstacle() {
    //     // verificam daca rectangleul player ului a intersectat rectabgle vreunui obstacel
    //     const obstacle1Rect = this.obstacle1.returnObstacleCoordinates();
    //     const playerRect = this.player.returnPlayerCoordinates();

    //     if (obstacle1Rect.x < playerRect.x && obstacle1Rect.y < playerRect.y && 
    //         (playerRect.x - obstacle1Rect.x <= obstacle1Rect.width) && 
    //         (playerRect.y - obstacle1Rect.y < obstacle1Rect.height) ) return true;
    //     else  if (playerRect.x < obstacle1Rect.x && obstacle1Rect.y < playerRect.y &&
    //         (obstacle1Rect.x - playerRect.x < playerRect.width) &&
    //         (playerRect.y - obstacle1Rect.y <= playerRect.height) ) return true;
    //         else if ()



    // }
}
const game1 = new Game();