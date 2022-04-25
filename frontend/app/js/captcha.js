import {getJS} from "./utils/getJS";

export default class Captcha {
  constructor() {
    this.load()
  }

  static urlAPI = "https://www.google.com/recaptcha/api.js";

  init() {

  }

  load() {
    getJS({src: Captcha.urlAPI, defer: true}).then(res => this.init(), err => console.debug(err));
  }
}
