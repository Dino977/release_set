const { series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

function compile() {
  return src("./src/*.scss")
    .pipe(sass.sync()) // 转化为CSS
    .pipe(
      autoprefixer({
        browsers: ["ie > 9", "last 2 versions"],
        cascade: false,
      }) // 补全前缀
    )
    .pipe(cssmin()) // 压缩
    .pipe(dest("./lib")); // 于当前文件夹下的lib文件夹输入最终文件
}

exports.build = series(compile);
