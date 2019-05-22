import React from 'react';
import { connect } from 'react-redux';

class CopyURL extends React.Component{
    state = {
        // myURL: "",
        copied: false,
    }

    copyURL = (event) => {
        event.preventDefault()
        console.log(this.props)
        document.execCommand('copy', false, `${this.props.isLoggedIn}`)
        this.setState({
            copied: true,
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.copyURL}>Copy URL</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotData: state.caotData,
    username: state.username,
    isLoggedIn: state.isLoggedIn,

})

export default connect(mapStateToProps, null)(CopyURL)