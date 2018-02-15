module.exports = {
    dist: '../dist',
    // extractCSS: false,
    devServer: {
        proxy: "http://kiosk.hawkmountain.mojoactive.local/api"
    }
}