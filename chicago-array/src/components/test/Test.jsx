import React from 'react'

import { connect } from 'react-redux';
import { fetchData } from '../../actions';

class Test extends React.Component{
    state = {
        "sensor_type": "Environmental Data",
        "measure": "Temperature",
        "time_period": 24,
        "community_area": "Uptown",
    }

    fetchData = (event) => {
        event.preventDefault()
        this.props.fetchData(this.state)
    }

    render(){
        console.log(this.props.caotData)
        console.log(this.props.error)
        return (
            <div>
                <form onSubmit={this.fetchData}>
                    <button onClick={this.fetchData} type="submit">FETCHMYDATA</button>
                </form>
                <section>
                    <iframe src={this.props.caotData || "https://plot.ly/~chris/1638"} title="myGraph" frameBorder="5" width="1000px" height="600px"></iframe>
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