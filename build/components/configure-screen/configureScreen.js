module.exports = function (blessed, app) {

    const INPUT_LABEL = "project name:";

    var ConfigScreen = blessed.box({
        top: 'center',
        left: 'center',
        width: '70%',
        height: '50%',
        content: 'Project Configuration',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'white',
            bg: 'white',
            border: {
                fg: '#f0f0f0'
            }
        }
    });

    const form = blessed.form({
        parent: ConfigScreen,
        width: '95%',
        height: 4,
        top: 3,
        keys: true,
        border: {
            type: 'line'
        }
    });
    blessed.text({
        parent: form,
        fg: 'cyan',
        content: INPUT_LABEL
    });
    const projectName = blessed.textbox({
        parent: form,
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
        parent: form,
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