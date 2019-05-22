import React from 'react';
import { connect } from 'react-redux';

class CopyURL extends React.Component{
    state = {
        myURL: this.props.isLoggedIn,
        copied: false,
    }

    copyURL = (event) => {
        event.preventDefault()
        console.log(this.props.isLoggedIn)
        const disURL = document.querySelector('#urlholder').select()
        document.execCommand('copy', false, disURL)
        this.setState({
            copied: true,
        })
    }

    copytoclipboard

    render(){
        return (
            <div>
                <input id="urlholder" type="text" value={this.props.isLoggedIn}/>
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