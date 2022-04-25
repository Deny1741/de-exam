import { getConfig } from "./utils/getConfig";

export const els = {
    openSearch: "[data-js-open-search]",
}

export default class Search {
    constructor() {
        this.bindEvents();
    }

    handleOpenSearch(event) {
        event.preventDefault();
        const config = getConfig(event.target, els.openSearch)
        const { src } = config;

        let isHidden = "is-hidden";

        const searchElement = document.querySelector(src);

        if (!searchElement) {
            return;
        }

        searchElement.blur()
        searchElement.parentNode.classList.toggle(isHidden)

        if (!searchElement.classList.contains(isHidden)) {
            searchElement.focus()
        }

    }

    handleClick(event) {
        const { target } = event;
        const isMatches = (selector) => target.matches(selector);

        if (target.matches(els.openSearch)) {
            this.handleOpenSearch(event)
        }

    }

    bindEvents() {
        document.addEventListener('click', (event) => {
            this.handleClick(event);
        })
    }
}