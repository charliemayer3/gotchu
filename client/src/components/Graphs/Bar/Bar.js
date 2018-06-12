import React, { PureComponent } from 'react';
import ReactEcharts from '../../../GraphComponents/index';

export default class Bar extends PureComponent {
  getOption = () => ({
    title: {
      text: 'Contributions'
    },
    tooltip: {},
    legend: {
      data:['TESTINGTESTING']
    },
    xAxis: {
      data: ['Hunger', 'Health / Well-being', 'Education', 'Clean Water / Sanitation', 'Poverty', 'Environment']
    },
    yAxis: {},
    series: [{
      name: 'Contribution in $USD',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  })

  render() {
    let code = "<ReactEcharts \n" +
      "  option={this.getOtion()} \n" +
      "  style={{height: '400px', width: '100%'}}  \n" +
      "  opts={{renderer: 'svg'}}  \n" +
      "  className='react_for_echarts' />";
    return (
      <div className='examples'>
        <div className='parent'>
          <ReactEcharts
            option={this.getOption()}
            style={{height: '400px', width: '100%'}}
            opts={{ renderer: 'svg' }}
            className='react_for_echarts' />
        </div>
      </div>
    );
  }
}
