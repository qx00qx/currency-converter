import React, { memo } from 'react';
import styles from './RateInfo.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import clsx from 'clsx';
import { Currency } from '../../../types/Currency';

const RateInfo: React.FC = () => {
  const { ratesArray } = useSelector((state: RootState) => state.currencies);

  const currency = ratesArray.find((value) => value.CharCode === 'USD') as Currency;

  const ruFormat = new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 4 }).format(currency?.Value as number);
  const rate = `${currency?.Nominal}  ${currency?.Name} =  ${ruFormat} Российского рубля`;

  const isValueCurrencyUp = currency?.Value > currency?.Previous;

  const num = currency?.Value / currency?.Previous;
  const dynamicsAbsoluteRuble = num.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

  return (
    <div className={styles.currency_info}>
      <span>ЦБ РФ</span>
      <div>
        <span>{rate}</span>
        <span
          className={clsx(styles.info, {
            [styles.top]: isValueCurrencyUp,
            [styles.bottom]: !isValueCurrencyUp,
          })}
        >
          <b>{isValueCurrencyUp ? `↓ ${dynamicsAbsoluteRuble}` : `↑ ${dynamicsAbsoluteRuble}`}</b>
        </span>
      </div>
    </div>
  );
};

export default memo(RateInfo);
