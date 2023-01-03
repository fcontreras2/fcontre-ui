// rollup.config.js
import scss from 'rollup-plugin-scss'

export default {
  input: './src/styles/components/_index.scss',
  output: {
    file: 'dist/styles/components/_index.scss',
    format: 'es',
    // Removes the hash from the asset filename
    assetFileNames: '[name][extname]'
  },
  plugins: [
    scss() // will output compiled styles to output.css
  ]
}