import React from 'react';
import PieChart from '../common/PieChart';
import style from './ColorPieChart.module.css';

class ColorPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorData: [],
      colorPie: [],
    };
  }
  componentDidMount() {
    this.updateColorInfo();
  }
  updateColorInfo = () => {
    const { colorInfo } = this.props;
    let colorData = [];
    let colorPie = [];
    colorInfo.forEach((colorItem) => {
      const colorValue = colorItem.value;
      const colorName = colorItem.raw_hex;
      colorData.push({value: colorValue, name: colorName});
      colorPie.push(colorName);
    });
    this.setState({
      colorData,
      colorPie,
    });
  };
  render() {
    const {
      colorData,
      colorPie,
    } = this.state;
    return (
      <div className={style.panel}>
        <PieChart
          colorData={colorData}
          colorPie={colorPie}
        />
      </div>
    );
  }
}

export default ColorPieChart;
