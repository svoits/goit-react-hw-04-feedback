import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ feedbackOptions, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {feedbackOptions.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          <span>{option}</span>
        </Button>
      ))}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  feedbackOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
