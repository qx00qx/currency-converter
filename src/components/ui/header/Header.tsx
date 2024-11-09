import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src='/logo.svg' alt='SwapCoin' />
      </div>
    </header>
  );
};

export default Header;
