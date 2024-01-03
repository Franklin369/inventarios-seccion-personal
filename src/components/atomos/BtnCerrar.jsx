import styled from "styled-components";
import { v } from "../../styles/variables";
export function BtnCerrar({ funcion }) {
  return <Container onClick={funcion}>{<v.iconocerrar />}</Container>;
}
const Container = styled.div`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    color: ${v.colorselector};
  }
`;
