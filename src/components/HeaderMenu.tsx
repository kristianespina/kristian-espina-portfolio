import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const HeaderMenu = () => {
  return (
    <Flex direction="row" color="white" py={4}>
      <Text fontWeight="bold">kristian.ninja</Text>
      <Spacer />
      {/* <Flex direction="row" gridGap={3}>
        <Text fontWeight="bold">About</Text>
        <Text fontWeight="bold">Projects</Text>
        <Text fontWeight="bold">Contact</Text>
      </Flex> */}
    </Flex>
  );
};

export default HeaderMenu;
