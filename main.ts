controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((0 as any) < (5 as any)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `, SpriteKind.Food)
        mySprite2.setPosition(mySprite.x, mySprite.y)
    }
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . 3 3 . . . . . . . . . . . 
        . . 3 . . . . . 3 3 3 3 . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . 3 . 
        . . . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 50, 50)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . f f f 1 1 f . . 
    . . . . . . f f 1 1 1 1 1 f . . 
    . . . . . f 1 1 1 1 1 1 f . . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . . f 1 1 1 1 1 f . . . . 
    . . . . . f 1 1 1 1 1 f . . . . 
    . . . . f 1 f f 1 1 f . . . . . 
    . . . f 1 f . . f f . . . . . . 
    . . . f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
