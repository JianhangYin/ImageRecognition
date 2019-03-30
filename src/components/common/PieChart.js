import React from 'react';
import echarts from 'echarts';
import _ from 'lodash';

class PieChart extends React.Component {
  componentDidMount() {
    this.setEchatsConfig(this.props);
  }
  componentWillReceiveProps(nextProps) {
    const { colorPie: oldColorPie } = this.props;
    const { colorPie: newColorPie } = nextProps;
    if (newColorPie.length !== 0 && !_.isEqual(oldColorPie, newColorPie)) {
      this.setEchatsConfig(nextProps);
    }
  }
  setEchatsConfig = (props) => {
    const myChart = echarts.init(document.getElementById('pieChart'));
    const {
      colorData,
      colorPie,
    } = props;
    myChart.setOption({
      series : [
        {
          name: 'color detection',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: colorData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          color: colorPie,
        }
      ]
    });
  };
  render() {
    return(
      <div id="pieChart" style={{ width: 400, height: 400 }}></div>
    );
  }
}

export default PieChart;
