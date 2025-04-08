// pages/_app.js

import '../styles/globals.css';
import RootLayout from '../app/layout';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AuthProvider>
  );
}

export default MyApp;
