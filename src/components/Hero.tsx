import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { CurrentConditions } from "../hooks/useCurrentConditions";

type Props = {
  city: string;
  currentConditions: CurrentConditions;
};

const Hero = ({ city, currentConditions }: Props) => {
  return (
    <Box textAlign="center" marginTop={20}>
      <Heading as="h1">{city}</Heading>
      <Text opacity="0.6">{currentConditions.LocalObservationDateTime}</Text>
      <Heading
        as="h2"
        fontSize={100}
        paddingLeft={5}
        marginTop={5}
        fontWeight="300"
      >
        {currentConditions.Temperature.Metric.Value}°
      </Heading>
      <Box display="flex" justifyContent="space-around">
        <Image as={MdOutlineWbSunny} boxSize="100px" />
      </Box>
      <Text>{currentConditions.WeatherText}</Text>
    </Box>
  );
};

export default Hero;
