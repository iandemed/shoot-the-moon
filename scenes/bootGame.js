class BootGame extends Phaser.Scene{

    constructor(){
        super("bootGame")
    }

    preload(){

        /* ---- Load in the pong paddles and ball ---- */
        this.load.image("player1", "../assets/images/pong_paddle_left.png",{
            frameWidth: 21,
            frameHeight: 106
        })
        this.load.image("player2", "../assets/images/pong_paddle_right.png",{
            frameWidth: 21,
            frameHeight: 106
        })

        this.load.image("ball", "../assets/images/moon.png", {
            frameWidth: 48,
            frameHeight: 48
        })

        /* ---- Load in the background images ---- */
        this.load.image('nebulae-red', "../assets/images/RedNebulae.png")
        this.load.image('stars-yellow', "../assets/images/YellowStars.png")
        this.load.image('stars-blue', "../assets/images/BlueStars.png")

    }

    create(){
        this.scene.start("playGame")
    }

}