import * as React from "react";
interface IProps {
  isReq?: boolean;
  placeholder: string;
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  value,
  onChange,
  type = "text",
  placeholder = "Введите",
  isReq = false
}: IProps) => {
  return (
    <label>
      {isReq && <span style={{ color: "red" }}>Не заполнено</span>}
      <span>{placeholder}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
