let myVariable = 0
while (true) {
    if (sensors.color3.light(LightIntensityMode.Reflected) > 10) {
        motors.largeAD.tank(80, 80)
    } else {
        motors.largeAD.tank(-80, -80, 0.5, MoveUnit.Rotations)
        motors.largeAD.tank(80, -80, 1, MoveUnit.Rotations)
        motors.largeAD.tank()
    }
}
motors.largeA.run(50)
motors.stopAll()
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Blue)
sensors.ultrasonic4.pauseUntil(UltrasonicSensorEvent.ObjectDetected)
sensors.color3.setThreshold(Light.Dark, 10)
myVariable = 5
myVariable += 1
myVariable = 5 + 10
myVariable = sensors.color3.light(LightIntensityMode.Reflected) * -1
forever(function () {
    brick.showValue("RLI", sensors.color1.light(LightIntensityMode.Reflected), 1)
    brick.showValue("Distance", sensors.ultrasonic2.distance(), 2)
})
