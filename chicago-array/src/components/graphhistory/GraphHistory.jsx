import React from 'react';
import { connect } from 'react-redux';

class GraphHistory extends React.Component{
    state = {
        myurl: [],
    }

    componentDidMount(){
        this.setState({
            myurl: this.props.caotDataHistory
        })
    }

    render(){
        // console.log(this.props)
        return (
            
            <div>
                <h4>Graph History</h4>
                {this.state.myurl.map(caotURL => {
                    return (<a className="caotURL" key={caotURL} href={caotURL}>{caotURL}</a>)
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotDataHistory: state.caotDataHistory,
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(GraphHistory);