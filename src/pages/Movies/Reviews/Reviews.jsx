import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsDetails } from 'api-service/reviews-service';
import { Author, Content, Item, List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsDetails(movieId).then(setReviews).catch();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        "We don't have any reviews for this movie"
      ) : (
        <List>
          {reviews.map(({ id, author, content, url }) => {
            return (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Reviews;
