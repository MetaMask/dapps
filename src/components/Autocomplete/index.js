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

    onFocus = (event) => {
        event.preventDefault();
        window.ethereum.send('metamask_showAutocomplete');
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const searchEngine = window.__mmSearchEngine || 'DuckDuckGo';
        const sanitizedInput = onUrlSubmit(this.state.value, searchEngine);
        window.location.href = sanitizedInput;
    }

   render(){
        return (
            <form 
                className={'autocomplete'}
                onSubmit={this.handleSubmit}
            >
                <input
                    autocapitalize="none"
                    type={'text'} 
                    placeholder={'Search or Type URL'} 
                    className={'autocomplete-input'}
                    value={this.state.value}
                    onChange={this.handleChange} 
                    onFocus={this.onFocus}
                />
            </form>
        );
    }
}