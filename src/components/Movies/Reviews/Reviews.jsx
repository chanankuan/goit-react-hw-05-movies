import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsDetails } from 'api-service/movie-service';
import { Author, Content, Item, List } from './Reviews.styled';
import { Container, Section } from 'components/Common';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsDetails(movieId).then(setReviews).catch();
  }, [movieId]);

  return (
    <Section>
      <Container>
        {reviews.length === 0 ? (
          "We don't have any reviews for this movie"
        ) : (
          <List>
            {reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </Item>
            ))}
          </List>
        )}
      </Container>
    </Section>
  );
};

export default Reviews;
