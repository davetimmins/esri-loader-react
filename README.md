# esri-loader-react

[![Build Status](https://travis-ci.org/davetimmins/esri-loader-react.svg?branch=master)](https://travis-ci.org/davetimmins/esri-loader-react)

[![npm](https://img.shields.io/npm/v/esri-loader-react.svg)](https://www.npmjs.com/package/esri-loader-react)

A React component wrapper around [esri-loader](https://github.com/Esri/esri-loader)

> Version 2 of this library is compatible with [esri-loader](https://github.com/Esri/esri-loader) 1.5.0 and higher.

### Usage

`npm install react prop-types esri-loader esri-loader-react`

Mount the loader component to load the [Esri JS API](https://developers.arcgis.com/javascript/) when you will need it in your app.
You can pass in the options that get forwarded to the [esri-loader](https://github.com/Esri/esri-loader) `loadModules` function.

You can still use this component as a means of pre-loading the [Esri JS API](https://developers.arcgis.com/javascript/) though it is less useful now that [esri-loader](https://github.com/Esri/esri-loader) version 1.5.0 onward is basically a 1-liner to do this. Instead, the main usage of this component is likely to be ensuring that the [Esri JS API](https://developers.arcgis.com/javascript/) is ready to use and the modules you need are available and these can then be used to do something in your UI with a DOM node mounted for you to use. If you don't need to auto inject a container node into your UI then set `renderMapContainer={false}`. You can pass through children to be rendered too.

```js
import React, {PureComponent} from 'react';
import EsriLoaderReact from 'esri-loader-react';

class AppMain extends PureComponent {

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.6/'
    };

    return (
      <EsriLoaderReact 
        options={options} 
        modulesToLoad={['esri/Map', 'esri/views/MapView']}    
        onReady={({loadedModules: [Map, MapView], containerNode}) => {
          new MapView({
            container: containerNode,
            map: new Map({basemap: 'oceans'})
          });
        }}
      />
    );
  }
}
```

you can still use the functions from [esri-loader](https://github.com/Esri/esri-loader) elsewhere in your code as needed.

The component has the following properties

```js
EsriLoaderReact.propTypes = {
  renderMapContainer: PropTypes.bool, // default is true
  mapContainerClassName: PropTypes.string, // default is 'map-view'
  modulesToLoad: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.shape({
    url: PropTypes.string,
    dojoConfig: PropTypes.object
  }),
  onError: PropTypes.func, // (error, info) => also called from componentDidCatch, default is onError: (error, info) => console.error(error),
  onReady: PropTypes.func, // ({loadedModules, containerNode}) => containerNode is null if renderMapContainer !== true
};
```

### Build locally

1. `npm install`
2. `npm run build`

you can run the demo using `npm start`

### Examples

* https://davetimmins.github.io/arcgis-react-redux-legend/
* https://github.com/davetimmins/create-react-app-esri-loader/
* https://github.com/tomwayson/esri-react-router-example
