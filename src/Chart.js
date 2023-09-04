import React from 'react';
import LineRaceChart from './LineRaceChart';

const Chart = () => {
  const data = {
    '': {
        LineA: [1350, 1369, 1438, 1439, 1456, 1619, 1994, 1723, 2156, 2530],
    },
  };

  return (
    <div className="App">
      {/* <h1>비상교육 매출액 차트</h1> */}
      <LineRaceChart data={data}/>
    </div>
  );
};

export default Chart;
