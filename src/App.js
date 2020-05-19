import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import store from './store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <div><Main/></div>
    </Provider>
  );
}

export default App;
