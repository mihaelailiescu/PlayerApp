class Player {
    constructor(name, containerMapRect) {
        this.name = name;
        this.containerMapRect = containerMapRect;
        this.div = Player.afisare();
        this.scoreDiv = this.showScore();
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
        style.backgroundColor = "blue";
        style.position = "absolute";
        div.style.top = "8px";
        div.style.left = "8px";

        document.body.appendChild(div);

        return div;
    }

    showScore() {
        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "10px";
        style.position = "absolute";
        div.style.top = "20px";
        div.style.left = "20px";
        document.body.appendChild(div)

        return div;

    }

    setScore(score) {
        this.scoreDiv.innerHTML = `
            <p> ${score}</p>
            `
    }
}


//const player2 = new Player('alex');