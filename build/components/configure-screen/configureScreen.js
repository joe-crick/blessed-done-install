module.exports = function (blessed, app) {

    const TITLE_PROG = "program:";

    const ConfigScreen = blessed.form({
        width: 60,
        height: 4,
        keys: true
    });
    blessed.text({
        parent: ConfigScreen,
        fg: 'cyan',
        content: TITLE_PROG
    });
    const projectName = blessed.textbox({
        parent: ConfigScreen,
        name: 'program',
        inputOnFocus: true,
        left: TITLE_PROG.length + 1
    });

    const submitButton = blessed.button({
        parent: ConfigScreen,
        content: 'Submit',
        height: 2,
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