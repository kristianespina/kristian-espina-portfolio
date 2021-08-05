import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProjectItem from "./ProjectItem";

import EtherealChat from "../assets/ethereal-chat.png";
import AlchemyCP from "../assets/alchemy-cp.png";

const Projects = () => {
  return (
    <Container maxW="container.lg" mt={8}>
      <Text align="center" fontWeight="bold" fontSize={24}>
        Featured Projects
      </Text>
      <Flex direction="column">
        <ProjectItem
          title="Ethereal Chat"
          description="A webapp with realtime chat capability built using ReactJS, Express,
            and MongoDB. The webapp also uses TypeScript and ReduxJS."
          thumbnail={EtherealChat}
          demoUrl="https://kristianespina.github.io/ethereal-chat/#/"
        />
        <ProjectItem
          title="AlchemyCP"
          description="A webapp built on Django for managing Ragnarok Online accounts for rAthena-based private servers"
          thumbnail={AlchemyCP}
          demoUrl={"https://github.com/kristianespina/AlchemyCP"}
        />
      </Flex>
    </Container>
  );
};

export default Projects;
