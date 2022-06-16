import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivFeedbackPercentage,
}) => {
  return (
    <div className={s.thumb}>
      <ul className={s.list}>
        <li className={s.item}>
          Good:<span>{good}</span>
        </li>
        <li className={s.item}>
          Neutral:<span>{neutral}</span>
        </li>
        <li className={s.item}>
          Bad:<span>{bad}</span>
        </li>
        <li className={s.item}>
          Total:<span>{totalFeedback}</span>
        </li>
        <li className={s.item}>
          Positive feedback:<span>{positivFeedbackPercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
