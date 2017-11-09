import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { bootstrap, isLoaded } from 'esri-loader';

class EsriLoader extends PureComponent {

  componentDidMount () {

    if (!isLoaded()) {
      
      bootstrap((error, dojoRequire) => {
        
        if (this.props.ready) {
          this.props.ready(error, dojoRequire);
        }
      }, this.props.options)
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
  options: PropTypes.object,
  ready: PropTypes.func
};

export default EsriLoader;