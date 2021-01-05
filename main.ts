while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
