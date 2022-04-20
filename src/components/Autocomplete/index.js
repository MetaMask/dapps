import React, { Component } from 'react';
import onUrlSubmit from '../../util/browser';
import{trackEvent, ANALYTICS_EVENT_OPTS} from '../../util/analytics';
import './index.css';

export default class Autocomplete extends Component {
    state = {
        value: ''
    }

    trackEventSearchUsed = () => {
        trackEvent(ANALYTICS_EVENT_OPTS.SEARCH_USED, {
            option_chosen: 'Search bar on dapp listing',
            number_of_tabs: undefined,
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    onFocus = (event) => {
        event.preventDefault();
        window.ethereum.send('metamask_showAutocomplete');
        // needs to be blurred or else it will still be focused when the metamask mobile modal closes triggering an infinite loop
        event.target.blur()
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.trackEventSearchUsed();
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
                    autoCapitalize="none"
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