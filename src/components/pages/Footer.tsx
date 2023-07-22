import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      Desenvolvido por PatriSFS &copy; {new Date().getFullYear()}
    </FooterContainer>
  );
}

export default Footer;
