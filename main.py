def on_button_pressed_a():
    laat_motor_draaien(1,1000, 1000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def laat_motor_draaien(port : number,time_milliseconds: number, speed: number):
    portlist = [AnalogPin.P16,AnalogPin.P15,AnalogPin.P14,AnalogPin.P13]
    pins.analog_write_pin(portlist[port], 0)
    pins.analog_write_pin(portlist[port], speed)
    basic.pause(time_milliseconds)
    pins.analog_write_pin(portlist[port], 0)


def on_forever():
    pass
basic.forever(on_forever)
