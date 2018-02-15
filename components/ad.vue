<template>
    <div>
        <h2>Ads</h2>
        <div class="card card-body">
            <h4>Add An Ad</h4>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Photo</label>
                        <b-form-file v-model="file"></b-form-file>
                    </div>
                    <div class="form-group text-right">
                        <button class="btn btn-outline-danger">Clear</button>
                        <button class="btn btn-outline-success">Add</button>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        <div class="row">

        </div>
    </div>
</template>

<script>
import Vue from "vue"
import Component from "vue-class-component"
import request from "../request"

@Component({ name: "Ads" })
export default class extends Vue {

    loading = false

    async created() {
        this.loading = true
        await request.getAds()
        this.loading = false
    }
}
</script>