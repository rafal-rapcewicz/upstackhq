import { Provider } from "react-redux";
import store from "./store/saga-store";
import logo from './logo.svg';
import { Users } from './components/UsersSaga';
import "./index.scss";

import './App.scss';

// 2 ways of using async thunk actions a) with "root" reducer & b) with "local" useReducer
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Users />
            </header>
        </div>
    );
}

// this code is normaly part of index.tsx (here wrapper to cusmomize store)
function SagaApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default SagaApp;
