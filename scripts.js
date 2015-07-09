var game = new Phaser.Game(800, 600, Phaser.AUTO, "my-game", { preload: preload, create: create, update: update });
var character;
var layer;
function preload()
{
    game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("Tiles", "images/tiles-small.png"); 
    game.load.spritesheet("Character", "images/My character.png", 92, 92, 24);
}    
function create()
{
    game.physics.startSystem(Phaser.Physics.ARCADE);
    var map = game.add.tilemap("Level", 64, 64);
     map.setCollisionBetween(4, 15);
    map.addTilesetImage("Tiles"); 
    layer = map.createLayer( 0 );
    layer.resizeWorld();   
character = game.add.sprite(4*64, 12*64 + 6, "Character");
game.physics.enable(character);
character.body.setSize(32, 58, 4, -8);
character.animations.add("idle", [5]);   
character.anchor.x = 0.5;
    character.anchor.y = 1;
    character.animations.play("idle")
    game.camera.follow(character);
}
function update()
{
    game.physics.arcade.collide(character, layer);
    character.body.gravity.y = 300;
        character.body.velocity.x = 0;
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
   character.body.velocity.x = 2 * 60;
     if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    character.x = character.x - 2;
     if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        if (character.body.onFloor())
        {
            character.body.velocity.y = -200;
        }
}
