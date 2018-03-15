import React, { Component } from 'react';

class AuthForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.onSubmit({ email, password });
    }

    onChange({ target }) {
        const key = target.getAttribute('type');
        this.setState({ [key]: target.value });
    }

    render() {
        const renderError = error => (
            <div
                key={error}
            >
                {error}
            </div>
        );
        const errorsJSX = (
            <div className="errors">
                {this.props.errors.map(renderError)}
            </div>
        );

        return (
            <div className="row">
                <form
                    className="col s4"
                    onSubmit={this.onSubmit}
                >
                    {errorsJSX}
                    <div className="input-field">     
                        <input
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />   
                    </div>
                    <button className="btn">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AuthForm;