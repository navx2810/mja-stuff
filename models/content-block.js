import { v4 } from "uuid"

export default class {
    CbId = 0
    CId = null
    CbSortOrder = 0
    CbHeadline = null
    CbCopy = null
    CbPhoto = null
    CbPhotoCaption = null
    CbPhotoAltText = null
    CbPhotoAlign = null
    CbPhotoMetadata = null
    CbLink = null
    CbLinkText = null
    CbLinkTarget = null
    CbFile = null
    CbFileText = null
    CbMetaData = null

    get id() { return this.CbId ? this.CbId : v4() }
}