<template>
    <div>
        <h2>Videos</h2>
        <div class="card card-body">
            <h4>Add A Video</h4>
            <div class="row">
                <div class="col">
                    <form @submit.prevent="submit()">
                        <div class="form-group">
                            <label>Video Name</label>
                            <input required type="text" v-model="vm.edit.title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Video URL</label>
                            <input required type="text" v-model.lazy="vm.edit.url" class="form-control">
                            <p class="mb-0"><small class="text-muted">You can put a link here in the format of http://www.youtube.com/watch?v=XX or http://www.youtube.com?w=XX.</small></p>
                            <p><small class="text-muted">It will automatically format to the appropriate embed link.</small></p>
                        </div>
                        <div class="form-group">
                            <label>Photo</label>
                            <b-form-file v-model="vm.image" ref="fileinput"></b-form-file>
                        </div>
                        <div class="form-group">
                            <ul v-if="errors.length" class="text-danger">
                                <li v-for="error in errors" :key="error">{{error}}</li>
                            </ul>
                        </div>
                        <div v-if="vm.edit.CbId === 0" class="form-group text-right">
                            <button type="button" @click="reset()" class="btn btn-outline-danger">Reset</button>
                            <button type="submit" class="btn btn-outline-success">Add</button>
                        </div>
                        <div v-if="vm.edit.CbId" class="form-group text-right">
                            <button type="button" @click="reset()" class="btn btn-outline-secondary">Cancel</button>
                            <button type="submit" class="btn btn-outline-success">Save</button>
                        </div>
                    </form>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        <div v-if="loading" class="mt-4 text-center"><h5>Loading. . .</h5></div>
        <div class="row mt-4">
            <div class="col-4" v-for="vid in sorted" :key="vid.id">
                <div class="card my-3">
                    <div class="card-body">
                        <img :src="vid.image" :alt="vid.title" class="img-fluid">
                    </div>
                    <div class="card-footer text-right">
                        <button @click="edit(vid)" class="btn btn-outline-primary">Edit</button>
                        <button @click="vm.remove(vid)" class="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import Component from "vue-class-component"
import request from "../request"
import data from "../data"

@Component({ name: "Videos" })
export default class extends Vue {

    loading = false
    errors = []

    get vm() { return data.videos }

    get sorted() { return data.videos.list.sort((a,b) => a.sort - b.sort) }

    async created() {
        this.loading = true
        await request.getVideos()
        this.loading = false
    }

    submit() {
        this.errors = []
        // todo: validate form input.
        if(!this.errors.length) {
            this.vm.add()
        }
    }

    async reset() {
        this.vm.reset()
        this.loading = true
        await request.getVideos()
        this.loading = false
        this.$refs.fileinput.reset();
    }

    edit(video) {
        this.vm.image = null
        this.$refs.fileinput.reset();
        this.vm.edit = video
    }
}
</script>
