import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import TestRenderer from 'react-test-renderer';
import expect, { spyOn } from 'expect';

import EsriLoaderReact from 'src/';

describe('EsriLoaderReact', () => {
  let testRenderer;
  let testInstance;

  let context = {
    onReadyCallback: function ({loadedModules, containerNode}) {},
    onErrorCallback: function (error, info) {},
  };

  const options = {
    url: 'https://js.arcgis.com/4.5/'
  };
  
  beforeEach(() => {
    
    spyOn(context, 'onReadyCallback');
    spyOn(context, 'onErrorCallback');

    testRenderer = TestRenderer.create(
      <EsriLoaderReact 
        options={options} 
        modulesToLoad={['esri/Map', 'esri/views/MapView']}    
        onReady={context.onReadyCallback}
      >
        <h2>Welcome to Esri-Loader-React</h2>
        <h3>blah blah</h3>
      </EsriLoaderReact>
    );
    testInstance = testRenderer.root;
  });

  afterEach(() => {
    testRenderer.unmount();
  });

  it('should render children', () => {    
    expect(testInstance.props.children).toContain(<h2>Welcome to Esri-Loader-React</h2>);  
    expect(testInstance.props.children).toContain(<h3>blah blah</h3>);  
  });

  // it('should have called onReady', function () {
  //   expect(context.onReadyCallback).toHaveBeenCalled();
  // });

  it('should not have called onError', function () {
    expect(context.onErrorCallback).toNotHaveBeenCalled();
  });

  it('should have default props', function () {
    expect(testInstance.props.renderMapContainer).toEqual(true);
    expect(testInstance.props.mapContainerClassName).toEqual('map-view');
    expect(testInstance.props.onError).toExist();    
  });

  it('should match passed in props', function () {
    expect(testInstance.props.modulesToLoad).toEqual(['esri/Map', 'esri/views/MapView']);
    expect(testInstance.props.onReady).toEqual(context.onReadyCallback);
  });
})
