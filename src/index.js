import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {loadModules} from 'esri-loader';

class EsriLoaderReact extends PureComponent {

  componentDidCatch(error, info) {

    const {onError} = this.props;
    
    if (onError) {
      onError(error, info);
    }
  }

  componentDidMount () {

    const {modulesToLoad, options, onReady, onError} = this.props;
   
    loadModules(modulesToLoad ? modulesToLoad : [], options)
      .then(loadedModules => {

        if (onReady) {
          onReady({loadedModules, containerNode: this.mapContainer});
        }
      })
      .catch(error => {
        
        if (onError) {
          onError(error, null);
        }
      });
  }

  render () {

    const {renderMapContainer, mapContainerClassName, children} = this.props;

    if (!renderMapContainer) {
      return children ? children : null;
    }

    return (
      <div ref={node => this.mapContainer = node} className={mapContainerClassName}>
        {children ? children : null}
      </div>
    );
  }
}

EsriLoaderReact.propTypes = {
  renderMapContainer: PropTypes.bool, // default is true
  mapContainerClassName: PropTypes.string, // default is 'map-view'
  modulesToLoad: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.shape({
    url: PropTypes.string,
    dojoConfig: PropTypes.object
  }),
  onError: PropTypes.func, // (error, info) =>
  onReady: PropTypes.func, // ({loadedModules, containerNode (null if renderMapContainer !== true)})
};

EsriLoaderReact.defaultProps = {
  renderMapContainer: true,
  mapContainerClassName: 'map-view',
  onError: (error, info) => console.error(error),
};

export default EsriLoaderReact;