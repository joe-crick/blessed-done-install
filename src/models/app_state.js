const {observable} = require('mobx');

const AppState = observable({
    page: ''
});

module.exports = AppState;
