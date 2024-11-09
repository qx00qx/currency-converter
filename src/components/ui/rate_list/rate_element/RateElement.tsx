import React from 'react';
import styles from './RateElement.module.scss';
import { currencyToCountry } from '../../../../utils/countryList';

type RateElementProps = {
  toCur: string;
  fromCur: string;
  value: number;
};
const RateElement: React.FC<RateElementProps> = ({ toCur, fromCur, value }) => {
  return (
    <div className={styles.rate_element}>
      <div className={styles.top}>
        <span>{currencyToCountry[toCur]}</span>
        <div>
          <span>{toCur}</span>
          <span>{fromCur}</span>
        </div>
      </div>
      <span className={styles.value}>{value.toFixed(2).replace('.', ',')}</span>
    </div>
  );
};

export default RateElement;
