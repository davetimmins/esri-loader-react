import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {loadModules} from 'esri-loader';

class EsriLoaderReact extends PureComponent {

  componentDidMount () {

    const {modulesToLoad, options, onReady, onError} = this.props;
   
    loadModules(modulesToLoad ? modulesToLoad : [], options)
      .then(loadedModules => {

        if (onReady) {
          onReady({loadedModules, containerNode: this.mapContainer});
        }
      })
      .catch(error => {
        // handle any errors
        if (onError) {
          onError(error);
        }
      });
  }

  render () {

    if (!this.props.renderMapContainer) {
      return null;
    }

    return <div ref={node => this.mapContainer = node} className='map-view'></div>;
  }
}

EsriLoaderReact.propTypes = {
  renderMapContainer: PropTypes.bool,
  modulesToLoad: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.shape({
    url: PropTypes.string,
    dojoConfig: PropTypes.object
  }),
  onError: PropTypes.func,
  onReady: PropTypes.func,
};

EsriLoaderReact.defaultProps = {
  renderMapContainer: true,
};

export default EsriLoaderReact;