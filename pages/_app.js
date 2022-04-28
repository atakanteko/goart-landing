// Tailwind CSS
import '../styles/globals.css'

// React
import { memo } from "react";

// Custom
import Layout from "../components/Layout";

function SafeHydrate({ children }) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SafeHydrate><Component {...pageProps} /></SafeHydrate>
    </Layout>
  );
}

export default memo(MyApp);
