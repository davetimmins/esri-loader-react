import React, {Component} from 'react';
import {render} from 'react-dom';
import { dojoRequire } from 'esri-loader';
import EsriLoader from '../../src';

class Demo extends Component {

  createMap = () => {

    dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => { 
      new MapView({
        container: this.mapContainer,
        map: new Map({basemap: 'oceans'})
      })
    });
  }

  render() {

    const options = {
      url: 'https://js.arcgis.com/4.3/'
    };

    return (
      <div className="App">
        <EsriLoader options={options} ready={this.createMap} />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div ref={node => this.mapContainer = node} className='map-view'></div>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
