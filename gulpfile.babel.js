import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';

const paths = {
    styles: {
        src: 'src/assets/scss/style.scss',
        dest: 'dist/assets/css'
    },
    scrips: {
        src: [
            'src/assets/js/main.js',
            'src/assets/js/piano-note.js',
        ],
        dest: 'dist/assets/js'
    },
}

export const styles = (done) => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.styles.dest));
}

export const scripts = () => {
    return gulp.src(paths.scrips.src)
        .pipe(terser())
        .pipe(gulp.dest(paths.scrips.dest));
}

export const build = gulp.series(styles, scripts);