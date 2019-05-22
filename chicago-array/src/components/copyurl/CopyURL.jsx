import React from 'react';
import { connect } from 'react-redux';

import './copyurl.css';

class CopyURL extends React.Component{
    state = {
        myURL: "",
        // copied: false,
    }

    handleChange = (event) => {
        this.setState({
            myURL: event.target.value
        })
    }

    copyURL = (event) => {
        event.preventDefault()
        // console.log(this.props.isLoggedIn)
        const disURL = document.querySelector('#urlholder').select()
        document.execCommand('copy', false, disURL)
        this.setState({
            myURL: "",
            copied: true,
        })
    }

    render(){
        return (
            <div>
                <input id="urlholder" onChange={this.handleChange} type="text" value={this.props.isLoggedIn}/>
                <button onClick={this.copyURL}>Copy URL</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotData: state.caotData,
    isLoggedIn: state.isLoggedIn,

})

export default connect(mapStateToProps, null)(CopyURL)