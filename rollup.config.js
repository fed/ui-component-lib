import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['react'],
    output: [
      { file: pkg.main, format: 'cjs' }
      // { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve(),
      url({
        limit: 2 * 1024, // inline files < 10k, copy files > 10k
        publicPath: '/node_modules/isos-dashboard-ui/lib/'
      }),
      sass({
        output: 'lib/index.css',
        processor: css =>
          postcss([autoprefixer, cssnano])
            .process(css)
            .then(result => result.css)
      }),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      })
    ]
  }
];
