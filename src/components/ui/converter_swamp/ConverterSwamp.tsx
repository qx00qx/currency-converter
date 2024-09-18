import { IconButton } from '@chakra-ui/react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import React from 'react';

const ConverterSwamp: React.FC = () => {
  return (
    <IconButton
      icon={<FaArrowRightArrowLeft />}
      aria-label='Поменять валюту местами'
    />
  );
};

export default ConverterSwamp;
