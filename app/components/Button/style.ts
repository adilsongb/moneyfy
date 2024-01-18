import Theme from "@theme";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 50px;
  background-color: ${Theme.color.primary};
  align-items: center;
  justify-content: center;
`;
