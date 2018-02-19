import contentBlock from "./content-block";

export default class extends contentBlock {
    constructor(content = null) {
        super()
        this.CId = 1570

        this.CbId = content ? content.CbId : 0
        this.CbCopy = content ? content.CbCopy : null
        this.CbSortOrder = content ? content.CbSortOrder : 0
    }

    get text() { return this.CbCopy }
    set text(v) { this.CbCopy = v }

    get sort() { return this.CbSortOrder }
    set sort(v) { this.CbSortOrder = v }
}