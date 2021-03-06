import React from "react";
import Lottie from "react-lottie-player";
import { Container, Text, Flex } from "@chakra-ui/react";

import Chemist from "../assets/chemistMoving.json";

const AboutMe = () => {
  return (
    <Container maxW="container.lg" minH="400px" py={8}>
      <Flex direction={["column", "column", "row", "row"]}>
        {/* About Me */}
        <Flex
          direction="column"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          <Container minW={["full", "full", "480px", "480px"]}>
            <Text fontSize={24} fontWeight="bold" pb={29}>
              About Me
            </Text>
            <Text fontSize={16} fontWeight="regular" pb={26}>
              Hello! I am Kristian Espina. I enjoy creating webapps that live on
              the cloud. Currently, I’m juggling work and study at the same time
              by working as a full-time software engineer and studying part-time
              under MS Computer Science program at UP Diliman.
            </Text>
            <Text fontSize={16} fontWeight="regular" pb={26}>
              Listed below are some of the technologies I’ve been working on
              recently:
            </Text>
            <Text fontSize={16} fontWeight="regular" pb={26}>
              TypeScript, ReactJS, WebSockets, Python, Flask, and JavaScript
              ES6+
            </Text>
          </Container>
        </Flex>
        <Lottie loop animationData={Chemist} play />
      </Flex>
    </Container>
  );
};

export default AboutMe;
