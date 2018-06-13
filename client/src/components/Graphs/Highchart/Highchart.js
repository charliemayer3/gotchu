import React, { Component } from 'react';
import './Highchart.css';
import Highcharts from 'highcharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}

class Highchart extends Component {
  render() {
    const options = {
      chart: {
    type: 'bar'
  },
  title: {
    text: 'Your Personal Contribution'
  },
  xAxis: {
    categories: ['Hunger', 'Health / Well-being', 'Education', 'Clean Water / Sanitation', 'Poverty', 'Environment']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'People Helped'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Individual',
    data: [15, 23, 14, 27, 32],
    _colorIndex: 0
  }, {
    name: 'Family',
    data: [22, 12, 23, 32, 11],
    _colorIndex: 6
  }, {
    name: 'Community',
    data: [31, 42, 14, 22, 15],
    _colorIndex: 9
  },
  ],
};

    return (
      <div>
        <Chart options={options} />
      </div>
    );
  }
}

export default Highchart;