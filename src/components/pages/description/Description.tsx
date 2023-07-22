import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../../styles/global';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import {Link,Container, Content, CharacterThumbnail, ContentWrapper} from './Description.styled'
import Loading from '../../Loading';

const publicKey = 'd723882c93ea079496dfb631b7ebda81';
const privateKey = '6ab6d502842f519c3cd7dc9212f7c1042c4ffce1';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const Description = () => {
  const { id } = useParams(); //???????
  const [hero, setHero] = useState(null);
  const [comics, setComics] = useState([]);
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`
        );
        const character = response.data.data.results[0];

        setHero(character);
        setComics(character.comics.items);
        setStories(character.stories.items);
        setEvents(character.events.items);
        setSeries(character.series.items);
        setRemoveLoading(true);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!hero) {
    return <Loading/>
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentWrapper>
        <Content>
          <a href="/">Voltar</a>
          <p>{hero.description}</p>
        </Content>
          <Content>
            <h3>Quadrinhos</h3>
            {comics.length > 0 ? (
              <ul>
                {comics.map((comic) => (
                  <li key={comic.resourceURI}>
                    <Link href={comic.resourceURI} target="_blank" rel="noopener noreferrer">
                      {comic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum quadrinho encontrado.</p>
            )}
          </Content>

          <Content>
            <h3>Histórias</h3>
            {stories.length > 0 ? (
              <ul>
                {stories.map((story) => (
                  <li key={story.resourceURI}>
                    <Link href={story.resourceURI} target="_blank" rel="noopener noreferrer">
                      {story.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma história encontrada.</p>
            )}
          </Content>

          <Content>
            <h3>Eventos</h3>
            {events.length > 0 ? (
              <ul>
                {events.map((event) => (
                  <li key={event.resourceURI}>
                    <Link href={event.resourceURI} target= "_blank" rel="noopener noreferrer">
                      {event.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum evento encontrado.</p>
            )}
          </Content>

          <Content>
            <h3>Séries</h3>
            {series.length > 0 ? (
              <ul>
                {series.map((serie) => (
                  <li key={serie.resourceURI}>
                    <Link href={serie.resourceURI} target="_blank" rel="noopener noreferrer">
                      {serie.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma série encontrada.</p>
            )}
          </Content>
        </ContentWrapper>
        <ContentWrapper>
          <div>
            <CharacterThumbnail src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
            <h2>Nome: {hero.name}</h2>
          </div>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Description;
