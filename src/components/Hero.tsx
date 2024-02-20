import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import useCurrentConditions from "../hooks/useCurrentConditions";
import IMAGES from "../assets";
import HeroSkeleton from "./HeroSkeleton";
import useLocation from "../hooks/useLocation";
import { CityQuery } from "../App";

interface Props {
  cityQuery: CityQuery;
}

const Hero = ({ cityQuery }: Props) => {
  const { data: location } = useLocation(cityQuery.LocalizedName);
  const {
    data: currentConditions,
    isLoading,
    error,
  } = useCurrentConditions(location!);

  localStorage.setItem("city", location!.LocalizedName);

  const nowTime = new Date(
    currentConditions?.LocalObservationDateTime || Date.now()
  );
  const cutDate = nowTime
    .toString()
    .slice(0, nowTime.toString().indexOf(" 2024"));

  if (isLoading) return <HeroSkeleton />;
  if (error) return <p>{error.message}</p>;
  return (
    <Box textAlign="center" marginTop={20}>
      <Heading
        as="h1"
        fontSize={{ base: 70, md: "90px", lg: "110px", xl: "160px" }}
      >
        {location!.LocalizedName}
      </Heading>
      <Text opacity="0.6" fontSize={{ base: 17, md: "20px", xl: "90px" }}>
        {cutDate}
      </Text>
      <Heading
        as="h2"
        fontSize={{ base: 100, md: 110, lg: 150 }}
        marginTop={5}
        fontWeight="300"
      >
        {currentConditions.Temperature &&
          currentConditions.Temperature.Metric.Value}
        °
      </Heading>
      <HStack
        marginTop="10px"
        justifyContent="center"
        spacing={0}
        marginRight={{ base: "35px", md: "50px", lg: "70px" }}
      >
        <Box>
          <Image src={IMAGES[currentConditions.WeatherIcon - 1]} />
        </Box>
        <Text fontSize={{ base: "20px", lg: "30px" }} opacity="0.8">
          {currentConditions.WeatherText}
        </Text>
      </HStack>
    </Box>
  );
};

export default Hero;
