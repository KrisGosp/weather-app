import { HStack, Heading, List, Icon } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import ForecastDay from "./ForecastDay";
import useForecast from "../hooks/useForecast";
import ForecastDaySkeleton from "./ForecastDaySkeleton";
// import useLocation from "../hooks/useLocation";
// import useCityQueryStore from "../store";

const WeeklyForecast = () => {
  const { data: forecasts, isLoading, error } = useForecast();

  const skeletons = [1, 2, 3, 4, 5];

  if (isLoading)
    return (
      <List marginTop={200}>
        {skeletons.map((sk) => (
          <ForecastDaySkeleton key={sk} />
        ))}
      </List>
    );

  if (error?.message) return null;

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
        {forecasts?.map((day) => (
          <ForecastDay key={day.EpochDate} day={day} />
        ))}
      </List>
    </>
  );
};

export default WeeklyForecast;
