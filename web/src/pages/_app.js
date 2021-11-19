import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ClientProvider } from "@/lib/graphql";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ClientProvider endpoint="http://localhost/graphql">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ClientProvider>
  );
}

export default MyApp;
