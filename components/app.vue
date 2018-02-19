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
                    <router-link tag="span" to="/videos"><a class="nav-link">Videos</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="span" to="/blurbs"><a class="nav-link">Blurbs</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="span" to="/ads"><a class="nav-link">Ads</a></router-link>
                </li>
            </ul>
            <hr>
            <transition name="fade" mode="out-in">
                <router-view class="child-view"></router-view>
            </transition>
        </div>
    </div>
</template>

<style lang="stylus">

$time = 213ms

.fade-enter-active, .fade-leave-active
    transition: opacity $time ease

.fade-enter, .fade-leave-active
    opacity 0

.child-view
    transition all $time cubic-bezier(.55,0,.1,1)

.slide-left-enter, .slide-right-leave-active
    opacity 0
    -webkit-transform translate(30px, 0)
    transform translate(30px, 0)

.slide-left-leave-active, .slide-right-enter
    opacity 0
    -webkit-transform translate(-30px, 0)
    transform translate(-30px, 0)

.slide-enter-active, .slide-leave-active
    transition: transform $time ease-in-out

.slide-enter, .slide-leave-active
    transform translateY(-50px)


.router-link-active
    a
        border-bottom 2px solid @primary

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
    
}
</script>
