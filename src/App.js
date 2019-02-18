import React, { Component } from 'react';
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { Layout } from 'antd';
import WindowSizeListener from 'react-window-size-listener';

import './App.css';
import QuizApp from './QuizApp';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
// use applyMiddleware to add the thunk middleware to the store
const store = createStore( combineReducers(reducers), composeEnhancers(applyMiddleware(thunk)));

class App extends Component {

  controlApp(windowSize) {

    if ( windowSize.windowWidth <= 1024) {
      document.body.classList.add('mobile')

    }
    if ( windowSize.windowWidth > 1024) {
      document.body.classList.remove('mobile')
    }
  }

  render() {
    const appHeight = window.innerHeight;
    
    return (
<Provider store={store}>
<WindowSizeListener
  onResize={(windowSize) =>this.controlApp(windowSize)}
></WindowSizeListener>
      <Layout style={{ height: appHeight }}>
      
       <QuizApp isLoading={0}></QuizApp>
      
      </Layout>
</Provider>

  
    );
  }
}

export default App



