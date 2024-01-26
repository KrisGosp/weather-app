import { HStack, Heading, List, Icon } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import ForecastDay from "./ForecastDay";

const WeeklyForecast = () => {
  const daysOfWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return (
    <>
      <HStack marginLeft={5}>
        <Icon as={FaCalendarAlt} boxSize="40px" />
        <Heading as="h2" fontSize={60} paddingLeft={4}>
          This week
        </Heading>
      </HStack>
      <List>
        {daysOfWeek.map((day) => (
          <ForecastDay key={day} day={day} />
        ))}
      </List>
    </>
  );
};

export default WeeklyForecast;
