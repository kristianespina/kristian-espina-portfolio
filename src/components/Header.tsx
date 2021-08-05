import React from "react";
import { Flex, Container } from "@chakra-ui/react";

import HeaderMenu from "./HeaderMenu";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <Flex bgColor="#292C3A" minH="500px" pb={4}>
      <Container maxW="container.lg">
        <HeaderMenu />
        <HeaderContent />
      </Container>
    </Flex>
  );
};

export default Header;
