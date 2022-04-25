import "./styles.pcss"
import Collection from "../../js/collection";


const socialHrefs = {
  'vk': 'https://vk.com/share.php?url=',
  'facebook': 'https://www.facebook.com/sharer/sharer.php?url=',
  'linkedin': 'https://www.linkedin.com/shareArticle?url=',
}

export class Social {
  constructor(instance) {
    this.instance = instance
    this.setLinks()
  }

  setLinks() {
    let linkElems = [...this.instance.querySelectorAll("a")]

    linkElems.map((item) => {
      let linkName = item.getAttribute("data-js-name");
      item.setAttribute("href", socialHrefs[linkName] + document.location.href)
    })
  }

}


export default class SocialsCollection extends Collection {
  static instance = "[data-js-social]";

  constructor() {
    super();
    this.init()
  }

  init() {
    document.querySelectorAll(SocialsCollection.instance).forEach(el => {
      this.collection = new Social(el)
    })
  }

}