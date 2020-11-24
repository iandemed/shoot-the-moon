class playGame extends Phaser.Scene{
    constructor(){
        super("playGame")
    }

    create(){

        this.player1 = this.create_paddle(0, config.width/2)

    }

    create_paddle(x,y, image){
        let paddle = this.physics.add.sprite(x,y, image)
        paddle.setCollideWorldBounds(true)

        return paddle
    }
}