module.exports = function (blessed, app) {

    // Create a box perfectly centered horizontally and vertically.
    const SplashScreen = blessed.text({
        top: 0,
        left: 10,
        width: '50%',
        height: 15,
        content: 'Welcome to {bold}Done{/bold}{blue-fg}JS{/blue-fg}! Click to continue.',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'black',
            bg: 'white',
            border: {
                fg: '#ffffff'
            }
        }
    });

    const icon = blessed.image({
        parent: SplashScreen,
        top: 0,
        height: 20,
        width: 50,
        file: 'donejs-logo-flag.png'
    });

    let configPage = 'configure';

    icon.on('click', function (data) {
        app.setPage(configPage);
    });

    SplashScreen.key(['enter', 'space'], function (ch, key) {
        app.setPage(configPage);
    });

    return SplashScreen;
};
//# sourceMappingURL=splashScreen.js.map