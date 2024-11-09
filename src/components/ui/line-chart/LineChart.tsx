import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from './LineChart.module.scss';
import { rateTrend } from '../../../utils/rateTrend';

const LineChart: React.FC = () => {
  const chartData = rateTrend.map((item) => ({
    name: item.date,
    y: item.value,
  }));

  const options = {
    chart: {
      type: 'area',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      animation: false,
    },
    accessibility: {
      enabled: false,
    },
    title: {
      text: null,
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    series: [
      {
        name: '',
        data: chartData,
        color: '#75BB8E',
        fillOpacity: 0.1,
        marker: {
          enabled: false,
        },
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className={styles.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
