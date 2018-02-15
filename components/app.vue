<template>
    <div>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <div class="container">
            <div class="flex middle between">
                <h1>Edit Videos</h1>
                <button class="btn btn-outline-secondary">Back</button>
            </div>
            <hr>
            <h2>Add A Video</h2>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Video Name</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Video URL</label>
                        <input type="text" class="form-control">
                    </div>
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
                    <p>image preview</p>
                </div>
            </div>
            <hr>
            <div class="row">
                
            </div>
        </div>
    </div>
</template>

<style lang="stylus">

label
    font-weight 600

.flex
    display flex
    flex-wrap wrap
    &.middle
        align-items center
    &.between
        justify-content space-between

.upload-area
    border 1px dashed black
    text-align center
    width 100%

</style>


<script>
export default {
    data: () => ({
        file: []
    }),
    methods: {
        upload(e) {
            e.preventDefault()
            debugger
        }
    }
}
</script>
