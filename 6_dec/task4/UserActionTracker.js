const EventEmitter = require("node:events").EventEmitter
const readline = require('readline');

let emitter = new EventEmitter()

emitter.on("actionLogged", (action) => {
    console.log("the user action is: ", action)
})

emitter.on("maxActions", () => {
    console.log("count of actions are greater than 5")
})

class UserActionTracker extends EventEmitter {
    count = 0
    logAction(action) {     
        ++this.count  
        emitter.emit("actionLogged",action)
        if (this.count > 5) {
            emitter.emit("maxActions")
        }
    }   
    getActionCount() {
        return this.count
    }
}

let tracker = new UserActionTracker()



console.log('enter user actions:');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    const name = input.trim();
    tracker.logAction(name)
    process.stdin.end();
});
