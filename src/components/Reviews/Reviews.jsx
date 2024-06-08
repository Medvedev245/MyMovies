import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../API';
import { Element, List, TextName } from './Reviews.styled';

const Reviews = () => {
  const [review, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const element = await fetchReviews(movieId);
        if (element.length) {
          setReviews(element);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <div>
      {review.length ? (
        <List>
          {review.map(reviewer => {
            const { author, content, id } = reviewer;
            return (
              <Element key={id}>
                <TextName>{author}</TextName>
                <p>{content}</p>
              </Element>
            );
          })}
        </List>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
