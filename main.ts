scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.showLongText("Hola jovenzuelo,me llamo flori ", DialogLayout.Bottom)
    game.showLongText("I te voi a matar", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("hello brother", 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000020303030302000000000000000000000204030303020000000000000000000002030303030200000000000000000000020303030302000000000000000000000203030303020000000000000000000203030303030302000000000000000202030303030303020200000000000002030303030303030302000000000000020303030303030303020000000000000203030303010303030200000000000002030303030303030302000000000000020203030303030302020000000000000002030303030303020000000000000000000202020202020000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
        2 2 2 2 . . . . . . 2 2 2 2 2 2 
        2 2 2 2 . . . . . . 2 2 2 2 2 2 
        2 2 2 . . . . . . . . 2 2 2 2 2 
        2 2 2 . . . . . . . . 2 2 2 2 2 
        2 2 2 . . . . . . . . 2 2 2 2 2 
        2 2 2 . . . . . . . . 2 2 2 2 2 
        2 2 2 2 . . . . . . 2 2 2 2 2 2 
        2 2 2 2 . . . . . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile2,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen))
    tiles.placeOnRandomTile(mySprite, myTiles.tile1)
})
let mySprite: Sprite = null
game.showLongText("protege al mundo i salva a todos", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
info.setLife(3)
scene.setBackgroundColor(11)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010301010101010000000000000000000000010101010100010101010000000000000101010101000101010100000000000001010101010001010101010101010101010101010100000000000101010101010100000001000001010000000000010101000101000001010101010101000000000001010101000000010101010101010100000101010001000101010101010101010001010100010001010100000001000000010101000100010101000100000001010101010001000000010001010001010101010100000001000100010100010101010101010101010000000101000000000101010101010101010101010101010201`, img`
    2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
    2 . . . . . . . . . . . 2 2 2 2 
    2 . 2 2 2 2 . . . . . . 2 2 2 2 
    2 . 2 2 2 2 . . . . . . 2 2 2 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . 2 2 2 2 2 2 2 . . . 
    2 . . 2 2 . . . . . 2 2 2 . 2 2 
    . . 2 2 2 2 2 2 2 . . . . . 2 2 
    2 2 . . . 2 2 2 2 2 2 2 2 . . 2 
    2 2 . 2 . 2 2 2 2 2 2 2 2 2 . 2 
    2 2 . 2 . 2 2 2 . . . 2 . . . 2 
    2 2 . 2 . 2 2 2 . 2 . . . 2 2 2 
    2 2 . 2 . . . 2 . 2 2 . 2 2 2 2 
    2 2 . . . 2 . 2 . 2 2 . 2 2 2 2 
    2 2 2 2 2 2 . . . 2 2 . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(mySprite)
