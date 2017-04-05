# esri-loader-react
A React component wrapper around esri-loader

### Usage

Mount the loader component to preload the Esri JS API when you will need it in your app.
You can pass in the options that get forwarded to the [esri-loader](https://github.com/tomwayson/esri-loader) `bootstrap` function

```js
import EsriLoader from 'esri-loader-react';

class AppMain extends React.PureComponent {

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.3/'
    };

    return (
      <div>
        <EsriLoader options={options} />
      </div>
    );
  }
}
```

optionally you can listen for the API being `ready` to use

```js
import EsriLoader from 'esri-loader-react';

class AppMain extends React.PureComponent {

  initialState = {
    loaded: false
  };
  state = this.initialState;

  onEsriApiLoaded = (error) => {

    if (!error) {
      this.setState({loaded: true});
    }
  }

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.3/'
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

now you can use the normal `dojoRequire` from [esri-loader](https://github.com/tomwayson/esri-loader)

```js
import {dojoRequire} from "esri-loader";

  dojoRequire(
    ["esri/Map", "esri/views/MapView"],
    (Map, MapView) => {
```

### Build locally

`npm install`
`npm run build`

### Examples

https://davetimmins.com/arcgis-react-redux-legend/