import * as React from "react";
import { UsersFormStyled } from "./style";
import TableUsers from "./table";
import AddUsersForm from "./form";

import CloseForm from "./closeForm";

const Users = () => {
  const [isActiveForm, setActiveForm] = React.useState(true);
  const getActiveForm = () => {
    setActiveForm(!isActiveForm);
  };
  return (
    <>
      <CloseForm onClick={getActiveForm} isActiveForm={isActiveForm} />
      <UsersFormStyled>
        <AddUsersForm isActiveForm={isActiveForm} />
        <TableUsers />
      </UsersFormStyled>
    </>
  );
};

export default Users;
