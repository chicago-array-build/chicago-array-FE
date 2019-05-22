import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

import './auth.css';


class SignOut extends React.Component {


    signOut = (event) => {
        event.preventDefault()
        this.props.signOut()
    }

    render(){
        return (
            <section className="sign-out-container">
                <button className="b-signout" onClick={this.signOut} type="submit">Sign Out</button>
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