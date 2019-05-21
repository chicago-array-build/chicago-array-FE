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
        return (
            <div>
                <form onSubmit={fetchData}>
                    <button type="submit">FETCHMYDATA</button>
                </form>
                <section>
                    <iframe src="" frameborder="2"></iframe>
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