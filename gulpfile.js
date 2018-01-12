'use strict';

const gulp          = require('gulp');
const sass          = require('gulp-sass');
const conctCss      = require('gulp-concat-css');
const concat        = require('gulp-concat');
const multipipe     = require('multipipe');
const debug         = require('gulp-debug');
const del           = require('del');
const newer         = require('gulp-newer');
const autoprefixer  = require('gulp-autoprefixer');
const remember      = require('gulp-remember');
const notify        = require('gulp-notify');
const pug           = require('gulp-pug');
const bs            = require('browser-sync').create();
const sourcemaps    = require('gulp-sourcemaps');

/*==== server ====*/
gulp.task('server', function() {
    // Serve files from the root of this project
    bs.init({
        server: "public/"
    });
    bs.watch('public/**').on('change', bs.reload);
});

/*=== sass ===*/
gulp.task('sass', function() {
    return multipipe(
        gulp.src('frontend/sass/main.sass', {since: gulp.lastRun('sass')}),
        sourcemaps.init(),
        autoprefixer(),
        remember('sass'),
        debug({title: 'sass'}),
        sass().on('error', sass.logError),
        concat('style.css'),
        debug({title: 'sass'}),
        sourcemaps.write('.'),
        gulp.dest('public/')
    ).on('error', notify.onError())

});

/*==== pug ====*/
gulp.task('pug', function(){
    return multipipe(
        gulp.src('frontend/pages/*.pug', {since: gulp.lastRun('pug')}),
        sourcemaps.init(),
        remember('pug'),
        pug({
            pretty: true
        }),
        debug({title: 'pug'}),
        sourcemaps.write('.'),
        gulp.dest('public/')
    ).on('error', notify.onError())
});
/*==== delete ====*/
gulp.task('del', function(){
    return del('public/');
});
/*==== assets ====*/
gulp.task('assets', function(){
    return multipipe(
        gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')}),
        newer('public'),
        //debug({title: 'assets'}),
        gulp.dest('public/')
    )
});
/*==== watch ====*/
gulp.task('watch', function(){
    gulp.watch('frontend/sass/**/*.*', gulp.series('sass'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
    gulp.watch('frontend/pages/**/*.*', gulp.series('pug'));
});

/*==== build ====*/
gulp.task('build', gulp.series('del', gulp.parallel('pug', 'sass', 'assets')));

/*==== DEV ====*/
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));
