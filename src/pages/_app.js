import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { store, persiststore } from "../../lib/store/index";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
        <Head>
          <title>Expense Tracker</title>
          <link rel="icon" href="/file.svg" sizes="any" />
        </Head>
        <Component {...pageProps} />
        <div></div>
      </PersistGate>
    </Provider>
  );
}
