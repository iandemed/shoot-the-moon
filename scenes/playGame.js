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
        this.player1 = this.physics.add.sprite(100,config.height/2, "player1")
        
        
        this.player2 = this.physics.add.sprite(config.width - 100,config.height/2, "player2")

    }

    update(){

        this.nebulaeBack.tilePositionY -= 0.65
        this.starsBack.tilePositionX -= 0.5
    }
}