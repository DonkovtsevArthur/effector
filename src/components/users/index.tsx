import * as React from "react";
import { UsersFormStyled } from "./style";
import TableUsers from "./table";

const Users = () => {
  return (
    <UsersFormStyled>
      <TableUsers />
    </UsersFormStyled>
  );
};

export default Users;
