class Player {
    constructor(name, containerMapRect, score) {
        this.name = name;
        this.containerMapRect = containerMapRect;
        // this.score = score;
        this.div = Player.afisare();
        // this.showScore();
    }

    moveDown() {
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`;
    }

    canMoveDown() {
        return (parseInt(this.div.style.top) + 40 <= this.containerMapRect.bottom);
    }

    moveUp() {
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop - 20}px`;
    }

    canMoveUp() {
        return (parseInt(this.div.style.top) - 20 >= this.containerMapRect.top);
    }

    moveLeft() {
        const oldTop = parseInt(this.div.style.left);
        this.div.style.left = `${oldTop - 20}px`;
    }

    canMoveLeft() {
        return (parseInt(this.div.style.left) - 20 >= this.containerMapRect.left);
    }

    moveRight() {
        const oldTop = parseInt(this.div.style.left);
        this.div.style.left = `${oldTop + 20}px`;
    }

    canMoveRight() {
        return (parseInt(this.div.style.left) + 40 <= this.containerMapRect.right);
    }

    returnPlayerCoordinates() {
        return this.div.getBoundingClientRect();
    }

    //afisam div-ul
    static afisare() {

        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "20px";
        style.backgroundColor = "red";
        style.position = "absolute";
        div.style.top = "20px";
        div.style.left = "20px";

        document.body.appendChild(div);

        return div;
    }

    // showScore() {
    //     // const div = document.createElement('div');
    //     // div.setAttribute("id", "score");
    //     // let score = 100;
    //     // document.getElementsById('score').innerHTML = "Score: " + score
    // }
}


//const player2 = new Player('alex');