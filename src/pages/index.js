import { Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import CryptoTicker from "../components/Tickers/CryptoTicker";

export default function Home() {
  return (
    <Container maxW="4xl" centerContent>
      <Heading size="2xl" textTransform="uppercase" my={5} noOfLines={2}>
        Crypto Price Tracker
      </Heading>
      <Flex mt={5}>
        <Stack direction={"row"} spacing={5}>
          <CryptoTicker cryptoId={"ethereum"} />
          <CryptoTicker cryptoId={"the-graph"} />
          <CryptoTicker cryptoId={"pancakeswap-token"} />
        </Stack>
      </Flex>
    </Container>
  );
}
