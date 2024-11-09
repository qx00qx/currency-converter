import React, { memo } from 'react';
import styles from './RateInfo.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import clsx from 'clsx';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { Currency } from '../../../types/Currency';

const RateInfo: React.FC = () => {
  const { ratesArray } = useSelector((state: RootState) => state.currencies);

  const currency = ratesArray.find((value) => value.CharCode === 'USD') as Currency;

  const ruFormat = new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 4 }).format(currency?.Value as number);
  const rate = `${currency?.Nominal}  ${currency?.Name} =  ${ruFormat} Российского рубля`;

  const isValueCurrencyUp = currency?.Value < currency?.Previous;

  const num = currency?.Value / currency?.Previous;
  const dynamicsAbsoluteRuble = num.toFixed(2).replace('.', ',');

  return (
    <div className={styles.currency_info}>
      <span>{rate}</span>
      <span
        className={clsx(styles.info, {
          [styles.top]: !isValueCurrencyUp,
          [styles.bottom]: isValueCurrencyUp,
        })}
      >
        <b>
          {isValueCurrencyUp ? (
            <div className={styles.rate_info}>
              <FiTrendingUp size={16} /> {`${dynamicsAbsoluteRuble} ₽`}
            </div>
          ) : (
            <div className={styles.rate_info}>
              <FiTrendingDown size={16} /> {`${dynamicsAbsoluteRuble} ₽`}
            </div>
          )}
        </b>
      </span>
    </div>
  );
};

export default memo(RateInfo);
