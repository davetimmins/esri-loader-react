import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import EsriLoader from 'src/'

import { dojoRequire } from 'esri-loader'

class Demo extends React.Component {

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
      url: 'https://js.arcgis.com/4.5/'
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

describe('EsriLoader', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('shows demo', () => {
    render(<Demo/>, node, () => {
      expect(node.textContent).toContain('Welcome to React')
    })
  })
})
