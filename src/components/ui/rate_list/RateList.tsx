import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import RateElement from './rate_element/RateElement';
import styles from './RateList.module.scss';

const RateList: React.FC = () => {
  const { ratesArray } = useSelector((state: RootState) => state.currencies);
  return (
    <ul className={styles.rate_list}>
      {ratesArray.slice(1).map((rate, index) => (
        <li key={index}>
          <RateElement toCur={rate.CharCode} fromCur={'RUB'} value={rate.Value} />
        </li>
      ))}
    </ul>
  );
};

export default RateList;
