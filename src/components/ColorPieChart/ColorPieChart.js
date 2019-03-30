import React from 'react';
import echarts from 'echarts';

class ColorPieChart extends React.Component {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('pieChart'));
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }

  render() {
    return(
      <div id="pieChart" style={{ width: 400, height: 400 }}></div>
    );
  }
}

export default ColorPieChart;
