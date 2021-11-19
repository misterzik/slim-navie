const autoprefixer = require('autoprefixer');
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
const input = 'src/index.js'
var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]
var config = []
MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'reactRouterDom'
      },
      name: "slim-navie",
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "auto"
    },
    external: [
      "react", 
      "react-router-dom", 
      "react-bootstrap",
      /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      // sourcemaps(),
      terser(),
      scss({
        processor: () => postcss([autoprefixer()]),
        outputStyle: 'compressed'
      })
    ]
  }
  config.push(conf)
})

export default [
  ...config,
]