input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(input.temperature())
    basic.showString("*")
    basic.pause(2000)
})
