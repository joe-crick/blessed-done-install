const {autorun} = require('mobx');
const splashScreenBuilder = require('../components/splash-screen/splashScreen');
const configureScreenBuilder = require('../components/configure-screen/configureScreen');
const loadingScreenBuilder = require('../components/loading-screen/loadingScreen');

module.exports = function(config) {
    const app = config.app;
    const AppState = config.AppState;
    const blessed = config.blessed;
    let currentPage;


    /**
     * onPageSet - An observer of AppState.page, this function runs when the application's
     * page changes
     *
     * @return {autorun}  Returns an object that allows you to unsubscribe the onPageSet observer     
     */
    const disposeRoutes = autorun(function onPageSet() {

        if (currentPage) {
            app.clear(currentPage);
            app.removeAllListeners('pageSet');
        }

        function setPage(builder) {
            let page = builder(blessed, app);
            page.focus();
            currentPage = page;
            app.render(page);
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

        app.emit('pageSet');
    });

    return disposeRoutes;
}
