import * as React from "react";
import { useStore } from "~/utils/effector";
import { asyncAction, $currentUser, $isLoading } from "./models";

import Ul from "./styles";

import { IPropsList } from "./interface";
import List from "./list";

const TableUsers = React.memo(() => {
  const user = useStore($currentUser);
  const isLoading: boolean = useStore($isLoading);

  React.useEffect(() => {
    asyncAction({});
  }, []);

  if (isLoading) {
    return <div>Загружаю...</div>;
  }
  if (user && user.length === 0) {
    return <>Нет данных</>;
  }

  return (
    <Ul>
      {user.map((el: IPropsList) => (
        <List el={el} key={el._id + el.name} />
      ))}
    </Ul>
  );
});

export default TableUsers;
