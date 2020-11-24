/* --- Set-up the basics of the game file --- */
const gameSettings = {
    playerSpeed: 200,
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 1024,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [bootGame, startGame] 
};

var game = new Phaser.Game(config);