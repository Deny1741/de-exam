// Load icons

import SlidersCollection from "./js/sliders";

const requireAll = (r) => r.keys().forEach(r)
requireAll(require.context('./icons', true, /\.svg$/))
import svg4everybody from 'svg4everybody'
import SvgUse from './js/svgUse'
import "./styles/icons.pcss"

import "./styles"

// Load components
import "./components/header"
import "./components/logo"
import "./components/button"
import "./components/event-card"
import "./components/lang-switcher"
import "./components/input"
import "./components/footer"
import "./components/social"
import "./components/checkbox"

import MapsCollection from "./components/map";
import Modals from "./js/modals";
import Search from "./js/search";
import Forms from "./js/forms";
import Burger from "./js/burger";
import TimersCollection from "./components/event-card";
import SocialsCollection from "./components/social";
import Captcha from "./js/captcha";


window.App = {
  debug: !!window.location.port,
}

window.svg4everybody = svg4everybody

document.addEventListener('DOMContentLoaded', () => {
  new SvgUse();

  App.Modals = new Modals();
  App.Sliders = new SlidersCollection();
  App.Search = new Search();
  App.Forms = new Forms();
  App.Burger = new Burger();
  App.MapsCollection = new MapsCollection();
  App.TimerCollection = new TimersCollection();
  App.SocialsCollection  = new SocialsCollection();
  App.Captcha = new Captcha();
})
