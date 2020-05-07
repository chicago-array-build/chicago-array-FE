import React from 'react';
import { connect } from 'react-redux';
import { saveURL } from '../../actions';

// Components
import CopyURL from "../copyurl/CopyURL";


class GraphHistory extends React.Component{
    state = {
        myurl: '',
    }

    saveURL = () => {
        this.props.saveURL(this.state.myurl)
    }


    render(){
        // console.log(this.props)
        if(this.props.fetchingData){
            return(<span className="loading-graph-hist">Loading...</span>)
        }else{
            return (   
                <div>
                    <section>
                        <h4>Graph History</h4>
                        {!this.props.caotData && (<p>No History</p>)}
                        {this.props.caotData && (
                            <section className="fetch-copy">
                                <CopyURL />
                            </section>
                        )}
                    </section>
                    <section>
                        {this.props.caotDataHistory.map(caotURL => {
                            return (<a className="caotURL" key={caotURL} href={caotURL} target="_blank">{caotURL}</a>)
                        })}
                    </section>
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    caotData: state.caotData,
    caotDataHistory: state.caotDataHistory,
    fetchingData: state.fetchingData,
})

export default connect(mapStateToProps, { saveURL })(GraphHistory);