import { Container, Box } from "@chakra-ui/react";
import React from "react";
import AddressForm from "./components/AddressForm";
import AddressSummary from "./components/AddressSummary";

export const App = () => {
  return <div>
    <Container maxW={"container.lg"} py={"10"}>
      <Box p={4} rounded="md" shadow={"base"} bg={"gray.50"}>
        <AddressForm />
      </Box>
      <Box mt={4} p={4} rounded="md" shadow={"base"} bg={"gray.50"}>
        <AddressSummary />
      </Box>
    </Container>
  </div>;
};

export default App;
