import "./styles.pcss"
import {getConfig} from "../../js/utils/getConfig";
import Collection from "../../js/collection";


export class Timer {
  constructor(instance) {
    this.instance = instance
    this.config = getConfig(this.instance, TimersCollection.instance)
    this.renderTimer()
    setInterval(() => { this.renderTimer() }, 1000)
  }

  static getTimer(date) {
    let currentDate = Date.now()
    let duration = date - currentDate

    let timer = {}
    let seconds = duration / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24

    timer.seconds = Math.floor(seconds % 60)
    timer.minutes = Math.floor(minutes % 60)
    timer.hours = Math.floor(hours % 24)
    timer.days = Math.floor(days)

    return timer
  }

  renderTimer() {

    const timerText = this.instance.querySelector('[data-js-timer-text]')
    const { year, month, date } = this.config

    const dateEnd = (new Date(year, month, date)).getTime()
    const { minutes, hours, days } = Timer.getTimer(dateEnd)

    timerText.textContent = `${minutes} м : ${hours} ч : ${days} д`
  }

}

export default class TimersCollection extends Collection {
  static instance = "[data-js-timer]";

  constructor() {
    super();
    this.init()
  }

  init() {
    document.querySelectorAll(TimersCollection.instance).forEach(el => {
      this.collection = new Timer(el)
    })
  }

}