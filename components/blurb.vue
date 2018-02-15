<template>
    <div>
        <h2>Blurbs</h2>
        <div class="card card-body">
            <h4>Add A Blurb</h4>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Text</label>
                        <textarea cols="30" rows="10" class="form-control"></textarea>
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

@Component({ name: "Blurbs" })
export default class extends Vue {

    loading = false

    async created() {
        this.loading = true
        await request.getBlurbs()
        this.loading = false
    }
}
</script>