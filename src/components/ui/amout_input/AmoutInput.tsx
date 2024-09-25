import React from 'react';
import styles from './AmoutInput.module.scss';
import CurrencySelector from '../currency_selector/CurrencySelector';

interface AmountInputProps {
  value: number;
  isFromInput: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmoutInput: React.FC<AmountInputProps> = ({ value, onChange, isFromInput }) => {
  return (
    <div className={styles.amout}>
      <div className={styles.amout_text_input_wrapper}>
        <span className={styles.amout_text_input}>
          <input type='number' value={value} onChange={(e) => onChange(e)} />
        </span>
      </div>
      <span className={styles.selector}>
        <CurrencySelector isFromInput={isFromInput} />
      </span>
    </div>
  );
};

export default AmoutInput;
