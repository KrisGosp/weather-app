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
