import React from 'react';
import styles from './Layout.module.scss';
import Header from '../ui/header/Header';
import Footer from '../ui/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
