var game = new Phaser.Game(800, 600, Phaser.AUTO, "my-game", { preload: preload, create: create, update: update });
var character;
var layer;
 
function preload()
{
    game.stage.backgroundColor = "#4983FF";
    game.load.tilemap("Level", "level.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("Tiles", "images/tiles-small.png"); 
    game.load.spritesheet("Character", "images/My character.png", 96, 96, 24);
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
    character.body.setSize(32, 58, 4, -4);
    character.animations.add("idle", [7]);
    character.animations.play("idle")[7];     
    character.animations.add("walk", [7,3,4,8,9,10,11,15],25, true);   
    character.anchor.x = 0.5;
    character.anchor.y = 1;
    game.camera.follow(character);
}
 
function update()
{
    var isKeyPressed = false
    game.physics.arcade.collide(character, layer);
    character.body.gravity.y = 600;
    character.body.velocity.x = 0;
 
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        isKeyPressed = true
        character.body.velocity.x = 3.5 * 60;
        character.animations.play("walk");
        character.scale.set(1, 1);
    }
 
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
       {
        isKeyPressed = true
        character.body.velocity.x = -3.5 * 60;
        character.animations.play("walk");
        character.scale.set(-1, 1);
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        if (character.body.onFloor())
        {
            character.body.velocity.y = -420;
        }
    }
    
    if (isKeyPressed == false)
    {
        character.animations.play("idle");
    }
 
    if (character.y> 6400)
    {
        restartLevel();
    } 
}                  
 
function restartLevel()
{
    character.x = 5*64;
    character.y = 13*64;
}