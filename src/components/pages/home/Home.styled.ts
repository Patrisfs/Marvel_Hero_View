import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: auto;
  border-radius: 1%;
  
  > p {
    color: #fff;
  }
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
  background-color: #3A3B3D;
  outline: none;
  color: white;
  border-radius: 10px;
  width: 250px;
  border: none;
  box-shadow: -1px 2px 2px 1px #00000096;
`;

export const SearchIcon = styled(FaSearch)`
  color: #ffff;
 &:hover{
  color: black;
  transition: 0.3s;
 }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent !important;
  border: none !important;
  position: relative;
  left: -38px;
  background-color: none;
 `;

export const ListItem = styled.li`
  margin: 10px;
  padding:15px ;
  background-color: #242527;
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
