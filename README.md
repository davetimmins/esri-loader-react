# esri-loader-react

[![npm](https://img.shields.io/npm/v/esri-loader-react.svg)](https://www.npmjs.com/package/esri-loader-react)

A React component wrapper around [esri-loader](https://github.com/Esri/esri-loader)

### Usage

`npm install react prop-types esri-loader esri-loader-react --save`

Mount the loader component to preload the Esri JS API when you will need it in your app.
You can pass in the options that get forwarded to the [esri-loader](https://github.com/Esri/esri-loader) `bootstrap` function

```js
import React from 'react';
import EsriLoader from 'esri-loader-react';

class AppMain extends React.PureComponent {

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.5/',
      dojoConfig: {},
    };

    return (
      <div>
        <EsriLoader options={options} />
      </div>
    );
  }
}
```

optionally you can listen for the API being `ready` to use, this will return an error if one occurs, otherwise you can use the returned `dojoRequire` directly

```js
import React from 'react';
import EsriLoader from 'esri-loader-react';

class AppMain extends React.PureComponent {

  initialState = {
    loaded: false
  };
  state = this.initialState;

  onEsriApiLoaded = (error, dojoRequire) => {

    if (!error) {
      this.setState({loaded: true});
    }
  }

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.5/'
    };

    return (
      <div>
        <EsriLoader options={options} ready={this.onEsriApiLoaded} />
        {this.state.loaded ? <MapComponent /> : null}
      </div>
    );
  }
}
```

or you can import `dojoRequire` from [esri-loader](https://github.com/Esri/esri-loader) elsewhere in your code

```js
import {dojoRequire} from "esri-loader";

  dojoRequire(
    ["esri/Map", "esri/views/MapView"],
    (Map, MapView) => {
```

### Build locally

1. `npm install`
2. `npm run build`

### Examples

* https://davetimmins.github.io/arcgis-react-redux-legend/
* https://github.com/davetimmins/create-react-app-esri-loader/
* https://github.com/tomwayson/esri-react-router-example
