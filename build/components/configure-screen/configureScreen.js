module.exports = function (blessed, app) {

    const INPUT_LABEL = "project name:";

    const ConfigScreen = blessed.form({
        width: 60,
        height: 4,
        keys: true
    });
    blessed.text({
        parent: ConfigScreen,
        fg: 'cyan',
        content: INPUT_LABEL
    });
    const projectName = blessed.textbox({
        parent: ConfigScreen,
        name: 'program',
        inputOnFocus: true,
        left: INPUT_LABEL.length + 1,
        cursor: {
            artificial: true,
            shape: 'line',
            blink: true,
            color: 'blue'
        }
    });

    const submitButton = blessed.button({
        parent: ConfigScreen,
        content: 'Submit',
        height: 1,
        width: 7,
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