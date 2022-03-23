class Stevao {
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.steveMaoImg = loadImage("./assets/SteveMãoComArco.png");
        this.steveCorpoImg = loadImage("./assets/SteveMC.png");
        this.enemyImg = loadImage("./assets/SkeletonMC.png");
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.steveMaoImg, windowWidth/2 - 440.5, windowHeight - 323.6, 70, 125);

        pop();
        image(this.steveCorpoImg, windowWidth/2 - 550, windowHeight - 380, 75, 175);
        image(this.enemyImg, windowWidth/2 + 385, windowHeight - 370, 175, 175);
    }
}