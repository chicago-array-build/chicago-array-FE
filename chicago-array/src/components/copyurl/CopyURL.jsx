import React from 'react';
import { connect } from 'react-redux';
import Clipboard from 'react-clipboard.js';

import './copyurl.css';

class CopyURL extends React.Component{
    state = {
        myURL: this.props.caotData,
        // copied: false,
    }

    copy = (event) => {
        event.preventDefault() 
        this.setState({
            copied: true,
        })
    } 

    render(){
        // console.log(this.props.caotData)
        return (
            <Clipboard className="copyurl" data-clipboard-text={this.props.caotData}>
                COPY GRAPH URL
            </Clipboard>
        )
    }
}

const mapStateToProps = state => ({
    caotData: state.caotData,  // primary copy use once we are receiving URL from BE
    isLoggedIn: state.isLoggedIn, //for testing

})

export default connect(mapStateToProps, null)(CopyURL)