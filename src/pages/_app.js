import "@/styles/globals.css";
import { createClient, Provider } from "urql";
import Nav from "components/Nav";
import {StateContext} from "lib/context";

// Create client to call the GraphQL queries
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}
