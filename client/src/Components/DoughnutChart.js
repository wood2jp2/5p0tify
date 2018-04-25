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

        console.log(this.props.data.pop)

        const data = {
            labels: ['Pop', 'Hip Hop', 'Rock', 'Other'],
            datasets: [{
                label: 'Top 100 Genre Count',
                // data: [25, 10, 15, 20],
                data: [this.props.data.pop, this.props.data.hiphop, this.props.data.rock, this.props.data.other],
            }]
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