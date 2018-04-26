import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'

class DoughnutChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState( () => ({active: true}))
    }

    render() {

        const data = {
            labels: ['Pop', 'Hip Hop', 'Rock', 'Other'],
            datasets: [{
                label: 'Top 100 Genre Count',
                data: [this.props.data.pop, this.props.data.hiphop, this.props.data.rock, this.props.data.other],
                backgroundColor: ['#A485EC', '#41ACFF', '#FF7D41', '#DFFF41'],
                borderColor: 'black'
            }],
            animation: {
                animateScale: true
            }
        
        }
        
        return (
             <Doughnut 
                data={data}
                label='Genres of the Top 100'
            />
        )
    }

}

export default DoughnutChart