import "./style.pcss";
import Collection from "../../js/collection";
import {getJS} from "../../js/utils/getJS";
import {getConfig} from "../../js/utils/getConfig";

export class Map {
  constructor(instance) {
    this.instance = instance
    this.map = null
    this.clusterer = null
    this.cfg = getConfig(this.instance, MapsCollection.instance)
    this.bindEvents()

  }

  init() {
    this.map = new ymaps.Map(this.instance, this.cfg, {})
    this.clusterer = new ymaps.Clusterer()
    this.clusterer.add(this.getPoints())
    this.map.geoObjects.add(this.clusterer)


  }

  getPoints() {

    return this.cfg.points.map(({coords, icon}) =>  new ymaps.Placemark(coords, {
      hintContent: '<div class="hint"> <span class="hint__title">Хорошее место</span> <p>Россия, г. Южноуральск</p></div>',
      balloonContent: 'Точно хорошее!',
      },
      {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../icons/icon-point.svg',
        // Размеры метки.
        iconImageSize: [32, 37],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).

      }
    ))
  }

  bindEvents() {
    window.ymaps.ready(() => this.init())
  }
}

export default class MapsCollection extends Collection {
  static instance = "[data-js-map]";

  constructor() {
    super();
    this.load();
  }

  static urlAPI = "https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU";

  init() {
    document.querySelectorAll(MapsCollection.instance).forEach(el => {
      this.collection = new Map(el)
    })
  }

  load() {
    if (typeof window.ymaps === "function") {
      this.init();
    } else {
      getJS({src: MapsCollection.urlAPI}).then(res => this.init(), err => console.debug(err));
    }
  }
}