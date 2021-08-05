import React from "react";
import { Image, Flex, Box, Text, Container } from "@chakra-ui/react";

import AvatarSVG from "./AvatarSVG";
import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";

const HeaderContent = () => {
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      color="white"
      py={4}
      gridGap={16}
    >
      <Flex alignContent="center" justifyContent="center">
        <Box h={["240px", "240px", "640px", "640px"]}>
          <AvatarSVG />
        </Box>
      </Flex>
      <Flex
        justifyContent="left"
        alignContent="left"
        alignItems="center"
        w="full"
      >
        <Flex direction="column" alignContent="left">
          <Text fontWeight="regular">Hey, I'm</Text>
          <Text fontWeight="bold" fontSize={48}>
            Kristian Espina
          </Text>
          <Container p={0}>
            <Text fontWeight="regular">
              I'm a software engineer specializing in building modern and fully
              scalable applications deployed on the web
            </Text>

            <Flex direction="row" pt={4} gridGap={4}>
              <a href="https://github.com/kristianespina">
                <Image src={Github} cursor="pointer" />
              </a>
              <a href="https://www.linkedin.com/in/kristian-espina/">
                <Image src={LinkedIn} cursor="pointer" />
              </a>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderContent;
