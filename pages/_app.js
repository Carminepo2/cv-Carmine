import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "react-circular-progressbar/dist/styles.css";

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} />;
}

export default MyApp;
