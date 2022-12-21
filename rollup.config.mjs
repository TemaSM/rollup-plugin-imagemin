import { createRequire } from 'module'
import babel from '@rollup/plugin-babel'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const external = [
  'node:path',
  'node:fs',
  'node:util',
  'node:crypto',
  ...Object.keys(pkg.dependencies),
]

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    external,
  },
  {
    input: 'src/index.js',
    plugins: [
      babel({ babelHelpers: 'bundled' }),
    ],
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    external,
  },
]
