const blessed = require('blessed');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const App = function (AppState) {
    let application = Object.create(eventEmitter);
    application.setPage = function setPage(val) {
        AppState.page = val;
    };
    application.init = function init(config) {

        const screen = blessed.screen({
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

    return application;
};

module.exports = App;
//# sourceMappingURL=app.js.map