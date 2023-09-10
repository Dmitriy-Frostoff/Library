import gulp from 'gulp';
const { src, dest, series } = gulp;
import include from 'gulp-file-include';
import replace from 'gulp-replace';
import rename from 'gulp-rename';

export function html() {
  return src('./library/src/components/index_gulp_include.html')
    .pipe(include({
      prefix: '@@',
      indent: true,
    }))
    .pipe(replace(/="(\.\.\/){3}/gi, '="../'))
    .pipe(rename('index.html'))
    .pipe(dest('./library/src/components/'));
}