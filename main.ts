RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    RingbitCar.forward()
    basic.pause(1000)
    RingbitCar.turnright()
    basic.pause(1000)
})
