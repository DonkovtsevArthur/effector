import * as React from "react";
import NavStyle from "./styles";

interface IProps {
  isActiveForm: boolean;
  onClick: () => any;
}
const CloseForm = ({ onClick, isActiveForm }: IProps) => {
  return (
    <NavStyle onClick={onClick}>
      {isActiveForm ? "Скрыть форму" : "Показать форму"}
    </NavStyle>
  );
};

export default CloseForm;
