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
function move2nd () {
	
}
let old_y = 0
let old_y_2 = 0
let old_x = 0
let old_x_2 = 0
let direction = ""
let score = 1
direction = "right"
let x = 0
let y = 0
led.toggle(x, y)
let x_target = randint(0, 4)
let y_target = randint(0, 4)
led.toggle(x_target, y_target)
while (x < 5 && (x >= 0 && (y < 5 && y >= 0))) {
    old_x_2 = old_x
    old_y_2 = old_y
    old_x = x
    old_y = y
    // movement if statements
    // 
    if (direction == "right") {
        led.toggle(x, y)
        x += 1
        led.toggle(x, y)
    } else if (direction == "down") {
        led.toggle(x, y)
        y += 1
        led.toggle(x, y)
    } else if (direction == "left") {
        led.toggle(x, y)
        x += -1
        led.toggle(x, y)
    } else {
        led.toggle(x, y)
        y += -1
        led.toggle(x, y)
    }
    if (x == x_target && y == y_target) {
        score += 1
    }
    basic.pause(1000)
}
basic.showIcon(IconNames.No)
