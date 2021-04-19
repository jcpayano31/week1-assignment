
function Timer(seconds) {
  this.seconds = seconds;
}
//Timer.prototype.start = function ()

// Timer.start = function () {
  Timer.prototype.start = function () {
  let instance = this;
  let timerInterval = setInterval(() => {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

export default Timer;
