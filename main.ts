radio.onReceivedValue(function (name, value) {
    if (name == "left") {
        Left_Speed = value
    } else if (name == "right") {
        Right_Speed = value
    }
    OMG_Tank.Set_Speed(Left_Speed, Right_Speed)
})
let Right_Speed = 0
let Left_Speed = 0
radio.setGroup(128)
OMG_Tank.Tank_Init(Tank_version.V2)
OMG_Tank.Stop_Motors()
