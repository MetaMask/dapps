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
        window.ethereum.send('metamask_showAutocomplete');
    };

    onBlur = (event) => {
        event.target.blur()
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.trackEventSearchUsed();
        const searchEngine = window.__mmSearchEngine || 'DuckDuckGo';
        const sanitizedInput = onUrlSubmit(this.state.value, searchEngine);
        window.location.href = sanitizedInput;
    }

   render(){
        return (
            <div className={'autocomplete'} onClick={this.onFocus}>
                <div className={'autocomplete-input'}>
                Search or Type URL
                </div>    
            </div>
        );
    }
}