import React from 'react'

import { connect } from 'react-redux';
import { fetchData } from '../../actions';

class Test extends React.Component{
    state = {
        Sensor_Type: "Environmental Data",
        Measure: "Temperature",
        Time: "Last 24 hours",
        Community_area: "Uptown",
    }

    fetchData = (event) => {
        event.preventDefault()
        this.props.fetchData(this.state)
    }

    render(){
        // console.log(this.props.caotData)
        console.log(this.props.error)
        return (
            <div>
                <form onSubmit={this.fetchData}>
                    <button onClick={this.fetchData} type="submit">FETCHMYDATA</button>
                </form>
                <section>
                    <iframe src={this.props.caotData} title="myGraph" frameBorder="5" width="500px" height="300px"></iframe>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
}) 

export default connect(
    mapStateToProps, 
    { fetchData }
)(Test)