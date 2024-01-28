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
      <HStack
        marginLeft={{ base: 5, lg: "1px" }}
        justifyContent={{ base: "inherit", lg: "center" }}
        marginBottom={20}
      >
        <Icon as={FaCalendarAlt} boxSize="40px" />
        <Heading as="h2" fontSize={60} fontWeight="400">
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
