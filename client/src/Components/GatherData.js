import React, { Component } from 'react';
import DoughnutChart from './DoughnutChart'

class GatherData extends Component {

  state = {
    response: [],
    hiphop: 0,
    pop: 0,
    rock: 0,
    other: 0,
    showChart: false
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hey');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getState(e) {
    e.preventDefault()
    this.state.response.forEach( genre => {
      if (!genre) {
        console.log('null value')
      } else if (genre.includes('hip hop') || genre.includes('rap')) {
        this.setState( prevState => prevState.hiphop++)
      } else if (genre.includes('pop')) {
        this.setState( prevState => prevState.pop++)
      } else if (genre.includes('rock')) {
        this.setState( prevState => prevState.rock++)
      } else {
        this.setState( prevState => prevState.other++)
      }
    })
    this.setState(() => ({
      showChart: true
    }))
  }

  render() {
    return (
      <div>

        <button 
        onClick={e => this.getState(e)}>Calculate Genres </button>
        {this.state.showChart && 
        <DoughnutChart data={{
          pop: this.state.pop,
          rock: this.state.rock,
          other: this.state.other,
          hiphop: this.state.hiphop
        }}/> }
      </div>
    );
  }
}

export default GatherData;
