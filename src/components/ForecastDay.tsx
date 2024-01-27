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
      <HStack justifyContent="space-between" margin={10}>
        <Text width="10%" whiteSpace="nowrap">
          Monday
        </Text>
        <HStack>
          <WiCloudyGusts />
          <Text>Cloudy</Text>
        </HStack>
        <Text fontSize={70}>
          {day.Temperature.Minimum.Value} {"-"}
          {day.Temperature.Maximum.Value}
        </Text>
      </HStack>
    </ListItem>
  );
};

export default ForecastDay;
