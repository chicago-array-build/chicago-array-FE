import React from 'react';
import { connect } from 'react-redux';

class GraphHistory extends React.Component{
    state = {
        myurl: '',
    }

    render(){
        // console.log(this.props)
        return (
            
            <div>
                <h4>Graph History</h4>
                {this.props.caotDataHistory.map(caotURL => {
                    return (<a className="caotURL" key={caotURL} href={caotURL}>{caotURL}</a>)
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotDataHistory: state.caotDataHistory,
})

export default connect(mapStateToProps)(GraphHistory);