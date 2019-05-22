import React from 'react';
import { connect } from 'react-redux';
import Clipboard from 'react-clipboard.js';

import './copyurl.css';

class CopyURL extends React.Component{
    // state = {
    //     myURL: "",
    //     copied: false,
    // }

    render(){
        return (
            <div>
                <Clipboard data-clipboard-text={this.props.isLoggedIn}>
                    Copy URL
                </Clipboard>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotData: state.caotData,  // primary copy use once we are receiving URL from BE
    isLoggedIn: state.isLoggedIn, //for testing

})

export default connect(mapStateToProps, null)(CopyURL)