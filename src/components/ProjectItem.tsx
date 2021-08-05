import React from "react";

import { Flex, Container, Text, Button, Image } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
  thumbnail: string;
};
const ProjectItem = ({ title, description, thumbnail }: Props) => {
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      my={4}
      gridGap={4}
      py={4}
    >
      <Flex
        direction="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Image src={thumbnail} borderRadius="24px" maxW="310px" />
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Container>
          <Text fontWeight="bold" fontSize={18} pb="16px">
            {title}
          </Text>
          <Text>{description}</Text>
          <Button
            mt={8}
            bgColor="#F4B73F"
            color="white"
            size="sm"
            _hover={{ bgColor: "#D5A548" }}
          >
            View Demo
          </Button>
        </Container>
      </Flex>
    </Flex>
  );
};

export default ProjectItem;
