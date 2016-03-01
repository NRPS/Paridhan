require.config({
    paths: {
        'angular': 'bower/angular/angular.min',
        'angularAMD': 'bower/angularAMD/angularAMD.min',
        'jquery': 'bower/jquery/dist/jquery.min',
        'bootstrap':'bower/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angularAMD': {
            deps:['angular']
        },
        'jquery': {

        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});
define(['angularAMD', 'jquery', 'bootstrap', function (angularAMD, jquery, bootstrap) {

}])
