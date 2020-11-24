/* --- Set-up the basics of the game file --- */
const config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [BootGame, PlayGame] 
};

var game = new Phaser.Game(config);