import * as React from "react";
import { IPropsList } from "../interface";

import Li from "./styles";
interface IProps {
  el: IPropsList;
}

const List = ({ el }: IProps) => {
  return (
    <Li>
      name: {el.name || "нет имени"}; age: {el.age}
    </Li>
  );
};

export default List;
