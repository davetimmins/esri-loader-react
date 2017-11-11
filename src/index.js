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
          onError(error);
        }
      });
  }

  render () {

    const {renderMapContainer, mapContainerClassName, children} = this.props;

    if (!this.props.renderMapContainer) {
      return this.props.children;
    }

    return (
      <div ref={node => this.mapContainer = node} className={mapContainerClassName}>
        {this.props.children}
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
  onError: PropTypes.func, // error =>
  onReady: PropTypes.func, // {loadedModules, containerNode (null if renderMapContainer !== true)}
};

EsriLoaderReact.defaultProps = {
  renderMapContainer: true,
  mapContainerClassName: 'map-view',
};

export default EsriLoaderReact;