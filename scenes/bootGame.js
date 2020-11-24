class BootGame extends Phaser.Scene{

    constructor(){
        super("bootGame")
    }

    preload(){

        /* ---- Load in the pong paddles and ball ---- */
        this.load.image("player1", "../assets/images/pong_paddle_left.png",{
            frameWidth: 62,
            frameHeight: 318
        })
        this.load.image("player2", "../assets/images/pong_paddle_right.png",{
            frameWidth: 62,
            frameHeight: 318
        })

        this.load.image("ball", "../assets/images/moon.png", {
            frameWidth: 48,
            frameHeight: 48
        })

        /* ---- Load in the background images ---- */
        this.load.image('nebulae-back', "../assets/images/RedNebulae_4x3.png")
        this.load.image('stars-back', "../assets/images/YellowStars_4x3.png")
    }

    create(){
        this.scene.start("playGame")
    }

}