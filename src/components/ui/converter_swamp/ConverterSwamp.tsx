import { IconButton } from '@chakra-ui/react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';

const ConverterSwamp: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleSwitch = () => {};
  return (
    <IconButton onClick={handleSwitch} icon={<FaArrowRightArrowLeft />} variant={'none'} aria-label='Поменять валюту местами' />
  );
};

export default ConverterSwamp;
