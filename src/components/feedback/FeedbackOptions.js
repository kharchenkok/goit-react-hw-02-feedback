import React from 'react';
import PropTypes from 'prop-types';
import FeedbackStyles from './FeedbackStyles.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  //  console.log('options',Object.entries(options).map(el=>el));
  return (
    <>
      {Object.entries(options).map(el => (
        <button
          key={el[0]}
          type="button"
          onClick={onLeaveFeedback}
          name={el[0]}
          value={el[1]}
          className={FeedbackStyles.button}
        >
          {el[0]}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
