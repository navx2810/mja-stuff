import video from "./models/video";
import blurb from "./models/blurb";
import ad from "./models/ad";
import request from "./request";

export default new class {

    videos = {
        list: [],
        edit: new video(),
        image: null,
        async add() {
            const res = await request.uploadImage(this.image, this.edit.title, "videos")
            debugger
            // todo: check this.edit.cbId, if it's 0,
                // todo: make the request to add it.
                // todo: get the data back and convert it to a video object
                // todo: add it to this.list
            // todo: otherwise, update the object
        },
        async remove() {
            // todo: make the request to remove it.
            // todo: check if successful
            // todo: if so, slice the video from the list
            // todo: if not, post the error.
        },
        reset() { this.edit = new video(); this.image = null }
    }

    blurbs = {
        list: [],
        edit: new blurb(),
        async add() {
            // todo: check this.edit.cbId, if it's 0,
                // todo: make the request to add it.
                // todo: get the data back and convert it to a blurb object
                // todo: add it to this.list
            // todo: otherwise, update the object
        },
        async remove() {
            // todo: make the request to remove it.
            // todo: check if successful
            // todo: if so, slice the blurb from the list
            // todo: if not, post the error.
        },
        reset() { this.edit = new blurb() }
    }

    ads = {
        list: [],
        edit: new ad(),
        image: null,
        async add() {
            // todo: check this.edit.cbId, if it's 0,
                // todo: make the request to add it.
                // todo: get the data back and convert it to a ad object
                // todo: add it to this.list
            // todo: otherwise, update the object
        },
        async remove() {
            // todo: make the request to remove it.
            // todo: check if successful
            // todo: if so, slice the ad from the list
            // todo: if not, post the error.
        },
        reset() { this.edit = new ad(); this.image = null }
    }

}