import React from 'react'

import { connect } from 'react-redux';
import { fetchData } from '../../actions';

// Styling
import './test.css';

// Components
import CopyURL from "../copyurl/CopyURL";
import Filters from "./Filters";


class Test extends React.Component{
    state = {
        "sensor_type": "Environmental Data",
        "measure": "Temperature",
        "time_period": 7,
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
                <section className="fetch-copy">
                    <CopyURL />
                    <button className="fetch-RSD" onClick={this.fetchData} type="submit">RETRIEVE SENSOR DATA</button>
                </section>
                <div className="filt-n-iframe">
                    <section>
                        <Filters />
                    </section>
                    <section>
                        <iframe src={this.props.caotData || "https://plot.ly/~chris/1638"} title="myGraph" frameBorder="5" width="1000px" height="600px"></iframe>
                    </section>
                </div>
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