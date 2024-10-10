import { Provider } from "react-redux";
import store from "../store"; // Adjust the path as needed
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

// Provide the Redux store to this component using <Provider>.
export default function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
}
