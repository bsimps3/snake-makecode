// should check where the snake currently is, and return a value for target which doesn't overlap snake
function targetNewPoint () {
    isInList = true
    while (isInList) {
        isInList = false
        x_target = randint(0, 4)
        y_target = randint(0, 4)
        isInList = isSnake(x_target, y_target)
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
function isSnake (x: number, y: number) {
    index3 = 0
    while (index3 < score) {
        if (x == list[index3 * 2 + 2] && y == list[index3 * 2 + 3]) {
            return true
        }
        index3 += 1
    }
    return false
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    direction = "up"
})
function drawScreen () {
    led.plot(x_target, y_target)
    for (let index2 = 0; index2 <= score; index2++) {
        led.plot(list[2 * index2], list[2 * index2 + 1])
    }
}
let index3 = 0
let isInList = false
let y_target = 0
let x_target = 0
let list: number[] = []
let direction = ""
let score = 0
score = 0
direction = "right"
list = [0, 0]
led.toggle(list[0], list[1])
targetNewPoint()
led.toggle(x_target, y_target)
drawScreen()
basic.pause(1000)
while (list[0] < 5 && (list[0] >= 0 && (list[1] < 5 && list[1] >= 0)) && score < 25) {
    basic.clearScreen()
    list.insertAt(2, list[0])
    list.insertAt(3, list[1])
    // movement if statements
    if (direction == "right") {
        list[0] = list[0] + 1
    } else if (direction == "down") {
        list[1] = list[1] + 1
    } else if (direction == "left") {
        list[0] = list[0] + -1
    } else {
        list[1] = list[1] + -1
    }
    // It is failing because the head is in list always.
    if (isSnake(list[0], list[1])) {
        break;
    }
    if (list[0] == x_target && list[1] == y_target) {
        targetNewPoint()
        score += 1
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
