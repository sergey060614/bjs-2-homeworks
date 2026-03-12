class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
  if (!time || typeof callback !== "function") {
    throw new Error("Необходимо задать время и действительную функцию обратного вызова.");
  }

  if (this.alarmCollection.some((clock) => clock.time === time)) {
    console.warn(`Будильник на время "${time}" уже установлен.`);
    return;
  }

  this.alarmCollection.push({
    time: time,
    callback: callback,
    canCall: true
  });
}

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (clock) => clock.time !== time
    );
  }

  getCurrentFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
  if (this.intervalId !== null) {
    return;
  }
  
  this.intervalId = setInterval(() => {
    const currentTime = this.getCurrentFormattedTime();
    
    this.alarmCollection.forEach((clock) => {
      if (clock.time === currentTime && clock.canCall) {
        clock.canCall = false;
        clock.callback();
      }
    });
  }, 1000);
}

  stop() {
    if (this.intervalId === null) {
      return;
    }
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((clock) => {
      clock.canCall = true;
    });
  }

  clearAlarms() {
    this.alarmCollection = [];
    this.stop();
    
  }
}
