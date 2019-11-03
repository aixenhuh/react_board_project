import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {
        console.log("123123")
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <input placeholder="이름" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <input placeholder="전화번호" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
                <button type="submit"></button>
            </div>
            </form>
        );
    }
}

export default PhoneForm;