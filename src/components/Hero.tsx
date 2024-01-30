import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { CurrentConditions } from "../hooks/useCurrentConditions";
// import one from "../assets/1-s.png";
import IMAGES from "../assets";
import useLocation from "../hooks/useLocation";
import { cityQuery } from "../App";

type Props = {
  cityQuery: cityQuery;
  currentConditions: CurrentConditions;
};

const Hero = ({ cityQuery, currentConditions }: Props) => {
  const { location } = useLocation(cityQuery);

  const nowTime = new Date(currentConditions.LocalObservationDateTime);
  const cutDate = nowTime
    .toString()
    .slice(0, nowTime.toString().indexOf(" 2024"));

  return (
    <Box textAlign="center" marginTop={20}>
      <Heading
        as="h1"
        fontSize={{ base: 70, md: "110px", lg: "130px", xl: "160px" }}
      >
        {location.name}
      </Heading>
      <Text
        opacity="0.6"
        fontSize={{ base: 17, md: "20px", lg: "25px", xl: "90px" }}
      >
        {cutDate}
      </Text>
      <Heading
        as="h2"
        fontSize={{ base: 100, md: 160, lg: 220 }}
        marginTop={5}
        fontWeight="300"
      >
        {currentConditions.Temperature.Metric.Value}°
      </Heading>
      <Box marginY={10} display="flex" justifyContent="space-around">
        <Image
          src={IMAGES[currentConditions.WeatherIcon - 1]}
          width={{ base: 500, md: 700, lg: 800 }}
        />
      </Box>
      <Text fontSize={{ base: "50px", lg: "80px" }} opacity="0.8">
        {currentConditions.WeatherText}
      </Text>
    </Box>
  );
};

export default Hero;
