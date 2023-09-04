import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineRaceChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

    const option = {
      // timeline: {
      //   axisType: 'category',
      //   autoPlay: true,
      //   playInterval: 600,
      //   controlStyle: { // controlStyle 설정 추가
      //     showPlayBtn: false, // 재생 버튼 숨김
      //     showPrevBtn: false, // 이전 버튼 숨김
      //     showNextBtn: false, // 다음 버튼 숨김
      //   },
      // },
      options: [],
      toolbox: { // toolbox 옵션 추가
        show: false, // 스크롤바 및 다른 도구 숨김
      },
      timeline: { // timeline 옵션 추가
        show: false, // 타임라인 숨김
      },


    };
    const getSeriesColor = index => {
      const colors = ['#00B6E4'];
      return colors[index % colors.length]; // 색상 순환하도록 설정
    };
  
    Object.keys(data).forEach(time => {
      const series = Object.entries(data[time]).map(([name, value], index) => ({
        name,
        type: 'line',
        data: value,
        yAxisIndex: 0, // y축 인덱스 설정 추가
        itemStyle: {
          color: getSeriesColor(index), // 시리즈마다 다른 색상을 설정
        },
      }));

      option.options.push({
        animationDuration: 5000,
        title: {
          text: '비상교육 최근 10년 매출',
          left: 'center', // 제목을 가운데로 정렬
          textStyle : {
            color: 'black', // 원하는 색상으로 설정
          }
        },
    
        xAxis: {
          data: years, // 연도 데이터를 직접 넣어줌
          // axisLabel: { // axisLabel 설정 추가
          //   show: false, // X축 라벨 숨김
          // },
          axisLine: {
            lineStyle: {
              color: 'black', // x축 눈금과 레이블 색상
            },
          },
        },
        yAxis: { // y축 설정 추가
          type: 'value',
          name: '매출액 (단위 : 억원)',
          min: 1000, // y축 최소값
          max: 2600,
          interval: 200, // y축 눈금 간격
          axisLine: {
            lineStyle: {
              color: 'black', // y축 눈금과 레이블 색상
            },
          },

        },
        series
      });
    });

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw', // 100% 너비
      height: '100vh', // 100% 높이
    }}
    >
      <div
        style={{
          display: 'flex',
          width: '50%',
          height: '70%',
          justifyContent: 'center',
          alignItems: 'center',
    
          background: 'white', // 배경색을 하얀색으로 설정
          // border: '2px solid black', // 테두리 색상을 #0091FA로 설정
          paddingRight: '0px',
          borderRadius: '15px',
        }}
      >
        <div ref={chartRef} style={{ width: '100%', height: '80%', marginLeft: '6%'}}></div>
      </div>
    </div>
  );
};

export default LineRaceChart;
