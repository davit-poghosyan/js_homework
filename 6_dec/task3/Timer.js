const EventsEmitter  = require("node:events").EventEmitter
const emitter = new EventsEmitter()

emitter.on("start", () => {
    console.log("Timer started")
})
emitter.on("tick", (val) => {
    console.log("seconds: ", val)
})
emitter.on("end", () => {
    console.log("end of Timer")
})

class Timer extends EventsEmitter {
    constructor(seconds) {
        super()
        this.seconds = seconds
    }


    start() {
        emitter.emit("start")
        
        let remaining = this.seconds
        let now = Date.now()
        while (remaining > 0) {
            let diff = Math.floor((Date.now() - now)/1000)
            if (this.seconds - diff !== remaining) {
                --remaining;
                emitter.emit("tick", remaining)
            }         
        }
        emitter.emit("end")

    }   
}

let timer = new Timer(5)
timer.start()