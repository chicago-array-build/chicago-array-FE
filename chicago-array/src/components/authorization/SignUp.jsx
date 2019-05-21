import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions';

class SignUp extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        // console.log(this.state)
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return (
            <section>
                <form onSubmit={this.signUp} action="">
                    <input required onChange={this.handleChange} name="username" value={this.state.username} type="text" placeholder="Username" />
                    <input required onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Password" />
                    <button onClick={this.signUp} type="submit">SignUp</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
})

export default connect(
    mapStateToProps,
    { signUp }
)(SignUp)