import contentBlock from "./content-block";

export default class extends contentBlock {
    constructor(content = null) {
        super()
        this.CId = 1569

        this.CbId = content ? content.CbId : 0
        this.CbHeadline = content ? content.CbHeadline : null
        this.CbLink = content ? content.CbLink : null
        this.CbPhoto = content ? content.CbPhoto : null
        this.CbSortOrder = content ? content.CbSortOrder : 0
    }

    get title() {
        return this.CbHeadline
    }
    set title(v) {
        this.CbHeadline = v
    }

    get url() {
        return this.CbLink
    }
    set url(v) {
        if (/[wv]=(.*)$/gi.test(v)) {
            const [match, id] = /[wv]=(.*)$/gi.exec(v)
            this.CbLink = "https://www.youtube.com/embed/" + id
        } else {
            this.CbLink = v
        }
    }

    get image() {
        return this.CbPhoto
    }
    set image(v) {
        this.CbPhoto = v
    }

    get sort() {
        return this.CbSortOrder
    }
    set sort(v) {
        this.CbSortOrder = v
    }
}