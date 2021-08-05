import React from "react";
import Lottie from "react-lottie-player";
import { Flex, Text } from "@chakra-ui/react";

import Rocket from "../assets/rocket.json";

const Footer = () => {
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      minH="100px"
      bgColor="#292C3A"
      direction="column"
      py={2}
      mt={8}
    >
      <Lottie loop animationData={Rocket} play style={{ height: 128 }} />
      <Text fontWeight="bold" color="white" fontSize={24}>
        kristian.ninja
      </Text>
    </Flex>
  );
};

export default Footer;
