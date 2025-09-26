let Count = 0
loops.everyInterval(2000, function () {
    if (input.runningTime() < 60000) {
        datalogger.log(
        datalogger.createCV("1", input.runningTime()),
        datalogger.createCV("1", 0)
        )
        if (input.lightLevel() < 25) {
            Count += 2
        }
    }
})
basic.forever(function () {
    if (Count >= 10 && input.lightLevel() < 25) {
        basic.showIcon(IconNames.No)
    } else if (input.lightLevel() < 25) {
        basic.showIcon(IconNames.Sad)
    } else {
        Count = 0
        basic.showIcon(IconNames.Yes)
    }
})
