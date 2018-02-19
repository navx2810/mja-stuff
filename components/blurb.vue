<template>
<div>
    <div class="flex between center mb-4">
        <h2>Blurbs</h2>
        <button @click="showModal" class="btn btn-outline-success">Add a Blurb</button>
    </div>
    <div v-if="loading" class="mt-4 text-center">
        <h5>Loading. . .</h5>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <draggable :options="{ handle: '.handle'}" v-model="sorted" @end="dropped">
                <div class="list-group-item" v-for="res in sorted" :key="res.id">
                    <p>
                        <i class="handle fas fa-bars"></i> {{res.text}}</p>
                    <div class="text-right">
                        <button @click="edit(res)" class="btn btn-outline-primary">Edit</button>
                        <button @click="vm.remove(res)" class="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </draggable>
        </div>
    </div>
    <b-modal centered ref="addModal" hide-footer title="Add a Blurb">
        <div class="row">
            <div class="col-12">
            </div>
            <div class="col-12">
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label>Text</label>
                        <textarea v-model="vm.edit.text" cols="30" rows="10" class="form-control"></textarea>
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

@Component({ name: "Blurbs", components: { draggable } })
export default class extends Vue {

    loading = false
    errors = []

    get vm() { return data.blurbs }

    get sorted() { return this.vm.list.sort((a,b) => a.sort - b.sort) }

    async created() {
        this.loading = true
        await request.getBlurbs()
        this.loading = false
    }

    showModal() {
        this.$refs.addModal.show()
    }
    hideModal() {
        this.$refs.addModal.hide()
    }

    submit() {
        this.errors = []
        // todo: validate form input.
        if(!this.errors.length) {
            this.vm.add()
            this.hideModal()
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
        await request.getBlurbs()
        this.loading = false
        // this.$refs.fileinput.reset();
    }

    edit(res) {
        // this.vm.image = null
        // this.$refs.fileinput.reset();
        this.vm.edit = res
        this.showModal()
    }
}
</script>
