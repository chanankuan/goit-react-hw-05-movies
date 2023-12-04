import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastDetails } from 'api-service/movie-service';
import { Flex, Item, Image, Name, Character } from './Cast.styled';
import defaultImg from '../../../assets/images/nopersonphoto.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastDetails(movieId).then(setCast).catch();
  }, [movieId]);

  return (
    <Flex>
      {cast.map(({ credit_id, name, character, profile_path }) => {
        const profileUrl = profile_path
          ? `https://image.tmdb.org/t/p/w300${profile_path}`
          : defaultImg;

        return (
          <Item key={credit_id}>
            <Image src={profileUrl} alt={name} />
            <Name>{name}</Name>
            <Character>
              Character:
              <br />
              {character}
            </Character>
          </Item>
        );
      })}
    </Flex>
  );
};

export default Cast;
