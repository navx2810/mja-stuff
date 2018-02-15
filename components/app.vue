<template>
    <div>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous">
        <div class="container">
            <div class="flex middle between">
                <h1>Edit Content</h1>
                <button class="btn btn-outline-secondary">Back</button>
            </div>
            <hr>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <router-link to="/videos"><a class="nav-link">Videos</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blurbs"><a class="nav-link active">Blurbs</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/ads"><a class="nav-link">Ads</a></router-link>
                </li>
            </ul>
            <hr>
            <router-view></router-view>
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
        }
    }
}
</script>
