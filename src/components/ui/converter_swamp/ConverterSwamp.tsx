import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import SwitcherIcon from '../switcher/SwitcherIcon';

const ConverterSwamp: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleSwitch = () => {};
  return (
    <IconButton
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        width: '47px',
        height: '47px',
        top: '65px',
        left: '20px',
      }}
      onClick={handleSwitch}
      icon={<SwitcherIcon />}
      variant={'none'}
      aria-label='Поменять валюту местами'
    />
  );
};

export default ConverterSwamp;
