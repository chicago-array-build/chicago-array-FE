import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';


class SignIn extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        // console.log(this.state);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return (
            <section>
                <form onSubmit={this.signIn} >
                    <input onChange={this.handleChange} name="username" value={this.state.username} type="text" placeholder="Username" required />
                    <input onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Password" required />
                    <button onClick={this.signIn} type="submit">SignIn</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(
    mapStateToProps, 
    { signIn }
)(SignIn)