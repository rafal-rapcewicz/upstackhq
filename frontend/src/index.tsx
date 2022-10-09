import ReactDOM from "react-dom/client";
import "./index.scss";
// import ThunkApp from "./ThunkApp";
import SagaApp from "./SagaApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode> // commented to avoid useEffect(fn, []) calling fn TWICE ..
  <SagaApp />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
