import * as React from "react";
import { useStore } from "~/utils/effector";
import { asyncAction, $currentUser, $isLoading } from "./models";

interface IProps {
  name: string;
  _id?: string;
}
const TableUsers = () => {
  const user = useStore($currentUser);
  const isLoading: boolean = useStore($isLoading);

  React.useEffect(() => {
    asyncAction({});
  }, []);

  if (isLoading) {
    return <>Загружаю</>;
  }

  return (
    <ul>
      {user.map((el: IProps) => (
        <li key={el._id}>{el.name}</li>
      ))}
    </ul>
  );
};

export default TableUsers;
