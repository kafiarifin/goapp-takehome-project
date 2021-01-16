import dynamic from 'next/dynamic';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

const Navbar = dynamic(() => import(`@molecules/Navbar`), { ssr: false });
const Footer = dynamic(() => import(`@app/global/Footer`), { ssr: false });

// import '../styles/globals.css'
import customTheme from "@utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
