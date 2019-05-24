import React from 'react';
import { connect } from 'react-redux';
import { saveURL } from '../../actions';

class GraphHistory extends React.Component{
    state = {
        myurl: '',
    }

    saveURL = () => {
        this.props.saveURL(this.state.myurl)
        // this.props.saveURL("7", "four", "tent")
    }


    render(){
        // console.log(this.props)
        if(this.props.fetchingData){
            return(<span>Loading...</span>)
        }else{
            return (   
                <div>
                    <h4>Graph History</h4>
                    {this.props.caotDataHistory.map(caotURL => {
                        return (<a className="caotURL" key={caotURL} href={caotURL}>{caotURL}</a>)
                    })}
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    caotDataHistory: state.caotDataHistory,
    fetchingData: state.fetchingData,
})

export default connect(mapStateToProps, { saveURL })(GraphHistory);