import "../styles/global.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return <ApolloProvider client={apolloClient}>
        <Layout>
            <Component { ...pageProps} />
        </Layout>
    </ApolloProvider>
}
export default MyApp;
