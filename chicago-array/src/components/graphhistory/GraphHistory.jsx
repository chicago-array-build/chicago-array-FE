import React from 'react';
import { connect } from 'react-redux';
import { saveURL } from '../../actions';

class GraphHistory extends React.Component{
    state = {
        myurl: '',
    }

    saveURL = () => {
        // this.props.saveURL(this.state.myurl)
        this.props.saveURL("7", "four", "tent")
    }


    render(){
        // console.log(this.props)
        return (
            
            <div>
                <h4>Graph History</h4>
                <a href={this.state.myurl}>{this.state.myurl}</a>
                {this.props.caotDataHistory.map(caotURL => {
                    return (<a key={caotURL} href={caotURL}>{caotURL}</a>)
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotDataHistory: state.caotDataHistory,
})

export default connect(mapStateToProps, { saveURL })(GraphHistory);