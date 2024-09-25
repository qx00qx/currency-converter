import React from 'react';
import AmoutInput from '../amout_input/AmoutInput';
import ConverterSwamp from '../converter_swamp/ConverterSwamp';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setFromValue, setToValue } from '../../../redux/slices/convert/convertSlice';

const AmoutContainer: React.FC = () => {
  const { fromValue, toValue, fromCurrency, toCurrency } = useSelector((state: RootState) => state.convert);
  const { ratesArray } = useSelector((state: RootState) => state.currencies);

  const dispatch = useAppDispatch();

  const selectedCurrencyValueinRub = ratesArray.find((cur) => cur.CharCode === toCurrency)?.Value;

  const convertToValue = (value: number) => {};
  const convertFromValue = (value: number) => {
    console.log('Введенное значение' + ' ' + value);
    if (selectedCurrencyValueinRub) {
      const newValue = value / selectedCurrencyValueinRub;
      dispatch(setToValue(Number(newValue.toFixed(2))));
    } else {
      console.log('Нет курса');
    }
    dispatch(setFromValue(value));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, isFromInput: boolean) => {
    const newValue = parseFloat(e.target.value);

    isFromInput ? convertFromValue(newValue) : convertToValue(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <AmoutInput value={toValue} isFromInput={false} onChange={(e) => onChangeInput(e, false)} />
      <ConverterSwamp />
      <AmoutInput value={fromValue} isFromInput={true} onChange={(e) => onChangeInput(e, true)} />
    </div>
  );
};

export default AmoutContainer;
