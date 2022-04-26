// Tailwind CSS
import '../styles/globals.css'

// React
import { memo } from "react";

// Custom
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default memo(MyApp);
