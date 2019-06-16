import * as React from "react";
interface IProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ value, handleChange }: IProps) => {
  return (
    <label>
      Добавить пользователя
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};

export default Input;
