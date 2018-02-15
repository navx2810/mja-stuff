<template>
    <div>
        <h2 class="mb-4">Blurbs</h2>
        <div class="card card-body">
            <h4 class="mb-3">Add A Blurb</h4>
            <div class="row">
                <div class="col">
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
                <div class="col">
                </div>
            </div>
        </div>
        <div v-if="loading" class="mt-4 text-center"><h5>Loading. . .</h5></div>
        <div class="row mt-4">
            <div class="col-12" v-for="res in sorted" :key="res.id">
                <div class="card my-3">
                    <div class="card-body">
                        <p v-html="res.text"></p>
                    </div>
                    <div class="card-footer text-right">
                        <button @click="edit(res)" class="btn btn-outline-primary">Edit</button>
                        <button @click="vm.remove(res)" class="btn btn-outline-danger">Delete</button>
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

@Component({ name: "Blurbs" })
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
        await request.getBlurbs()
        this.loading = false
        // this.$refs.fileinput.reset();
    }

    edit(res) {
        // this.vm.image = null
        // this.$refs.fileinput.reset();
        this.vm.edit = res
    }
}
</script>
