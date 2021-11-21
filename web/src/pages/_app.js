import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ClientProvider } from "@/lib/graphql";
import { createUseStyles } from "react-jss";

const queryClient = new QueryClient();

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#facd04',
    },
    'h1,h2,h3,h4': {
      color: '#0d2e4d',
      fontWeight: 'bold',
    },
    h1: {
      fontSize: '4rem',
      marginBottom: '1rem',
    },
    main: {
      background: 'white',
      borderRadius: '20px',
      padding: '3rem',
      marginTop: '30px',
    },
    'a:hover': {
      textDecoration: 'underline',
    }
  }
});

function MyApp({ Component, pageProps }) {
  useStyles();

  return (
    <ClientProvider endpoint="http://localhost/graphql">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ClientProvider>
  );
}

export default MyApp;
