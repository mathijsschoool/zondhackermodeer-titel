input.onButtonPressed(Button.A, function on_button_pressed_a() {
    laat_motor_draaien(1, 1000, pins.analogReadPin(AnalogPin.P3))
})
function laat_motor_draaien(port: number, time_milliseconds: number, speed: number) {
    let portlist = [AnalogPin.P16, AnalogPin.P15, AnalogPin.P14, AnalogPin.P13]
    pins.analogWritePin(portlist[port - 1], 0)
    pins.analogWritePin(portlist[port - 1], speed)
    basic.pause(time_milliseconds)
    pins.analogWritePin(portlist[port - 1], 0)
}

basic.forever(function on_forever() {
    
})
