input.onButtonPressed(Button.A, function () {
    radio.sendString("how are you")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
