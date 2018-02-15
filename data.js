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
            // const [image] = await request.uploadImage(this.image, this.edit.title, "videos")
            if(this.edit.CbId) {
                const res = await request.put(this.edit)
            } else {
                const [last] = this.list.sort((a,b) => b.sort - a.sort)
                this.edit.sort = last.sort+1
                const res = await request.post(this.edit)
                this.list.push(new video(res))
            }
            this.reset()
        },
        async remove(res) {
            if(confirm(`Are you sure you want to delete this content?`)) {
                await request.delete(res)
                this.list.splice(this.list.indexOf(res))
            }
        },
        reset() { this.edit = new video(); this.image = null }
    }

    blurbs = {
        list: [],
        edit: new blurb(),
        async add() {
            // const [image] = await request.uploadImage(this.image, this.edit.title, "blurbs")
            if(this.edit.CbId) {
                const res = await request.put(this.edit)
            } else {
                // const [last] = this.list.sort((a,b) => b.sort - a.sort)
                // this.edit.sort = last.sort+1
                const res = await request.post(this.edit)
                this.list.push(new blurb(res))
            }
            this.reset()
        },
        async remove(res) {
            if(confirm(`Are you sure you want to delete this content?`)) {
                await request.delete(res)
                this.list.splice(this.list.indexOf(res))
            }
        },
        reset() { this.edit = new blurb(); }
    }

    ads = {
        list: [],
        edit: new ad(),
        image: null,
        async add() {
            // const [image] = await request.uploadImage(this.image, this.edit.title, "ads")
            if(this.edit.CbId) {
                const res = await request.put(this.edit)
            } else {
                const [last] = this.list.sort((a,b) => b.sort - a.sort)
                this.edit.sort = last.sort+1
                const res = await request.post(this.edit)
                this.list.push(new ad(res))
            }
            this.reset()
        },
        async remove(res) {
            if(confirm(`Are you sure you want to delete this content?`)) {
                await request.delete(res)
                this.list.splice(this.list.indexOf(res))
            }
        },
        reset() { this.edit = new ad(); this.image = null }
    }



    // blurbs = {
    //     list: [],
    //     edit: new blurb(),
    //     async add() {
    //         // todo: check this.edit.cbId, if it's 0,
    //             // todo: make the request to add it.
    //             // todo: get the data back and convert it to a blurb object
    //             // todo: add it to this.list
    //         // todo: otherwise, update the object
    //     },
    //     async remove() {
    //         // todo: make the request to remove it.
    //         // todo: check if successful
    //         // todo: if so, slice the blurb from the list
    //         // todo: if not, post the error.
    //     },
    //     reset() { this.edit = new blurb() }
    // }

    // ads = {
    //     list: [],
    //     edit: new ad(),
    //     image: null,
    //     async add() {
    //         // todo: check this.edit.cbId, if it's 0,
    //             // todo: make the request to add it.
    //             // todo: get the data back and convert it to a ad object
    //             // todo: add it to this.list
    //         // todo: otherwise, update the object
    //     },
    //     async remove() {
    //         // todo: make the request to remove it.
    //         // todo: check if successful
    //         // todo: if so, slice the ad from the list
    //         // todo: if not, post the error.
    //     },
    //     reset() { this.edit = new ad(); this.image = null }
    // }

}