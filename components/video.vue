<template>
<div>
    <div class="flex between center mb-4">
        <h2>Videos</h2>
        <button @click="showModal" class="btn btn-outline-success">Add a Video</button>
    </div>
    <div v-if="loading" class="mt-4 text-center">
        <h5>Loading. . .</h5>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <div class="list-group">
                <draggable :options="{ handle: '.handle'}" v-model="sorted" @end="dropped">
                    <div class="list-group-item" v-for="res in sorted" :key="res.id">
                        <h5>
                            <i class="handle fas fa-bars"></i> {{res.title}}</h5>
                        <div>
                            <img :src="res.image" :alt="res.title" class="img-fluid">
                        </div>
                        <div class="text-right">
                            <button @click="edit(res)" class="btn btn-outline-primary">Edit</button>
                            <button @click="vm.remove(res)" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </draggable>
            </div>
        </div>
    </div>
    <b-modal centered ref="addModal" hide-footer title="Add a Video">
        <div class="row">
            <div class="col-12">
            </div>
            <div class="col-12">
                <form @submit.prevent="submit()">
                    <div class="form-group">
                        <label>Video Name</label>
                        <input required type="text" v-model="vm.edit.title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Video URL</label>
                        <input required type="text" v-model.lazy="vm.edit.url" class="form-control">
                        <p class="mb-0">
                            <small class="text-muted">You can put a link here in the format of http://www.youtube.com/watch?v=XX or http://www.youtube.com?w=XX.</small>
                        </p>
                        <p>
                            <small class="text-muted">It will automatically format to the appropriate embed link.</small>
                        </p>
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
        </div>
    </b-modal>
</div>
</template>

<script>
import Vue from "vue"
import Component from "vue-class-component"
import request from "../request"
import data from "../data"

import draggable from "vuedraggable"

@Component({ name: "Videos", components: { draggable } })
export default class extends Vue {

    loading = false
    errors = []

    get vm() { return data.videos }

    get sorted() { return this.vm.list.sort((a,b) => a.sort - b.sort) }

    async created() {
        this.loading = true
        await request.getVideos()
        this.loading = false
    }

    showModal() {
        this.$refs.addModal.show()
    }
    hideModal() {
        this.$refs.addModal.hide()
    }

    async submit() {
        this.errors = []
        // todo: validate form input.
        if(!this.errors.length) {
            try {
                await this.vm.add()
                this.hideModal()
            }
            catch(e) {
                this.errors = this.errors.concat(e)
            }
        }
    }

    async dropped({ oldIndex, newIndex }) {
        const cur = this.sorted[oldIndex]
        const pos = this.sorted[newIndex]
        const newSort = pos.sort
        pos.sort = cur.sort
        cur.sort = newSort

        await Promise.all( request.put(pos), request.put(cur) )
    }

    async reset() {
        this.hideModal()
        this.vm.reset()
        this.loading = true
        await request.getVideos()
        this.loading = false
        this.$refs.fileinput.reset();
    }

    edit(res) {
        this.vm.image = null
        this.$refs.fileinput.reset();
        this.vm.edit = res
        this.showModal()
    }
}
</script>
