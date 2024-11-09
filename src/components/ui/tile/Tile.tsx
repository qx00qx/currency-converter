import React from 'react';
import styles from './Tile.module.scss';

type TileProps = {
  children: React.ReactNode;
  width: string;
  height: string;
};

const Tile: React.FC<TileProps> = ({ children, width, height }) => {
  return (
    <div className={styles.tile} style={{ width: `${width}px`, height: `${height}px` }}>
      {children}
    </div>
  );
};

export default Tile;
