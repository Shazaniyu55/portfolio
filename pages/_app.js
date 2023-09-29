import '@/styles/globals.css'
import React from 'react';
import 'tailwindcss/tailwind.css';
import HomeSplashScreen from '../components/HomeSplashScreen'
import Layout from '../components/Layouts'

export default function App({ Component, pageProps }) {
  return(
    <div>
        <HomeSplashScreen />
        <Layout showNavbarAndFooter={true}>
      <Component {...pageProps} />

      </Layout>

    </div>
  )
  
  
}
