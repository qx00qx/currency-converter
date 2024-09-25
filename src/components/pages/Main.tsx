import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import RateInfo from '../ui/currency_info/RateInfo';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { fetchAllCurrency } from '../../redux/slices/currencies/currenciesSlice';
import AmoutContainer from '../ui/amout_container/AmoutContainer';
import { fetchInitialCurrencyData } from '../../redux/slices/convert/convertSlice';
const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCurrency());
    dispatch(fetchInitialCurrencyData());
  }, [dispatch]);

  return (
    <article>
      <Flex flexDirection={'column'}>
        <AmoutContainer />
        <RateInfo />
      </Flex>
    </article>
  );
};

export default Main;
