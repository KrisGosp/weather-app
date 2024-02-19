import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { FieldValues, useForm } from "react-hook-form";
<<<<<<< HEAD
// import useCityQueryStore from "../store";
=======
>>>>>>> 0253ebf856d0a6c2f929054f6a833b669769019a

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
<<<<<<< HEAD
  // const { updateName } = useCityQueryStore();
  const onSubmit = (data: FieldValues) => {
    // updateName(data.search);
=======
  const onSubmit = (data: FieldValues) => {
>>>>>>> 0253ebf856d0a6c2f929054f6a833b669769019a
    onSearch(data.search);
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
