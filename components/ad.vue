<template>
    <div>
        <h2 class="mb-4">Ads</h2>
        <div class="card card-body">
            <h4 class="mb-3">Add An Ad</h4>
            <div class="row">
                <div class="col">
                    <form @submit.prevent="submit">
                        <div class="form-group">
                            <label>Photo</label>
                            <b-form-file v-model="vm.image"></b-form-file>
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
            <div class="col-6" v-for="res in sorted" :key="res.id">
                <div class="card my-3">
                    <div class="card-body">
                        <img :src="res.image" class="img-fluid">
                    </div>
                    <div class="card-footer text-right">
                        <!-- <button @click="edit(res)" class="btn btn-outline-primary">Edit</button> -->
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

@Component({ name: "Ads" })
export default class extends Vue {

    loading = false
    errors = []

    get vm() { return data.ads }

    get sorted() { return this.vm.list.sort((a,b) => a.sort - b.sort) }

    async created() {
        this.loading = true
        await request.getAds()
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
        await request.getAds()
        this.loading = false
        this.$refs.fileinput.reset();
    }

    edit(res) {
        this.vm.image = null
        this.$refs.fileinput.reset();
        this.vm.edit = res
    }
}
</script>
