import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';


class SignIn extends React.Component {
    state = {
        isLoggedIn: false,
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
        this.props.signIn(this.state).then(() => {
            this.props.history.push("/selectors");
        })
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return (
            <section>
                <h1>Sign In</h1>
                <form onSubmit={this.signIn} >
                    <input onChange={this.handleChange} name="username" value={this.state.username} type="text" placeholder="Username" required />
                    <input onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Password" required />
                    <button onClick={this.signIn} type="submit">SignIn</button>
                </form>
                <p>If you aren't already a user, please <a href="http://localhost:3000/signup">sign up</a>!</p>
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