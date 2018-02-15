import contentBlock from "./content-block";

export default class extends contentBlock {
    constructor(content = null) {
        super()
        this.CId = 1572

        this.CbId = content ? content.CbId : 0
        this.CbPhoto = content ? content.CbPhoto : null
        this.CbSortOrder = content ? content.CbSortOrder : 0
    }

    get image() { return this.CbPhoto }
    set image(v) { this.CbPhoto = v }

    get sort() { return this.CbSortOrder }
    set sort(v) { this.CbSortOrder = v }
}