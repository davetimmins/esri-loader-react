import React from 'react';
import {render} from 'react-dom';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism'; 

import EsriLoaderReact from '../../src';
import {version} from '../../package.json';

registerLanguage('jsx', jsx);

function DemoComponent({options}) {  

  const codeString = " \
import React from 'react'; \n \
import EsriLoaderReact from 'esri-loader-react'; \n \
\n \
function DemoComponent(props) { \n \
  \n \
  const options = { \n \
    url: 'https://js.arcgis.com/4.7/' \n \
  }; \n \
  \n \
  return ( \n \
    <EsriLoaderReact \n \
      options={options} \n \
      modulesToLoad={['esri/Map', 'esri/views/MapView']} \n \
      onReady={({loadedModules: [Map, MapView], containerNode}) => { \n \
        new MapView({ \n \
          container: containerNode, \n \
          map: new Map({basemap: 'streets'}) \n \
        }); \n \
      }} \n \
    /> \n \
  ); \n \
} \
  ";

  return (
    <div className="App">      
      <div className="App-header">
        <h2>{`Esri-Loader-React v${version}`}</h2>
      </div>
      <EsriLoaderReact 
        options={options} 
        modulesToLoad={['esri/Map', 'esri/views/MapView', 'esri/widgets/ScaleBar']}    
        onReady={({loadedModules: [Map, MapView, ScaleBar], containerNode}) => {

          let view = new MapView({
            container: containerNode,
            map: new Map({basemap: 'streets'}),
            zoom: 4,
            center: [174, -42],
          });
          
          view.ui.add(new ScaleBar({
            view: view
          }), {
            position: "bottom-left"
          });
        }}
      />
      <SyntaxHighlighter language='jsx' showLineNumbers={true} style={prism}>{codeString}</SyntaxHighlighter>       
    </div>
  );  
}

const options = {
  url: 'https://js.arcgis.com/4.8/'
};

render(
  <DemoComponent 
    options={options} 
  />, 
  document.querySelector('#demo')
);
