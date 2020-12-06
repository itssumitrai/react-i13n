import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {
  terser
} from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom'],
  output: [
    {
      entryFileNames: 'index.js',
      dir: 'dist',
      format: 'cjs'
    },
    {
      entryFileNames: 'index.es.js',
      dir: 'dist-es',
      format: 'es'
    }
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**']
    }),
    resolve(),
    terser(),
    commonjs()
  ]
};
