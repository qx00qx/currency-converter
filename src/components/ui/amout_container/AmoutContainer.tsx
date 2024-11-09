import React from 'react';
import AmoutInput from '../amout_input/AmoutInput';
import ConverterSwamp from '../converter_swamp/ConverterSwamp';
import styles from './AmoutContainer.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setFromValue, setToValue } from '../../../redux/slices/convert/convertSlice';

const AmoutContainer: React.FC = () => {
  const { fromValue, toValue, toCurrency } = useSelector((state: RootState) => state.convert);
  const { ratesArray } = useSelector((state: RootState) => state.currencies);

  const dispatch = useAppDispatch();
  const selectedCurrencyValueinRub = ratesArray.find((cur) => cur.CharCode === toCurrency)?.Value;

  const convertFromValue = (value: number) => {
    if (selectedCurrencyValueinRub) {
      const newValue = value / selectedCurrencyValueinRub;
      dispatch(setToValue(Number(newValue.toFixed(2))));
    } else {
      alert('Нет курса');
    }
    dispatch(setFromValue(value));
  };

  const handleCurrencyToRuble = (value: number) => {
    const value2 = selectedCurrencyValueinRub; /* Другая валюты в рублях */
    if (value2) {
      const sumInRubles = toValue * value2;
      dispatch(setFromValue(Number(sumInRubles.toFixed(2))));
    }
    dispatch(setToValue(value));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, isFromInput: boolean) => {
    const newValue = parseFloat(e.target.value);
    isFromInput ? convertFromValue(newValue) : handleCurrencyToRuble(newValue);
  };

  return (
    <div className={styles.amout_container}>
      <AmoutInput value={toValue} isFromInput={false} onChange={(e) => onChangeInput(e, false)} />
      <ConverterSwamp />
      <AmoutInput value={fromValue} isFromInput={true} onChange={(e) => onChangeInput(e, true)} />
    </div>
  );
};

export default AmoutContainer;
