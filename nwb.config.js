module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'EsriLoaderReact',
      externals: {
        'esri-loader': 'EsriLoader',
        'prop-types': 'PropTypes',
        react: 'React'
      }
    }
  },
  webpack: {
    html: {
      template: 'demo/src/index.html'
    }
  }
}
