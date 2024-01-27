import { HStack, Heading, List, Icon } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import ForecastDay from "./ForecastDay";
import { Forecast } from "../hooks/useForecast";

type Props = {
  forecasts: Forecast[];
};

const WeeklyForecast = ({ forecasts }: Props) => {
  // const daysOfWeek = [
  //   "Saturday",
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  // ];
  return (
    <>
      <HStack marginLeft={5}>
        <Icon as={FaCalendarAlt} boxSize="40px" />
        <Heading as="h2" fontSize={60} paddingLeft={4}>
          This week
        </Heading>
      </HStack>
      <List>
        {forecasts.map((day) => (
          <ForecastDay key={day.EpochDate} day={day} />
        ))}
      </List>
    </>
  );
};

export default WeeklyForecast;
