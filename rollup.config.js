import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import less from 'rollup-plugin-less';

import pkg from './package.json'

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    external: [
        'react',
        'react-dom',
        'prop-types'
    ],
    plugins: [
        less({
            output: 'dist/style.css'
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs()
    ]
}
