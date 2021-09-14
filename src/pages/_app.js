import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
