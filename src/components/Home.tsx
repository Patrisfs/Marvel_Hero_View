import React, { useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const publicKey = 'd723882c93ea079496dfb631b7ebda81';
const privateKey = '6ab6d502842f519c3cd7dc9212f7c1042c4ffce1';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const CharacterThumbnail = styled.img`
  max-width: 200px;
  height: auto;
`;

const Home = () => {
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      const filteredCharacters = response.data.data.results.filter((character) =>
        character.name.toLowerCase().includes(characterName.toLowerCase())
      );
      setCharacters(filteredCharacters);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Pesquisar por nome"
        />
        <Button type="submit">Pesquisar</Button>
      </Form>

      {characters.length > 0 ? (
        <List>
          {characters.map((character) => (
            <ListItem key={character.id}>
            <h2>{character.name}</h2>
            {character.thumbnail && (
              <div>
                <Link to={`/description/${character.id}`}>
                  <CharacterThumbnail
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                </Link>
              </div>
              )}
              </ListItem>
          ))}
        </List>
      ) : (
        <p>Nenhum personagem encontrado.</p>
      )}
    </Container>
  );
};

export default Home;
