export default {
  entry: 'src/EsriLoaderContainer.js',
  format: 'umd',
  dest: 'dist/esri-loader-react.js',
  moduleName: 'esriLoaderReact',
  exports: 'named',
  external: [ 'react', 'esri-loader' ],
  sourceMap: true,
  globals: {
    react: 'React',
    'esri-loader': 'esriLoader'
  }
};