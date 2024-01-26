import { HStack, ListItem, Text } from "@chakra-ui/react";
import { WiCloudyGusts } from "react-icons/wi";

const ForecastDay = ({ day }: { day: string }) => {
  return (
    <ListItem
      key={day}
      borderBottom="1px solid darkgray"
      marginTop={10}
      fontSize={30}
    >
      <HStack justifyContent="space-between" margin={10}>
        <Text width="10%" whiteSpace="nowrap">
          {day}
        </Text>
        <HStack>
          <WiCloudyGusts />
          <Text>Cloudy</Text>
        </HStack>
        <Text fontSize={70}>10-20</Text>
      </HStack>
    </ListItem>
  );
};

export default ForecastDay;
