const blessed = require('blessed');
const events = require('events');
const eventEmitter = new events.EventEmitter();
var clearScreen = require('../utils/clearScreen');

const App = function (AppState) {
    let application = Object.create(eventEmitter);
    let screen;

    /**
     * init - Initializes the application
     *
     * @param  {object} config A configuration object containing:
     *   title - String: The title of the terminal
     *   escapeQuit - Boolean: whether or not to allow a quit sequence to terminate the program
     * @return {blessed}        a blessed instance
     */
    application.init = function init(config) {

        screen = blessed.screen({
            title: config.title
        });

        // TODO: Refactor?
        application.screen = screen;

        // Allow the user to quit the application with either Esc, q, or Ctrl + c
        if (config.escapeQuit) {
            screen.key(['escape', 'q', 'C-c'], function (ch, key) {
                return process.exit(0);
            });
        }

        return {
            blessed
        };
    };

    /**
     * setPage - Updates the AppState's page property
     *
     * @param  {string} page The page value
     */
    application.setPage = function setPage(page) {
        AppState.page = page;
    };

    /**
     * clearScreen - Clears the scree
     *
     * @param  {blessed.Node} node The root node that comprises the page to be cleared
     */
    application.clear = function clear(node) {
        clearScreen(node, screen);
    };

    /**
     * render - Renders a page
     *
     * @param  {blessed.Node} page A root node that comprises a page
     */
    application.render = function render(page) {
        screen.append(page);
        screen.render();
    };

    return application;
};

module.exports = App;
//# sourceMappingURL=app.js.map