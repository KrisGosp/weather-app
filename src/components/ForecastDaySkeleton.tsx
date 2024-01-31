// import { HStack, ListItem, Skeleton, SkeletonText, Text } from "@chakra-ui/react"

import { Skeleton } from "@chakra-ui/react";

const ForecastDaySkeleton = () => {
  return (
    <Skeleton
      height="50px"
      borderBottom="1px solid darkgray"
      marginTop="10px"
    />
    // <ListItem
    //   borderBottom="1px solid darkgray"
    //   marginTop={10}
    //   fontSize={30}
    // >
    //   <HStack justifyContent="space-between" margin={{ base: 2, md: 10 }}>
    //     <SkeletonText whiteSpace="nowrap" fontSize={{ base: 25, md: 45 }} opacity="0.9">
    //       Monday
    //     </SkeletonText>
    //     <HStack spacing={0}>
    //       <Skeleton boxSize="42px"/>
    //       <SkeletonText fontSize={{ base: 20, md: 35 }} opacity="0.8">
    //         Sunny
    //       </SkeletonText>
    //     </HStack>
    //     <HStack fontSize={{ base: "30px", md: 60 }} spacing="10px">
    //       <Text>L:4°</Text>

    //       <Text>H:20°</Text>
    //     </HStack>
    //   </HStack>
    // </ListItem>
  );
};

export default ForecastDaySkeleton;
