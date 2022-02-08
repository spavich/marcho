
const { src, dest, watch, parallel, series } = require('gulp');
// SCSS/SASS
const scss = require('gulp-sass')(require('sass'));
// Concat (сжымает файлы)
const concat = require('gulp-concat');
// Autoprefixer (пример: -ms-grid)
const autoprefixer = require('gulp-autoprefixer');
// Compressed для JS
const uglify = require('gulp-uglify');
// Сжатия картинок
const imagemin = require('gulp-imagemin');
// Удаления не повторяющихся папок перекинутых в dist
const del = require('del');
// Плагин, который позволяет обновлять страницу
const browserSync = require('browser-sync').create();


function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notofy: false
	})
}

// SCSS
function styles() {
	return src('app/scss/style.scss')
		// Compressed SCSS
		.pipe(scss({outputStyle: 'compressed'}))
		// Сжымания файла (благодаря scss{'compressed'})
		.pipe(concat('style.min.css'))
		// Autoprefier
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions'],
			grid: true,
		}))
		// Путь
		.pipe(dest('app/css'))
		// browserSync
		.pipe(browserSync.stream())
}
// JS
function scripts() {
	return src([
		// jQuery
		'node_modules/jquery/dist/jquery.js',
		// Slick
		'node_modules/slick-carousel/slick/slick.js',
		// JS
		'app/js/main.js'
	])
	// Concat
	.pipe(concat('main.min.js'))
	// Uglify
	.pipe(uglify())
	// Путь
	.pipe(dest('app/js'))
	// browserSync
	.pipe(browserSync.stream())	
}
// images
// Сжатия картинок
function images(){
	return src('app/img/**/*.*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(dest('dist/img'))
}

// Перекидывать нужные файлы в нужную папку
function build() {
	return src([
		'app/**/*.html',
		'app/css/style.min.css',
		'app/js/main.min.js'
	], {base: 'app'})
	.pipe(dest('dist'))
}
// Удаления не повторяющихся папок перекинутых в dist
function cleanDist() {
	return del('dist')
}

// Автоматический перезапуск файла SCSS (gulp styles)
function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
	watch(['app/**/*.html']).on('change', browserSync.reload)
}


exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;



// series - чтобы поочереди запускались
exports.build = series(cleanDist, images, build);
// parallel - чтобы паралельно запускались
exports.default = parallel(styles, scripts, browsersync, watching);