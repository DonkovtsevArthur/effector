import styled from "~/styles/styled-components";
// import { rem } from "~/styles/utils";

interface IPropsStyles {
  isActiveForm: boolean;
}
const AddUsersStyle = styled.form<IPropsStyles>`
  display: flex;
  visibility: ${({ isActiveForm }) => (!isActiveForm ? "hidden" : "visible")};
  animation: ${({ isActiveForm }) => (!isActiveForm ? "fadeOut" : "fadeIn")}
    0.35s ease;
  transition: 0.55s, width 0.45s, visibility 0.25s ease;
  width: ${({ isActiveForm }) => (isActiveForm ? "20%" : "0")};
  position: relative;
  left: ${({ isActiveForm }) => (isActiveForm ? "0" : "-1000px")};
  flex-direction: column;
  & label {
    display: flex;
    flex-direction: column;
  }
`;

export default AddUsersStyle;
