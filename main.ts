led.enable(false)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P12, 250)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 250)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P12, 250)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P15, 250)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(2000)
})