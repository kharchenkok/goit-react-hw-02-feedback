import React from 'react';
import StatisticsStyles from './StatisticsStyles.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ options, total, positiveFeedback }) {
  return (
    <ul className={StatisticsStyles.statistic__list}>
      {Object.entries(options).map(el => (
        <li className={StatisticsStyles.statistic__item} key={el[0]}>
          <p className={StatisticsStyles.statistic__name}>{el[0]}:</p>
          <p className={StatisticsStyles.statistic__value}>{el[1]}</p>
        </li>
      ))}

      <li className={StatisticsStyles.statistic__item}>
        <p className={StatisticsStyles.statistic__name}>Total:</p>
        <p className={StatisticsStyles.statistic__value}>{total}</p>
      </li>
      <li className={StatisticsStyles.statistic__item}>
        <p className={StatisticsStyles.statistic__name}>Positive feedback:</p>
        <p className={StatisticsStyles.statistic__value}>{positiveFeedback}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,

  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number,
};
