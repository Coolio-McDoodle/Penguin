var game = new Phaser.Game(800, 600, Phaser.AUTO, "my-game", { preload: preload, create: create, update: update });
var character;
function preload()
{
    game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("Tiles", "images/tiles-small.png"); 
    game.load.spritesheet("Character", "images/My character.png", 92, 92, 24);
}    
function create()
{
    var map = game.add.tilemap("Level", 64, 64);
    map.addTilesetImage("Tiles"); 
    var layer = map.createLayer( 0 );
    layer.resizeWorld();   
character= game.add.sprite ( 4*64, 11*64, "Character" );   
game.camera.y = 600;
character.anchor.x = 0.5;
    character.anchor.y = 1;
}
function update()
{
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    character.x = character.x + 1;
     if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    character.x = character.x - 1;
}
