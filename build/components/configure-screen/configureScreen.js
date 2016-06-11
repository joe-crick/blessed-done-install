module.exports = function (blessed, app) {

    // Create a box perfectly centered horizontally and vertically.
    const ConfigScreen = blessed.form({
        top: 0,
        left: 10,
        width: '50%',
        content: 'Enter in your project\'s name',
        height: 15,
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

    const projectName = blessed.textbox({
        parent: ConfigScreen,
        height: 1,
        left: 2,
        top: 2,
        width: '80%',
        style: {
            bg: 'black',
            fg: 'white'
        },
        cursor: 'line'
    });

    const submitButton = blessed.button({
        parent: ConfigScreen,
        content: 'Submit',
        height: 1,
        width: 6,
        top: 10,
        left: 25,
        style: {
            bg: 'blue',
            fg: 'white'
        }
    });

    app.on('pageSet', function () {
        projectName.focus();
    });

    submitButton.on('click', function (data) {
        app.setPage('loadingScreen');
    });

    return ConfigScreen;
};
//# sourceMappingURL=configureScreen.js.map