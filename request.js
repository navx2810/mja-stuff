import http from "axios"
import data from "./data"

import fake from "./fake.json"
import video from "./models/video";
import blurb from "./models/blurb";
import ad from "./models/ad";

const VIDEOS_CID = 1569 
const BLURBS_CID = 1570
const ADS_CID = 1572

// http.defaults.baseURL = "/api/contentblock"

export default new class {

    async getVideos() {
        // const res = await http.get(`/${VIDEOS_CID}`)
        const res = { data: fake.videos }
        return data.videos.list = res.data.map(it => new video(it))
    }

    async getBlurbs() {
        // const res = await http.get(`/${BLURBS_CID}`)
        const res = { data: fake.blurbs }
        return data.blurbs.list = res.data.map(it => new blurb(it))
    }

    async getAds() {
        // const res = await http.get(`/${ADS_CID}`)
        const res = { data: fake.ads }
        return data.ads.list = res.data.map(it => new ad(it))
    }
    
    async uploadImage(image, name, folder) {
        const fd = new FormData()
        fd.append('file', image, name)
        const res = await http.post(`/api/image/${folder}`, fd)
        debugger
        return res
    }
    

}