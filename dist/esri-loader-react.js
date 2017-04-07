(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('esri-loader')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'esri-loader'], factory) :
	(factory((global.esriLoaderReact = global.esriLoaderReact || {}),global.React,global.esriLoader));
}(this, (function (exports,React,esriLoader) { 'use strict';

React = 'default' in React ? React['default'] : React;

class EsriLoader extends React.PureComponent {

  componentDidMount () {

    if (!esriLoader.isLoaded()) {
      
      esriLoader.bootstrap((error) => {
        
        if (this.props.ready) {
          this.props.ready(error);
        }
      }, this.props.options);
    }
    else {
      
      if (this.props.ready) {
        this.props.ready();
      }
    }
  }

  render () {
    return null;
  }
}

EsriLoader.propTypes = {
  options: React.PropTypes.object,
  ready: React.PropTypes.func
};

exports['default'] = EsriLoader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=esri-loader-react.js.map
