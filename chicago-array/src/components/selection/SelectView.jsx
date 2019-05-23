import React from 'react'

import { connect } from 'react-redux';

// Styling
import './selection.css';

// Components
import CopyURL from "../copyurl/CopyURL";
import Filters from "./Filter";
import GraphHistory from "../graphhistory/GraphHistory";


class Test extends React.Component{

    render(){
        // console.log(this.props.caotData)
        // console.log(this.props.error)
        return (
            <div>
                <div className="select-view-container">
                    <div className="filt-n-graph-hist">
                        <section className="selectors">
                            <Filters />
                        </section>
                        <section className="graph-hist">
                            <GraphHistory />
                        </section>
                    </div>
                    <section>
                        <iframe src={this.props.caotData || "https://plot.ly/~chris/1638"} title="myGraph" frameBorder="5" width="1000px" height="600px"></iframe>
                    </section>
                </div>
                {this.props.caotData && (
                    <section className="fetch-copy">
                        <CopyURL />
                    </section>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotData: state.caotData,
    error: state.error,
}) 

export default connect(
    mapStateToProps, 
)(Test)