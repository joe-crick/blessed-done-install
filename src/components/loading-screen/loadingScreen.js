const contrib = require('blessed-contrib');

module.exports = function(blessed, app) {

    let percent = 5;

    var donut = contrib.donut({
        radius: 8,
        arcWidth: 3,
        remainColor: 'black',
        yPadding: 2,
        data: [{
            percent,
            label: 'loading progress',
            color: 'green'
        }]
    });


    /**
     * loadingScreenOnPageLoad - Runs after the loading screen has loaded     
     */
    app.on('pageSet', function loadingScreenOnPageLoad() {
        var updateDonut = function() {
            percent = percent * 2;
            if (percent < 100) {
                donut.setData([{
                    percent,
                    label: 'loading progress',
                    color: 'green'
                }]);
                setTimeout(updateDonut, 500);
            } else {
              donut.setData([{
                  percent: 100,
                  label: 'complete!',
                  color: 'green'
              }]);
              // app.setPage('Completed');
            }
            app.screen.render();
        }
        updateDonut();
    });

    return donut;
}
