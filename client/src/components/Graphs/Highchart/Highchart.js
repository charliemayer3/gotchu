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
    data: [5, 3, 4, 7, 2],
    _colorIndex: 0
  }, {
    name: 'Family',
    data: [2, 2, 3, 2, 1],
    _colorIndex: 6
  }, {
    name: 'Community',
    data: [3, 4, 4, 2, 5],
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