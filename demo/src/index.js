import React from 'react';
import {render} from 'react-dom';
import { dojoRequire } from 'esri-loader';
import EsriLoader from '../../src';

const createMap = (mapContainer) => {

  dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => { 
    new MapView({
      container: mapContainer,
      map: new Map({basemap: 'oceans'})
    })
  });
}

function DemoComponent({options, ready}) {  

  let mapContainer = null;

  return (
    <div className="App">
      <EsriLoader options={options} ready={() => ready(mapContainer)} />
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div ref={node => mapContainer = node} className='map-view'></div>
    </div>
  );  
}

const options = {
  url: 'https://js.arcgis.com/4.5/'
};

render(
  <DemoComponent 
    options={options} 
    ready={createMap}
  />, 
  document.querySelector('#demo')
);
