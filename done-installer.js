const AppState = require('./models/app_state');
const initRouter = require('./router/router');
const appBuilder = require('./model_actors/app');

const app = appBuilder(AppState);

const config = app.init({
  title: 'DoneJS Application Init',
  escapeQuit: true
});

initRouter({
    app,
    AppState,
    blessed: config.blessed
});

app.setPage('splash');
