import React from 'react';
import { App } from './App';
import renderer from 'react-test-renderer';

function wait(ms) {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
}

describe('App', () => {
  let component;

  function getText() {
    return component.toJSON().children[0].children[0];
  }

  beforeEach(() => {
    component = renderer.create(<App />);
  });

  test('App should change state after 2 sec', (done) => {
    expect(getText()).toEqual('Loading...');
    wait(2000).then(() => {
      expect(getText()).toEqual('Hello App');
      done();
    });
  });
});
