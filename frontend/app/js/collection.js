export default class Collection {
    constructor() {
        this._collection = [];
    }

    set collection(newCollectionItem) {
        const instanceCollection = this.getByDOMelement(newCollectionItem);
        if (!instanceCollection) {
            this._collection = [...this._collection, newCollectionItem]
        }
    }

    get collection() {
        return this._collection;
    }

    getByDOMelement(DOMElement) {
        return this.collection.find(item => item.instance === DOMElement);
    }

}