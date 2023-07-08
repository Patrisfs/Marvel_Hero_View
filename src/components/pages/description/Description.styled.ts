import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  width: 600px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 1%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const Content = styled.div`
  margin-bottom: 20px;
  border-bottom: 0.1rem solid #CECECE;
`;
export const CharacterThumbnail = styled.img`
  max-width: 200px;
  height: auto;
`;

export const Link = styled.a`
color: #006cb0;
padding: 5px 10px;
text-decoration: none;

&:hover {
  color: #004672;
}
`;