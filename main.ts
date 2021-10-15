input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.Direction) == 0 || sprite.get(LedSpriteProperty.Direction) == 180) {
        sprite.set(LedSpriteProperty.Direction, -90)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (sprite.get(LedSpriteProperty.Direction) == -90 || sprite.get(LedSpriteProperty.Direction) == 90) {
        sprite.set(LedSpriteProperty.Direction, 180)
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.Direction) == 0 || sprite.get(LedSpriteProperty.Direction) == 180) {
        sprite.set(LedSpriteProperty.Direction, 90)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sprite.get(LedSpriteProperty.Direction) == -90 || sprite.get(LedSpriteProperty.Direction) == 90) {
        sprite.set(LedSpriteProperty.Direction, 0)
    }
})
let sprite3: game.LedSprite = null
let sprite2: game.LedSprite = null
let old_y = 0
let old_y_2 = 0
let old_x = 0
let old_x_2 = 0
let sprite: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
game.setScore(1)
sprite = game.createSprite(0, 0)
let target = game.createSprite(randint(0, 4), randint(0, 4))
while (true) {
    old_x_2 = old_x
    old_y_2 = old_y
    old_x = sprite.get(LedSpriteProperty.X)
    old_y = sprite.get(LedSpriteProperty.Y)
    sprite.move(1)
    if (sprite.isTouching(target)) {
        game.addScore(1)
        target.set(LedSpriteProperty.X, randint(0, 4))
        target.set(LedSpriteProperty.Y, randint(0, 4))
        if (game.score() == 2) {
            sprite2 = game.createSprite(old_x, old_y)
        }
        if (game.score() == 3) {
            old_x_2 = old_x
            old_y_2 = old_y
            sprite3 = game.createSprite(old_x_2, old_y_2)
        }
    }
    if (game.score() >= 2) {
        sprite2.set(LedSpriteProperty.X, old_x)
        sprite2.set(LedSpriteProperty.Y, old_y)
    }
    if (game.score() >= 3) {
        sprite3.set(LedSpriteProperty.X, old_x_2)
        sprite3.set(LedSpriteProperty.Y, old_y_2)
    }
    basic.pause(1000)
}
game.gameOver()
