import * as React from "react";
import { UsersFormStyled } from "./style";
import TableUsers from "./table";
import AddUsers from "./form";

const Users = () => {
  return (
    <UsersFormStyled>
      <AddUsers />
      <TableUsers />
    </UsersFormStyled>
  );
};

export default Users;
