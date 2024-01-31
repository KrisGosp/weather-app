// import { Box, HStack, Heading, Text } from "@chakra-ui/react";

import { HStack, Skeleton } from "@chakra-ui/react";

const HeroSkeleton = () => {
  return (
    <HStack justifyContent="center" marginTop={20}>
      <Skeleton
        width={{ base: "200px" }}
        height={{ base: "300px" }}
        borderRadius="20px"
      />
    </HStack>
  );
};

export default HeroSkeleton;

{
  /* <Box textAlign="center" marginTop={20}>
      <Heading
        as="h1"
        fontSize={{ base: 70, md: "90px", lg: "110px", xl: "160px" }}
      >
        Sofia
      </Heading>
      <Text opacity="0.6" fontSize={{ base: 17, md: "20px", xl: "90px" }}>
        20 feb 2024
      </Text>

      <Heading
        as="h2"
        fontSize={{ base: 100, md: 110, lg: 150 }}
        marginTop={5}
        fontWeight="300"
      >
        22 °
      </Heading>
      <HStack
        marginTop="10px"
        justifyContent="center"
        spacing={0}
        marginRight={{ base: "35px", md: "50px", lg: "70px" }}
      >
        <Box></Box>
        <Text fontSize={{ base: "20px", lg: "30px" }} opacity="0.8">
          sunny
        </Text>
      </HStack>
    </Box> */
}
