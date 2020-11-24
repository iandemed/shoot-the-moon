/* --- Set-up the basics of the game file --- */
const config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [BootGame, PlayGame],
    pixelArt: true
};

var game = new Phaser.Game(config)