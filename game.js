class Game {
    constructor(score) {
        this.containerMap = this.showMap();
        this.player = new Player('mihaela', this.containerMap.getBoundingClientRect());
        this.setUpPlayerMovement();
        this.score = score;
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
                this.obstacle1.removeObstacle();
                this.obstacle2.removeObstacle();
                this.obstacle3.removeObstacle();
                this.obstacle1.showObstacle();
                this.obstacle2.showObstacle();
                this.obstacle3.showObstacle();
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

    playerHitsObstacle() {
        //aducem coordonatele playerului si coordonatele obstacolului
        const obstacle1Rect = this.obstacle1.returnObstacleCoordinates();
        const obstacle2Rect = this.obstacle2.returnObstacleCoordinates();
        const obstacle3Rect = this.obstacle3.returnObstacleCoordinates();
        const playerRect = this.player.returnPlayerCoordinates();

        //facem diferenta dintre ele 
        const diffX1 = Math.abs(playerRect.x - obstacle1Rect.x);
        const diffY1 = Math.abs(playerRect.y - obstacle1Rect.y);
        const diffX2 = Math.abs(playerRect.x - obstacle2Rect.x);
        const diffY2 = Math.abs(playerRect.y - obstacle2Rect.y);
        const diffX3 = Math.abs(playerRect.x - obstacle3Rect.x);
        const diffY3 = Math.abs(playerRect.y - obstacle3Rect.y);

        const isIntersect1 = diffX1 < obstacle1Rect.width & diffY1 < obstacle1Rect.height;
        const isIntersect2 = diffX2 < obstacle2Rect.width & diffY2 < obstacle2Rect.height;
        const isIntersect3 = diffX3 < obstacle3Rect.width & diffY3 < obstacle3Rect.height;
        if (isIntersect1) {
            this.score = score++;
            Text("Score:" + this.score)
            return true;
        } else if (isIntersect2) {
            this.score = score++;
            return true;
        } else if (isIntersect3) {
            this.score = score++;
            return true;
        }
    }
}
const game1 = new Game(100);