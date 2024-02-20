import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { FieldValues, useForm } from "react-hook-form";
import useCityQueryStore from "../store";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const { updateName } = useCityQueryStore();
  const onSubmit = (data: FieldValues) => {
    onSearch(data.search);
    updateName(data.search);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup width="70%" marginX="auto" marginY={10}>
        <Input
          {...register("search", {
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
      {errors.search?.type === "minLength" && (
        <p>Please type at least 3 characters</p>
      )}
      {errors.search?.type === "maxLength" && <p>Maximum length exceeded</p>}
    </form>
  );
};

export default SearchBar;
