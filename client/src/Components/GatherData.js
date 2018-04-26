import React, { Component } from 'react'
import DoughnutChart from './DoughnutChart'
import styled from 'styled-components'
import {CalculateButton} from './Styles.js'

class GatherData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      response: [],
      genres: {
        hiphop: 0,
        pop: 0,
        rock: 0,
        other: 0,
      },
      showChart: false,
      2018: false,
      2008: false,
      1998: false
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  callApi = async () => {

    const year = this.props.year ? this.props.year : 2018
    const response = await fetch(`/api/${year}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    // this.setState(() => ({[year]: true}), ()=> {
    //   console.log(this.state)
    // })

    return body;


  };

  calculateGenres(e) {
    e.preventDefault()
    this.state.response.forEach( genre => {

      !genre ? console.log('null value') : 
        genre.includes('hip hop') || genre.includes('rap') ?
        this.setState( prevState => prevState.genres.hiphop++) : 
        genre.includes('pop') ? 
        this.setState( prevState => prevState.genres.pop++) : 
        genre.includes('rock') ? 
        this.setState( prevState => prevState.genres.rock++) : 
        this.setState( prevState => prevState.genres.other++)

    })
    this.setState(() => ({
      showChart: true
    }))
  }

  render() {
    return (
      <div>
      {!this.state.showChart && <CalculateButton
        onClick={e => this.calculateGenres(e)}>
          Calculate Genres of {this.props.year || 2018}
        </CalculateButton> }
        {this.state.showChart && <DoughnutChart data={{...this.state.genres}}/> }
        {this.state[2018] && <GatherData year={2008}/> }
        {this.state[2008] && <GatherData year={1998}/> }
      </div>
    );
  }
}

export default GatherData;
