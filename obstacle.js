class Obstacle {
    constructor(containerMap) {
        this.containerMap = containerMap;
        this.width = 20;
        this.height = 20;
        this.color = "green";
    }

    showObstacle() {
        //aici se creaza obstacolul
        const obstacleDOM = this.createObstacleDOM();

        //luam coordonatele containarului
        const mapWidth = this.containerMap.getBoundingClientRect().width;
        const mapHeight = this.containerMap.getBoundingClientRect().height;

        //x si y sunt 2 coordonate random in interiorul containerului
        this.x = Math.floor(Math.random() * mapWidth);
        this.y = Math.floor(Math.random() * mapHeight);

        //setam pozitia absolut pentru cele 2 coordonate
        obstacleDOM.style.position = "absolute";
        obstacleDOM.style.top = `${this.x}px`;
        obstacleDOM.style.left = `${this.y}px`;

        //salvez contextul obiectului
        this.obstacleDOM = obstacleDOM;

        //adaug obstacolul in container
        this.containerMap.appendChild(obstacleDOM);
    }

    createObstacleDOM() {
        const div = document.createElement('div');
        div.style.backgroundColor = this.color;
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;

        return div;
    }

    returnObstacleCoordinates() {
        return this.obstacleDOM.getBoundingClientRect();
    }
}