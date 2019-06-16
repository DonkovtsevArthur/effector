import * as React from "react";

import { addUser } from "./models";

import AddUsersStyle from "./styles";
import Input from "./input";
import Button from "./button";

const AddUsers = () => {
  const obj = {
    age: "",
    name: "",
    isAge: false,
    isName: false
  };
  const [state, setState] = React.useState(obj);
  const handleChange = (setName: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const eventValue = event.currentTarget.value;

    switch (setName) {
      case "age":
        setState({
          ...state,
          [setName]: eventValue,
          isAge: state.isAge && !state.isAge
        });
        break;
      case "name":
        setState({
          ...state,
          [setName]: eventValue,
          isName: state.isName && !state.isName
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { age, name } = state;

    if (age && name) {
      const { isAge, isName } = state;
      if (isAge) {
        setState({ ...state, isAge: false });
      }
      if (isName) {
        setState({ ...state, isName: false });
      }

      addUser({ name, age });
    } else {
      if (age.length === 0) {
        setState({ ...state, isAge: true });
      }
      if (name.length === 0) {
        setState({ ...state, isName: true });
      }
    }
  };
  return (
    <AddUsersStyle onSubmit={handleSubmit}>
      <Input
        onChange={handleChange("name")}
        value={state.name}
        placeholder={"Введите имя"}
        isReq={state.isName}
      />
      <Input
        onChange={handleChange("age")}
        value={state.age}
        type="number"
        placeholder={"Укажите возвраст"}
        isReq={state.isAge}
      />
      <Button />
    </AddUsersStyle>
  );
};

export default AddUsers;
