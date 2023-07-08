import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: auto;
  border-radius: 1%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: auto;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  margin: 10px;
  padding:15px ;
  background-color: #1A1A24;
  color: white;
  align-items: center;
  text-align: center;
  border-radius: 5%;
  width: 200px;
`;

export const CharacterThumbnail = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: white 3px solid;
`;
