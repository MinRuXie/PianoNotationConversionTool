import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import gulpWebpack from 'webpack-stream';

const paths = {
    styles: {
        src: 'src/assets/scss/style.scss',
        dest: 'dist/assets/css'
    },
    scrips: {
        src: [
            'src/assets/js/main.js',
            'src/assets/js/piano-note.js',
            'src/assets/js/language.js'
        ],
        dest: 'dist/assets/js'
    },
}

export const styles = (done) => {
    return gulp.src(paths.styles.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}

export const scripts = () => {
    return gulp.src(paths.scrips.src)
        .pipe(gulpWebpack({
            mode: 'production',
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(terser())
        .pipe(gulp.dest(paths.scrips.dest));
}

export const build = gulp.series(styles, scripts);