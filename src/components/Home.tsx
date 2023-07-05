import React, { useState} from 'react';
import axios from 'axios';
import md5 from 'md5';

const publicKey = 'd723882c93ea079496dfb631b7ebda81';
const privateKey = '6ab6d502842f519c3cd7dc9212f7c1042c4ffce1';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);


const Home = () => {
  //gerenciamento de estados
  const [characterId, setCharacterId] = useState('');

  const handleSubmit= (e)=>{
  setCharacterId(e.target.value);
  }
  const handleButtonClick = () => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => console.log(response.data.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
        <input type="text" onChange={handleSubmit}/>
        <button type="submit" onClick={handleButtonClick}>Pesquisar</button>
    </div>
  );
};

export default Home;
