module.exports = {
    dist: '../dist',
    // extractCSS: false,
    devServer: {
        proxy: "http://kiosk.hawkmountain.client.mojoactive.com/api"
    }
}