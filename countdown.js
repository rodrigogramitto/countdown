
const Pomodoro = function(work, rest) {
  this.workTime = work || 1500;
  this.restTime = rest || 300;
};

Pomodoro.prototype.start = function() {

    let work = this.workTime;
    let rest = this.restTime;

    let workInterval = setInterval(() => {
      console.log(work);
      work--;

      if (work < 0) {
        clearInterval(workInterval);
        let restInterval = setInterval(() => {
          console.log(rest);
          rest--;

          if (work < 0) {
            clearInterval(restInterval)
          }
        }, 1000)
      }
    }, 1000)
}

let myPomodoro = new Pomodoro(60, 15);
myPomodoro.start();