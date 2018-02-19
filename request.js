import http from "axios"
import data from "./data"

import fake from "./fake.json"
import video from "./models/video";
import blurb from "./models/blurb";
import ad from "./models/ad";

const VIDEOS_CID = 1569 
const BLURBS_CID = 1570
const ADS_CID = 1572

http.defaults.baseURL = "/api"

export default new class {

    async getVideos() {
        data.videos.list = []
        const res = await http.get(`/contentblock?iCId=${VIDEOS_CID}`)
        // const res = { data: fake.videos }
        return data.videos.list = res.data.map(it => new video(it))
    }

    async getBlurbs() {
        data.blurbs.list = []
        const res = await http.get(`/contentblock?iCId=${BLURBS_CID}`)
        // const res = { data: fake.blurbs }
        return data.blurbs.list = res.data.map(it => new blurb(it))
    }

    async getAds() {
        data.ads.list = []
        const res = await http.get(`/contentblock?iCId=${ADS_CID}`)
        // const res = { data: fake.ads }
        return data.ads.list = res.data.map(it => new ad(it))
    }
    
    async uploadImage(image, name, folder) {
        const fd = new FormData()
        fd.append('file', image, name ? name : image.name)
        const res = await http.post(`/file`, fd)
        return res.data
    }

    async post(cb) {
        const res = await http.post('/contentblock', cb)
        return res.data
    }

    async put(cb) {
        const res = await http.put(`/contentblock/${cb.CbId}`, cb)
        return res.data
    }

    async delete({CbId}) {
        const res = await http.delete(`/contentblock/${CbId}`)
    }
    

}