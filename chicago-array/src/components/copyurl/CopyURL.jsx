import React from 'react';
import { connect } from 'react-redux';

class CopyURL extends React.Component{
    state = {
        // myURL: "",
        copied: false,
    }

    copyURL = (event) => {
        event.preventDefault()
        document.execCommand(copy, false, `${this.props.caotData}`)
        this.setState({
            copied: true,
        })
    }

    render(){
        return (
            <div>
                <button>Copy URL</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caotData: state.caotData,
})

export default connect(mapStateToProps, null)(CopyURL)