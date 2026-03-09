class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (time && callback) {
      if (this.alarmCollection.length > 0) {
        for (let i = 1; i < this.alarmCollection.length; i = i + 1) {
          if (this.alarmCollection[i - 1].time === time) {
            console.warn("Уже присутствует звонок на это же время");
          }
        }
      }
      this.alarmCollection.push({
        time: time,
        callback: callback,
        canCall: true
      });
    } else {
      throw new Error("Отсутствуют обязательные аргументы");
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (clock) => clock.time !== time
    );
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    const self = this;
    this.intervalId = setInterval(function () {
      const currentTime = self.getCurrentFormattedTime();
      self.alarmCollection.forEach((clock) => {
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
    this.stop();
    this.alarmCollection = [];
  }
}
