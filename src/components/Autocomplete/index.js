import React, { useState } from 'react';
import onUrlSubmit from '../../util/browser';
import './index.css';

export default function Autocomplete(){
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const onFocus = (event) => {
        event.preventDefault();
        if(window.ethereum) window.ethereum.send('metamask_showAutocomplete');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchEngine = window.__mmSearchEngine || 'DuckDuckGo';
        const sanitizedInput = onUrlSubmit(value, searchEngine);
        window.location.href = sanitizedInput;
    }

    return (
        <form 
            className={'autocomplete'}
            onSubmit={handleSubmit}
        >
            <input
                autoCapitalize="none"
                type={'text'} 
                placeholder={'Search or Type URL'} 
                className={'autocomplete-input'}
                value={value}
                onChange={handleChange} 
                onFocus={onFocus}
            />
        </form>
    );
}