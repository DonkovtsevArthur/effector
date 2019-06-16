import * as React from "react";

import AddUsersStyle from "./styles";
import Input from "./input";
import Button from "./button";

const AddUsers = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.currentTarget.value;
    setValue(eventValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <AddUsersStyle onSubmit={handleSubmit}>
      <Input handleChange={handleChange} value={value} />
      <Button />
    </AddUsersStyle>
  );
};

export default AddUsers;
