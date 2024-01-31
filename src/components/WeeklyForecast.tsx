import { HStack, Heading, List, Icon, Stack } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import ForecastDay from "./ForecastDay";
import useForecast from "../hooks/useForecast";
import { CityQuery } from "../App";
import useLocation from "../hooks/useLocation";
import ForecastDaySkeleton from "./ForecastDaySkeleton";

type Props = {
  cityQuery: CityQuery;
};

const WeeklyForecast = ({ cityQuery }: Props) => {
  const { location } = useLocation(cityQuery);
  const { data: forecasts, isLoading } = useForecast(location);

  const skeletons = [1, 2, 3, 4, 5];

  if (isLoading)
    return (
      <Stack>
        {skeletons.map((sk) => (
          <ForecastDaySkeleton key={sk} />
        ))}
      </Stack>
    );

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
