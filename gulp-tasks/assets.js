'use strict';

module.exports = (gulp, $) => {
	return () => {
		return $.merge2(
			gulp.src('src/app/views/**/*.html')
				.pipe($.if($.env.isProd, $.htmlmin({collapseWhitespace: true})))
				.pipe(gulp.dest('build/html/views/')),

			gulp.src('src/app/controllers/**/*.js')
				.pipe($.if($.env.isProd, $.stripComments()))
				.pipe($.babel())
				.pipe(gulp.dest('build/js/controllers/')),

			gulp.src('src/app/directives/**/*.js')
				.pipe($.if($.env.isProd, $.stripComments()))
				.pipe($.angularEmbedTemplates())
				.pipe($.flatten())
				.pipe($.babel())
				.pipe(gulp.dest('build/js/directives/')),

			gulp.src('src/app/factories/**/*.js')
				.pipe($.if($.env.isProd, $.stripComments()))
				.pipe($.babel())
				.pipe(gulp.dest('build/js/factories')),

			gulp.src('src/app/filters/**/*.js')
				.pipe($.if($.env.isProd, $.stripComments()))
				.pipe($.babel())
				.pipe(gulp.dest('build/js/filters')),

			gulp.src('src/app/mock/**/*.js')
				.pipe($.if($.env.isProd, $.stripComments()))
				.pipe($.if($.env.isDev, $.babel()))
				.pipe($.if($.env.isDev, gulp.dest('build/js/mocks'))),

			gulp.src('src/app/app.js')
				.pipe($.if($.env.isProd, $.stripComments()))
				.pipe($.babel())
				.pipe(gulp.dest('build/js/')),

			gulp.src('src/img/**/*')
				.pipe($.if($.env.isProd,$.imagemin({
					progressive: true,
					svgo$: [{removeViewBox: false}],
					use: [$.pngquant()]
				})))
				.pipe(gulp.dest('build/img')),

			gulp.src('src/others/**/*')
				.pipe(gulp.dest('build/others')),

			gulp.src('.htaccess')
				.pipe(gulp.dest('build')),

			gulp.src('src/favicon.ico')
				.pipe(gulp.dest('build')),

			gulp.src('src/app/languages/*')
				.pipe(gulp.dest('build/languages/')),

			gulp.src('node_modules/font-awesome/fonts/**/*')
				.pipe(gulp.dest('build/fonts')),

			gulp.src('node_modules/bootstrap/dist/fonts/**/*')
				.pipe(gulp.dest('build/fonts')),

			gulp.src('node_modules/bootstrap/dist/img/**/*')
				.pipe(gulp.dest('build/libs/node_modules/bootstrap/dist/img'))
		)
		.pipe($.size({title: 'copy all assets'}))
		.pipe($.connect.reload());
	}
}
