import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, updateMessageText} from "./state";

let rerenderEntireComponents =  ()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                state = {state}
                addMessage = {addMessage}
                updateMessageText = {updateMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireComponents()

subscribe(rerenderEntireComponents)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
