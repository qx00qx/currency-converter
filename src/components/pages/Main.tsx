import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { fetchAllCurrency } from '../../redux/slices/currencies/currenciesSlice';
import { fetchInitialCurrencyData } from '../../redux/slices/convert/convertSlice';
import Tile from '../ui/tile/Tile';
import RateInfo from '../ui/rate_info/RateInfo';
import AmoutContainer from '../ui/amout_container/AmoutContainer';
import RateList from '../ui/rate_list/RateList';
import LineChart from '../ui/line-chart/LineChart';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCurrency());
    dispatch(fetchInitialCurrencyData());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='container-left'>
        <Tile width='650' height='325'>
          <AmoutContainer />
          <RateInfo />
        </Tile>
        <Tile width='650' height='163'>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '15px',
            }}
          >
            Текущие курсы
          </h2>
          <RateList />
        </Tile>
      </div>
      <Tile width='613' height='519'>
        <LineChart />
      </Tile>
    </div>
  );
};

export default Main;
