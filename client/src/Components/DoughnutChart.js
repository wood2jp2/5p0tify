import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'

export default class DoughnutChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidMount() {
        console.log(this.props.year)
        this.setState( () => ({active: true}))
    }

    render() {

        const data = {
            labels: ['Pop', 'Hip Hop', 'Rock', 'Other'],
            datasets: [{
                label: 'Top 100 Genre Count',
                data: [this.props.data.pop, this.props.data.hiphop, this.props.data.rock, this.props.data.other],
                backgroundColor: ['#A485EC', '#41ACFF', '#FF7D41', '#DFFF41'],
                borderColor: 'black',
                height: '100px'
            }],
            animation: {
                animateScale: true
            },
            options: {
                title: {
                    display: true,
                    text: `Genres of ${this.props.year || 2018} Top 100`,
                    position: 'top',
                }
            }
        }
        
        return (
             <Doughnut 
                data={data}
                label='Genres of the Top 100'
                options={data.options}
            />
        )
    }

}