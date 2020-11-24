class PlayGame extends Phaser.Scene{
    constructor(){
        super("playGame")
    }

    create(){

        /* ---- Create the background ---- */
        this.nebulaeBack = this.add.tileSprite(0,0, 
            config.width, 
            config.height, 
            "nebulae-back")
        this.nebulaeBack.setOrigin(0,0)
        
        this.starsBack = this.add.tileSprite(0, 0, 
            config.width, 
            config.height, 
            "stars-back")
        this.starsBack.setOrigin(0,0)
        



        /* ---- Create the paddles ---- */
        this.player1 = this.physics.add.sprite(100,
            config.height/2, 
            "player1")
        
        this.player2 = this.physics.add.sprite(config.width - 100,
            config.height/2, 
            "player2")

        this.paddles = this.physics.add.group()
        this.paddles.add(this.player1)
        this.paddles.add(this.player2)
        
        /* Set additional physics options for each paddle */
        this.player1.setCollideWorldBounds(true)
        this.player1.body.immovable = true // Otherwise paddle would be moved off the track

        this.player2.setCollideWorldBounds(true)
        this.player2.body.immovable = true

        /* ---- Create the moon ---- */
        this.ball = this.physics.add.sprite(config.width/2, 
            config.height/2, 
            "ball")
        this.ball.setCollideWorldBounds(true)
        this.ball.setBounce(1)
        this.ball.setVelocity(400,400)

        /* ---- Create collision physics for ball and paddles ---- */
        this.physics.add.collider(this.paddles, this.ball)
    }

    update(){

        this.starsBack.tilePositionY -= 0.5
    }
}