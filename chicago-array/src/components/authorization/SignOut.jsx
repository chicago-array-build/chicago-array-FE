import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';


class SignOut extends React.Component {


    signOut = (event) => {
        event.preventDefault()
        this.props.signOut()
    }

    render(){
        return (
            <section>
                <button onClick={this.signOut} type="submit">Sign Out</button>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(
    mapStateToProps, 
    { signOut }
)(SignOut)