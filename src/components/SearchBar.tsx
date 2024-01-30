import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width="70%" marginX="auto" marginY={10}>
        <Input
          ref={ref}
          size="lg"
          borderRadius="20px"
          border="1px solid #fff"
        />
        <InputLeftElement as={BiSearchAlt} margin={1} />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
