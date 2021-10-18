// should check where the snake currently is, and return a value for target which doesn't overlap snake
function targetNewPoint () {
    isInList = true
    while (isInList) {
        isInList = false
        x_target = randint(0, 4)
        y_target = randint(0, 4)
        for (let index = 0; index <= score; index++) {
            if (x_target == list[2 * index] && y_target == list[index * 2 + 1]) {
                isInList = true
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    direction = "left"
})
input.onButtonPressed(Button.AB, function () {
    direction = "down"
})
input.onButtonPressed(Button.B, function () {
    direction = "right"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    direction = "up"
})
function drawScreen () {
    led.plot(x_target, y_target)
    for (let index = 0; index <= score; index++) {
        led.plot(list[2 * index], list[2 * index + 1])
    }
}
let isInList = false
let y = 0
let x = 0
let y_target = 0
let x_target = 0
let list: number[] = []
let direction = ""
let score = 0
score = 0
direction = "right"
list = [0, 0]
led.toggle(list[0], list[1])
x_target = randint(0, 4)
y_target = randint(0, 4)
led.toggle(x_target, y_target)
drawScreen()
basic.pause(1000)
while (x < 5 && (x >= 0 && (y < 5 && y >= 0)) && score < 25) {
    basic.clearScreen()
    list.insertAt(2, list[0])
    list.insertAt(3, list[1])
    // movement if statements
    // 
    if (direction == "right") {
        list[0] = list[0] + 1
    } else if (direction == "down") {
        list[1] = list[1] + 1
    } else if (direction == "left") {
        list[0] = list[0] + -1
    } else {
        list[1] = list[1] + -1
    }
    if (list[0] == x_target && list[1] == y_target) {
        score += 1
        targetNewPoint()
        led.plot(x_target, y_target)
    }
    drawScreen()
    for (let index = 0; index < 2; index++) {
        basic.pause(40)
        led.toggle(x_target, y_target)
        for (let index = 0; index < 9; index++) {
            basic.pause(40)
            led.toggle(list[0], list[1])
        }
    }
}
if (score == 25) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
