import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.statisticsString}>
        Good: <span className={css.good}>{good}</span>
      </p>
      <p className={css.statisticsString}>
        Neutral: <span className={css.neutral}>{neutral}</span>
      </p>
      <p className={css.statisticsString}>
        Bad: <span className={css.bad}>{bad}</span>
      </p>
      <p className={css.statisticsString}>
        Total: <span className={css.total}>{total()}</span>
      </p>
      <p className={css.statisticsString}>
        Positive feedback:{' '}
        <span className={css.good}>{positivePercentage()}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
