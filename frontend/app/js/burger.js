import { getConfig } from "./utils/getConfig";

export const els = {
  burger: "[data-js-burger]",
}

export default class Burger {
  constructor() {
    this.bindEvents()
  }



  handleToggleBurger(event) {
    event.preventDefault()
    const config = getConfig(event.target, els.burger)
    const { src } = config

    const attrShow = "is-show"
    const burgerNav = document.querySelector(src)
    burgerNav.classList.toggle(attrShow)

  }


  handleClick(event) {
    const { target } = event;

    if (target.matches(els.burger)) {
      this.handleToggleBurger(event)
    }
  }

  bindEvents() {
    document.addEventListener('click', (event) => {
      this.handleClick(event)
    })
  }
}