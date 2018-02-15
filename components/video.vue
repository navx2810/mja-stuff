<template>
    <div>
        <h2>Videos</h2>
        <div class="card card-body">
            <h4>Add A Video</h4>
            <div class="row">
                <div class="col">
                    <form @submit.prevent="vm.add()">
                        <div class="form-group">
                            <label>Video Name</label>
                            <input required type="text" v-model="vm.edit.title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Video URL</label>
                            <input required type="text" v-model="vm.edit.url" class="form-control">
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
                            <button type="button" @click="reset()" class="btn btn-outline-danger">Clear</button>
                            <button @click="vm.add()" type="submit" class="btn btn-outline-success">Add</button>
                        </div>
                        <div v-if="vm.edit.CbId" class="form-group text-right">
                            <button type="button" @click="reset()" v-if="vm.edit.CbId" class="btn btn-outline-secondary">Cancel</button>
                            <button @click="vm.add()" type="submit" class="btn btn-outline-success">Save</button>
                        </div>
                    </form>
                    
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4" v-for="vid in vm.list" :key="vid.id">
                <div class="card">
                    <div class="card-body">
                        <img :src="vid.image" :alt="vid.title" class="img-fluid">
                    </div>
                    <div class="card-footer text-right">
                        <button @click="edit(vid)" class="btn btn-outline-primary">Edit</button>
                        <button class="btn btn-outline-danger">Delete</button>
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

    async created() {
        this.loading = true
        await request.getVideos()
        this.loading = false
    }

    submit() {
        this.errors = []
        // todo: validate form input.
    }

    reset() {
        this.vm.reset()
        this.$refs.fileinput.reset();
    }

    edit(video) {
        this.vm.image = null
        this.$refs.fileinput.reset();
        this.vm.edit = video
    }
}
</script>
