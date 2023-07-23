import cityImage from '../../assets/city.jpg';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-image: url(${cityImage});
  background-repeat: repeat-x;
  background-size: contain;
  height: 200px;
`;

function Header() {
  return (
    <HeaderContainer>
    </HeaderContainer>
  )
}

export default Header