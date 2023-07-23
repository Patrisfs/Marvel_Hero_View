import loading from './../assets/loading.svg';
import styled from 'styled-components';


const Loader_container =styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <Loader_container>
      <img src={loading} alt="Loading" />
    </Loader_container>
  )
}

export default Loading