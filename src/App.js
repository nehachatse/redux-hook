import { Provider } from "react-redux";
import Todo from "./Components/Todo";
import "./styles.css";
import { store } from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}
