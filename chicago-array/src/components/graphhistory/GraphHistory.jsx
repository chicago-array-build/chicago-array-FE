import React from 'react';

class GraphHistory extends React.Component{
    state = {
        myurl: 'test',
    }
    render(){
        return (
            <div>
                <h4>Graph History</h4>
                <p>{this.state.myurl}</p>
            </div>
        )
    }
}

export default GraphHistory;