import React from 'react';
import {render} from 'react-dom';
import EsriLoaderReact from '../../src';

function DemoComponent({options}) {  

  return (
    <div className="App">      
      <div className="App-header">
        <h2>Welcome to Esri-Loader-React</h2>
      </div>
      <EsriLoaderReact 
        options={options} 
        modulesToLoad={['esri/Map', 'esri/views/MapView', 'esri/widgets/ScaleBar']}    
        onReady={({loadedModules: [Map, MapView, ScaleBar], containerNode}) => {

          let view = new MapView({
            container: containerNode,
            map: new Map({basemap: 'streets'})
          });
          
          view.ui.add(new ScaleBar({
            view: view
          }), {
            position: "bottom-left"
          });
        }}
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
