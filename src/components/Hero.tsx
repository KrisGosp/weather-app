import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { MdOutlineWbSunny } from "react-icons/md";

type Props = {
  city: string;
};

const Hero = ({ city }: Props) => {
  return (
    <Box textAlign="center" marginTop={20}>
      <Heading as="h1">{city}</Heading>
      <Text opacity="0.6">Friday, 26 January</Text>
      <Heading
        as="h2"
        fontSize={100}
        paddingLeft={5}
        marginTop={5}
        fontWeight="300"
      >
        24°
      </Heading>
      <Box display="flex" justifyContent="space-around">
        <Image as={MdOutlineWbSunny} boxSize="100px" />
      </Box>
    </Box>
  );
};

export default Hero;
