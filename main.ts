function rock_you () {
    control.runInParallel(function () {
        for (let index = 0; index < 2; index++) {
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
        }
    })
    light.showAnimation(light.theaterChaseAnimation, 22000)
    music.stopAllSounds()
}
function twinkle2 () {
    control.runInParallel(function () {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C C G G A A G - ", 120)
            music.playMelody("F F E E D D C - ", 120)
        }
    })
    light.showAnimation(light.sparkleAnimation, 15000)
    music.stopAllSounds()
}
function truth_hurts () {
    control.runInParallel(function () {
        music.setTempo(150)
        for (let index = 0; index < 2; index++) {
            music.playTone(131, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(220, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(131, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(220, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(131, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
        }
    })
    light.showAnimation(light.cometAnimation, 15000)
    music.stopAllSounds()
}
music.setVolume(228)
pause(1000)
let twinkle = true
twinkle2()
while (twinkle) {
    if (input.pinA6.isPressed()) {
        light.setAll(0xff0000)
        music.powerDown.play()
        pause(2000)
        twinkle2()
        light.clear()
    } else if (input.pinA5.isPressed()) {
        music.baDing.play()
        light.setAll(0x00ff00)
        twinkle = false
        pause(2000)
    }
    light.clear()
}
let rockYou = true
rock_you()
while (rockYou) {
    if (input.touchA7.isPressed()) {
        music.powerDown.play()
        light.setAll(0xff0000)
        pause(2000)
        light.clear()
        rock_you()
    } else if (input.touchA4.isPressed()) {
        music.baDing.play()
        light.setAll(0x00ff00)
        rockYou = false
        pause(2000)
    }
    light.clear()
}
let truthHurts = true
truth_hurts()
while (truthHurts) {
    if (input.pinA1.isPressed()) {
        music.powerDown.play()
        light.setAll(0xff0000)
        pause(2000)
        light.clear()
        truth_hurts()
    } else if (input.pinA3.isPressed()) {
        music.powerDown.play()
        light.setAll(0xff0000)
        pause(2000)
        light.clear()
        truth_hurts()
    } else if (input.pinA2.isPressed()) {
        music.baDing.play()
        light.setAll(0x00ff00)
        truthHurts = false
        pause(2000)
        control.runInParallel(function () {
            music.magicWand.play()
        })
        light.showAnimation(light.rainbowAnimation, 10000)
    }
}
light.clear()
