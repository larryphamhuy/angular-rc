var gulp = require('gulp');

var assetsDev = 'assets/';
var assetsProd = 'src/';

var appDev = 'dev/';
var appProd = 'app/';

// Compass
var compass = require('gulp-compass');

gulp.task('compass', function() {
    gulp.src('./*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'src/css',
            sass: 'assets/scss'
        }))
        .pipe(gulp.dest('assets/temp'));
});
/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
//var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('autoprefixer');
//var precss = require('precss');
//var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

/*gulp.task('build-css', function () {
    return gulp.src(assetsDev + 'scss/!*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});*/

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-img', function () {
    return gulp.src(assetsDev + 'images/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'images/'));
});

gulp.task('build-html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

gulp.task('build-font', function () {
    return gulp.src(assetsDev + 'fonts/**/*')
        .pipe(gulp.dest(assetsProd + 'fonts/'));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    //gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'images/*', ['build-img']);
    gulp.watch(assetsDev + 'fonts/*', ['build-font']);
    gulp.watch(appDev + '**/*.html', ['build-html']);
});

gulp.task('default', ['watch', 'build-ts', 'build-html', 'build-img', 'build-font']);