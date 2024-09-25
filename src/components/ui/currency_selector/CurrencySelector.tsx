import { FaAngleDown } from 'react-icons/fa';
import { Select } from '@chakra-ui/react';
import styles from './CurrencySelect.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { currencyToCountry } from '../../../utils/countryList';
import { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setFromCurrency, setToCurrency } from '../../../redux/slices/convert/convertSlice';

const CurrencySelector: React.FC<{ isFromInput: boolean }> = ({ isFromInput }) => {
  const { ratesArray } = useSelector((state: RootState) => state.currencies);
  const { fromCurrency, toCurrency } = useSelector((state: RootState) => state.convert);
  const dispatch = useAppDispatch();

  const setSelectedCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    isFromInput ? dispatch(setFromCurrency(selectedCurrency)) : dispatch(setToCurrency(selectedCurrency));
  };

  const rubValue = ratesArray.find((value) => value.CharCode === 'RUB');

  return (
    <Select
      style={{
        width: 'auto',
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
          {rubValue ? `${rubValue.CharCode} ${currencyToCountry[rubValue.CharCode]}` : 'RUB'}
        </option>
      ) : (
        /* Если это toCurrency, показываем все валюты кроме RUB */
        ratesArray.map((currency) => (
          <option value={currency.CharCode} className={styles.option} key={currency.ID}>
            {currencyToCountry[currency.CharCode]} {currency.CharCode}
          </option>
        ))
      )}
    </Select>
  );
};

export default CurrencySelector;
