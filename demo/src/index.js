import React from 'react';
import {render} from 'react-dom';
import EsriLoaderReact from '../../src';

function DemoComponent({options}) {  

  return (
    <div className="App">      
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <EsriLoaderReact 
        options={options} 
        modulesToLoad={['esri/Map', 'esri/views/MapView']}    
        onReady={({loadedModules: [Map, MapView], containerNode}) => {
          new MapView({
            container: containerNode,
            map: new Map({basemap: 'oceans'})
          })
        }}
        onError={error => console.error(error)}
      />
    </div>
  );  
}

const options = {
  url: 'https://js.arcgis.com/4.5/'
};

render(
  <DemoComponent 
    options={options} 
  />, 
  document.querySelector('#demo')
);
