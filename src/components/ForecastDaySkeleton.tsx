import { ListItem, Skeleton } from "@chakra-ui/react";

const ForecastDaySkeleton = () => {
  return (
    <ListItem>
      <Skeleton
        height="50px"
        borderBottom="1px solid darkgray"
        marginTop="10px"
      />
    </ListItem>
  );
};

export default ForecastDaySkeleton;
