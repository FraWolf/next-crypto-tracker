import { ChakraProvider } from "@chakra-ui/react";
import DarkModeSwitch from "../components/DarkModeSwitch/DarkmodeSwitch";
import Navbar from "../components/Navbar/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <DarkModeSwitch /> */}
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
