const {autorun} = require('mobx');
const splashScreenBuilder = require('../components/splash-screen/splashScreen');
const configureScreenBuilder = require('../components/configure-screen/configureScreen');
const loadingScreenBuilder = require('../components/loading-screen/loadingScreen');

var clearScreen = require('../utils/clearScreen');

module.exports = function(config) {
    const app = config.app;
    const AppState = config.AppState;
    const blessed = config.blessed;
    const screen = app.screen;
    let currentPage;

    const disposeRoutes = autorun(function onPageSet() {

        if (currentPage) {
            clearScreen(currentPage, screen);
            app.removeAllListeners('pageSet');
        }

        function setPage(builder) {
            let page = builder(blessed, app);
            page.focus();
            currentPage = page;
            screen.append(page);
        }

        switch (AppState.page) {
            case 'splash':
                setPage(splashScreenBuilder);
                break;
            case 'configure':
                setPage(configureScreenBuilder);
                break;
            case 'loadingScreen':
                setPage(loadingScreenBuilder);
                break;
            case '':
                break;
            default:
                console.log('Error-Invalid page type');
                break;
        }

        screen.render();
        app.emit('pageSet');
    });

    return disposeRoutes;
}
