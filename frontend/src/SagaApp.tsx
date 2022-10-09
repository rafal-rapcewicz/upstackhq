import { Provider } from "react-redux";
import store from "./store/saga-store";
import "./index.scss";
import App from "./App";

// this code is normaly part of index.tsx (here wrapper to cusmomize store)
function SagaApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default SagaApp;
