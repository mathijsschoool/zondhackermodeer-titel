input.onButtonPressed(Button.A, function on_button_pressed_a() {
    laat_motor_draaien(1, 1000, 1000)
})
function laat_motor_draaien(port: number, time_milliseconds: number, speed: number) {
    let portlist = [AnalogPin.P16, AnalogPin.P15, AnalogPin.P14, AnalogPin.P13]
    pins.analogWritePin(portlist[port], 0)
    pins.analogWritePin(portlist[port], speed)
    basic.pause(time_milliseconds)
    pins.analogWritePin(portlist[port], 0)
}

basic.forever(function on_forever() {
    
})
