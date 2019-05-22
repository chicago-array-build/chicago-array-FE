import React from 'react';
import { connect } from 'react-redux';

class CopyURL extends React.Component{
    state = {
        myURL: "",
        copied: false,
    }

    copyURL = (event) => {
        event.preventDefault()
        document.execCommand(copy, )
    }

    render(){
        return (
            <div>
                <button>Copy URL</button>
            </div>
        )
    }
}

export default connect(null, null)(CopyURL)