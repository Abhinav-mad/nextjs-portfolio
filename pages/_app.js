import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "@/lib/theme";
import Fonts from "@/components/Fonts";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps,router }) {
  
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Layout router={router} >
        <AnimatePresence mode="wait" initial="true">
      <Component {...pageProps} key={router.route}/> 
      </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
