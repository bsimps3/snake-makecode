input.onButtonPressed(Button.A, function () {
    direction = "left"
})
input.onPinPressed(TouchPin.P2, function () {
    direction = "down"
})
input.onButtonPressed(Button.B, function () {
    direction = "right"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    direction = "up"
})
function drawScreen () {
    led.plot(x, y)
    led.plot(x_target, y_target)
    if (score >= 2) {
        led.plot(old_x, old_y)
    }
    if (score >= 3) {
        led.plot(old_x_2, old_y_2)
    }
}
let old_y_2 = 0
let old_x_2 = 0
let y_target = 0
let x_target = 0
let old_y = 0
let old_x = 0
let y = 0
let x = 0
let direction = ""
let score = 0
score = 1
direction = "right"
x = 0
y = 0
old_x = 0
old_y = 0
led.toggle(x, y)
x_target = randint(0, 4)
y_target = randint(0, 4)
led.toggle(x_target, y_target)
drawScreen()
basic.pause(1000)
while (x < 5 && (x >= 0 && (y < 5 && y >= 0))) {
    basic.clearScreen()
    old_x_2 = old_x
    old_y_2 = old_y
    old_x = x
    old_y = y
    // movement if statements
    // 
    if (direction == "right") {
        x += 1
    } else if (direction == "down") {
        y += 1
    } else if (direction == "left") {
        x += -1
    } else {
        y += -1
        if (x == x_target && y == y_target) {
            led.unplot(x_target, y_target)
            score += 1
            x_target = randint(0, 4)
            y_target = randint(0, 4)
            led.plot(x_target, y_target)
        }
    }
    drawScreen()
    basic.pause(1000)
}
basic.showIcon(IconNames.No)
