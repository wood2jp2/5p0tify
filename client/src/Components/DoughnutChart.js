import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'

class DoughnutChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true
        }
    }

    render() {

        const data = {
            labels: ['Pop', 'Hip Hop', 'Rock', 'Other']
        }

        return (
            <Doughnut 
                data={data}
                width={250}
                height={100}
                options={{
                    maintainAspectRatio: false
                }}/>
        )
    }

}

export default DoughnutChart