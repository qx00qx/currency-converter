import { FaAngleDown } from 'react-icons/fa';
import { Select } from '@chakra-ui/react';
import styles from './CurrencySelect.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setFromCurrency, setFromValue, setToCurrency, setToValue } from '../../../redux/slices/convert/convertSlice';

const CurrencySelector: React.FC<{ isFromInput: boolean }> = ({ isFromInput }) => {
  const { ratesArray } = useSelector((state: RootState) => state.currencies);
  const { fromCurrency, toCurrency, fromValue } = useSelector((state: RootState) => state.convert);
  const dispatch = useAppDispatch();

  const selectedCurrencyValueinRub = ratesArray.find((cur) => cur.CharCode === toCurrency)?.Value;

  const handleCurrencyToRuble = (value: number, selectedCurrency: string) => {
    const value2 = selectedCurrencyValueinRub; /* Выбранная валюта в рублях */

    console.log(value);
    console.log(value2);

    if (value2) {
      const sumInRubles = value * value2;
      dispatch(setFromValue(sumInRubles));
      console.log(sumInRubles);
    }
    dispatch(setToValue(value));
    dispatch(setFromCurrency(selectedCurrency));
  };

  const setSelectedCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    isFromInput ? handleCurrencyToRuble(fromValue, selectedCurrency) : dispatch(setToCurrency(selectedCurrency));
  };

  const rubValue = ratesArray.find((value) => value.CharCode === 'RUB');

  return (
    <Select
      style={{
        width: 'auto',
        borderRadius: '15px',
      }}
      value={isFromInput ? fromCurrency : toCurrency}
      size='lg'
      icon={<FaAngleDown />}
      onChange={(e) => setSelectedCurrency(e)}
      variant='filled'
    >
      {isFromInput ? (
        /* Если это fromCurrency, показываем только RUB */
        <option value='RUB' className={styles.option}>
          {rubValue ? `${rubValue.CharCode}` : 'RUB'}
        </option>
      ) : (
        /* Если это toCurrency, показываем все валюты кроме RUB */
        ratesArray.map((currency) => (
          <option value={currency.CharCode} className={styles.option} key={currency.ID}>
            {currency.CharCode}
          </option>
        ))
      )}
    </Select>
  );
};

export default CurrencySelector;
