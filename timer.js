import { subTimerValue, makeMarkup } from "./markup.js";

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }

  startTimer() {
    setInterval(() => {
      const startTime = new Date();
      const deltaTime = this.targetDate - startTime;
      const time = this.getTimeComponents(deltaTime);
      subTimerValue(this.selector, time);
    }, 1000);
    makeMarkup(this.selector);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

const timer1 = new CountdownTimer("timer-1", "May 25, 2021");
timer1.startTimer();
// const timer2 = new CountdownTimer("timer-2", "May 28, 2021");
// timer2.startTimer();
// const timer3 = new CountdownTimer("timer-3", "May 20, 2021");
// timer3.startTimer();
