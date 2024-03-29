import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import Firebase, { FirebaseContext } from './Firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
            <App />
        </Provider>
    </FirebaseContext.Provider>
, document.getElementById('root'));