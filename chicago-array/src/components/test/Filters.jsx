import React from 'react';

// Styles
import './test.css'

class Filters extends React.Component{
    state = {
        sensor_options: ["ED", "AQ", "IP"],
        measure_options: ["Temp", "Ozone", "Vehicle Count", "Ped Count"],
        // time_options: [24, 7],
        request: {
        "sensor_type": "",
        "measure": "",
        "time_period": 7,
        "community_area": "all",
        }
    }

    
    render(){
        return (
            <div className="filter-drops">
                {/* <nav focus="navigation"> */}
                    <ul className="primeUL">
                        <li> <a href="">SENSORS</a></li>
                            <ul className="dropdown">
                                {this.state.sensor_options.map(sensor => {
                                    return (
                                        <li><a href="#">{sensor}</a></li>
                                    )
                                })}
                            </ul>
                        <li> <a href="">MEASURES</a></li>
                            <ul className="dropdown">
                                {this.state.measure_options.map(measure => {
                                    return (
                                        <li><a href="#">{measure}</a></li>
                                    )
                                })}
                            </ul>
                    </ul>
                {/* </nav>             */}
            </div>
        )
    }

}

export default Filters