'use strict';

const GulpClient = require("gulp");

GulpClient.task('build', function (cb) {
    GulpClient.src([
        './node_modules/normalize.css/normalize.css',
        './node_modules/purecss/build/pure-min.css',
        './node_modules/purecss/build/grids-responsive-min.css',
        // './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/clipboard/dist/clipboard.min.js',
        './node_modules/toastr/build/toastr.min.js',
        './node_modules/toastr/build/toastr.min.css',
    ])
        .pipe(GulpClient.dest('./source/js/lib'));
    cb();
});