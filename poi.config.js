module.exports = {
    dist: '../dist',
    // extractCSS: false,
    devServer: {
        // proxy: "http://kiosk.hawkmountain.mojoactive.local/"
        proxy: "http://localhost:35021/"
    }
}