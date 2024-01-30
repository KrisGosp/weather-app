import { HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Forecast } from "../hooks/useForecast";
import IMAGES from "../assets";

type Props = {
  day: Forecast;
};

// const daysOfWeek = [
//   {0: "Monday"},
//   {1: "Tuesday"},
//   {2: "Wednesday"},
//   {3: "Thursday"},
//   {4: "Friday"},
//   {5: "Saturday"},
//   {6: "Sunday"},
// ];

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

  // if (day.Date) console.log(day.Date.getDay());

  return (
    <ListItem
      key={day.EpochDate}
      borderBottom="1px solid darkgray"
      marginTop={10}
      fontSize={30}
    >
      <HStack justifyContent="space-between" margin={{ base: 2, md: 10 }}>
        <Text whiteSpace="nowrap" fontSize={{ base: 25, md: 45 }} opacity="0.9">
          {daysOfWeek[0]}
        </Text>
        <HStack>
          <Image src={IMAGES[day.Day.Icon - 1]} />
          <Text fontSize={{ base: 20, md: 35 }} opacity="0.8">
            {day.Day.IconPhrase}
          </Text>
        </HStack>
        <HStack fontSize={{ base: 38, md: 60 }} spacing={1}>
          <Text>{FtoC(day.Temperature.Minimum.Value)}</Text>

          <Text>{"-"}</Text>
          <Text>{FtoC(day.Temperature.Maximum.Value)}</Text>
        </HStack>
      </HStack>
    </ListItem>
  );
};

export default ForecastDay;
