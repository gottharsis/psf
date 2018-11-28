'use strict';
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");

gulp.task("sass", () => {
    return gulp.src("./sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("./css"));
})

gulp.task("js", () => {
    return gulp.src("js/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("source.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
})

gulp.task("watch", () => {
    gulp.watch("sass/*.scss", ["sass"]);
    gulp.watch("js/*.js", ["js"]);
})

