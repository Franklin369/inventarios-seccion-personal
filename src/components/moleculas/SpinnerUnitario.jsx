import styled from "styled-components";
import {RingLoader} from "react-spinners"
export function SpinnerUnitario() {
  return (<Container>
<RingLoader color="#757575" size={30}/>
  </Container>);
}
const Container =styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${({ theme }) => theme.bgtotal};
  transform: all 0.3s;
`