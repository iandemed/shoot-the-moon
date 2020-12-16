class PlayGame extends Phaser.Scene{
    constructor(){
        super("playGame")
    }

    create(){

        /* ---- Create the background ---- */
        this.nebulaeRed = this.add.tileSprite(0,0, 
            config.width, 
            config.height, 
            "nebulae-red")
        this.nebulaeRed.setOrigin(0,0)
        
        this.starsYellow = this.add.tileSprite(0, 0, 
            config.width, 
            config.height, 
            "stars-yellow")
        this.starsYellow.setOrigin(0,0)
        
        this.starsBlue = this.add.tileSprite(0, 0, 
            config.width, 
            config.height, 
            "stars-blue")
        this.starsBlue.setOrigin(0,0)

        



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
        this.ball.setVelocity(gameSettings.ballSpeed, 0)

        /* ---- Create collision physics for ball and paddles ---- */
        this.physics.add.collider(this.paddles, this.ball)


        /* ---- Set up player controls ---- */
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.p1_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W) 
        this.p1_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

        this.cursorKeys = this.input.keyboard.createCursorKeys()
    }
s
    movePlayer1(){
        if(this.p1_up.isDown){
            this.player1.setVelocityY(-gameSettings.paddleSpeed)
        } else if(this.p1_down.isDown){
            this.player1.setVelocityY(gameSettings.paddleSpeed)
        } else {
            this.player1.setVelocityY(0)
        }
    }

    movePlayer2(){
        if(this.cursorKeys.up.isDown){
            this.player2.setVelocityY(-gameSettings.paddleSpeed)
        } else if (this.cursorKeys.down.isDown){
            this.player2.setVelocityY(gameSettings.paddleSpeed)
        } else{
            this.player2.setVelocityY(0)
        }
    }


    update(){

        this.starsYellow.tilePositionY -= 0.025
        this.starsBlue.tilePositionY -= 0.025
        
        this.movePlayer1()
        this.movePlayer2()
    
    
        if (this.ball.x < 25){
            this.reset()
            console.log("Player 2 Scores")
        }

        if (this.ball.x > config.width - 25){
            this.reset()
            console.log("Player 1 Scores")
        }
    }

    reset(){
        
        
        this.ball.x = config.width/2
        this.ball.y = config.height/2

        this.player1.y = config.height/2
        this.player2.y = config.height/2

        this.ball.setVelocity(gameSettings.ballSpeed, 0)

    }

}