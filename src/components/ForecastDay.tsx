import { HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Forecast } from "../hooks/useForecast";
import IMAGES from "../assets";

type Props = {
  day: Forecast;
};

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastDay = ({ day }: Props) => {
  const FtoC = (fahr: number) => {
    return Math.round(((fahr - 32) * 5) / 9);
  };
  const date = new Date(day.Date);
  return (
    <ListItem
      key={day.EpochDate}
      borderBottom="1px solid darkgray"
      marginTop={10}
      fontSize={30}
    >
      <HStack justifyContent="space-between" margin={{ base: 2, md: 10 }}>
        <Text whiteSpace="nowrap" fontSize={{ base: 25, md: 45 }} opacity="0.9">
          {daysOfWeek[date.getDay()]}
        </Text>
        <HStack spacing={0}>
          <Image src={IMAGES[day.Day.Icon - 1]} />
          <Text fontSize={{ base: 20, md: 35 }} opacity="0.8">
            {day.Day.IconPhrase}
          </Text>
        </HStack>
        <HStack fontSize={{ base: "30px", md: 60 }} spacing="10px">
          <Text>L:{FtoC(day.Temperature.Minimum.Value)}°</Text>

          <Text>H:{FtoC(day.Temperature.Maximum.Value)}°</Text>
        </HStack>
      </HStack>
    </ListItem>
  );
};

export default ForecastDay;
