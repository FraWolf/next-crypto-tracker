import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import DarkModeSwitch from "../DarkModeSwitch/DarkmodeSwitch";

export default function Navbar() {
  return (
    <Flex m={2}>
      <Box p="2">
        <Heading size="md" textTransform={"uppercase"}>
          Crypto Price Tracker
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
}
