import styled from "styled-components";
export const Colorcontent =styled.div`
  justify-content: center;
  min-height: ${(props) => props.$alto};
  width: ${(props) => props.$ancho};
  display: flex;
  background-color: ${(props) => props.$color};
  border-radius: 50%;
  text-align: center;
`