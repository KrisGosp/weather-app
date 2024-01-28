import { HStack, ListItem, Text } from "@chakra-ui/react";
import { WiCloudyGusts } from "react-icons/wi";
import { Forecast } from "../hooks/useForecast";

type Props = {
  day: Forecast;
};

const ForecastDay = ({ day }: Props) => {
  return (
    <ListItem
      key={day.EpochDate}
      borderBottom="1px solid darkgray"
      marginTop={10}
      fontSize={30}
    >
      <HStack justifyContent="space-between" margin={{ base: 2, md: 10 }}>
        <Text whiteSpace="nowrap" fontSize={{ base: 25, md: 45 }} opacity="0.9">
          Monday
        </Text>
        <HStack>
          <WiCloudyGusts />
          <Text fontSize={{ base: 20, md: 35 }} opacity="0.8">
            Cloudy
          </Text>
        </HStack>
        <HStack fontSize={{ base: 38, md: 60 }} spacing={1}>
          <Text>{day.Temperature.Minimum.Value}</Text>

          <Text>{"-"}</Text>
          <Text>{day.Temperature.Maximum.Value}</Text>
        </HStack>
      </HStack>
    </ListItem>
  );
};

export default ForecastDay;
