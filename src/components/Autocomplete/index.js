import React, { Component } from 'react';
import onUrlSubmit from '../../util/browser';
import './index.css';

export default class Autocomplete extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const sanitizedInput = onUrlSubmit(this.state.value);
        window.location.href = sanitizedInput;
    }

   render(){
        return (
            <form 
                className={'autocomplete'}
                onSubmit={this.handleSubmit}
            >
                <input
                    type={'text'} 
                    placeholder={'Search or Type URL'} 
                    className={'autocomplete-input'}
                    value={this.state.value}
                    onChange={this.handleChange} 
                />
            </form>
        );
    }
}