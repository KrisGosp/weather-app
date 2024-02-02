import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const onSubmit = (data: FieldValues) => {
    onSearch(data.searchTerm);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup width="70%" marginX="auto" marginY={10}>
        <Input
          {...register("search", {
            required: true,
            minLength: 3,
            maxLength: 40,
          })}
          id="search"
          size="lg"
          borderRadius="20px"
          border="1px solid #fff"
        />
        <InputLeftElement as={BiSearchAlt} margin={1} />
      </InputGroup>
      {/* {errors} */}
    </form>
  );
};

export default SearchBar;
