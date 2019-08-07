'use strict';

const { src, dest, series } = require('gulp');
const del = require('del');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const through2 = require('through2');

const args = require('minimist')(process.argv.slice(2));
const production = !!args.production;

function clean() {
    return del(["output"]);
}

function defaultTask()  {
    return src('src/*.js')
        // The gulp-uglify plugin won't update the filename
        // through2.obj() will return an empty stream if not production mode
        .pipe( production ? uglify() : through2.obj())
        // So use gulp-rename to change the extension
        // through2({ objectMode: true } will return an empty stream if not production mode
        .pipe(production ? rename({ extname: '.min.js' }) : through2({ objectMode: true }))
        .pipe(dest('output/'));
}

function manualCondition() {
    let stream = src('src/*.js');

    // manual condition \m/ kind of stream concat
    if (production) {
        stream = stream.pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
    }
    return stream
        .pipe(dest('output/'));
}

exports.clean = clean;
exports.manual = series(clean, manualCondition);
exports.default = series(clean, defaultTask);