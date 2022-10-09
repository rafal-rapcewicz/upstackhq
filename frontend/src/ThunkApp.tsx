import { Provider } from "react-redux";
import store from "./store/store";
import "./index.scss";
import App from "./App";

// this code is normaly part of index.tsx (here wrapper to cusmomize store)
function ThunkApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default ThunkApp;
